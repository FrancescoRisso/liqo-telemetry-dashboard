import * as AWS from "aws-sdk";

import lastRecordCached from "./cached-last-record-table";
import firstRecordCached from "./cached-first-record-table";
import detailsCached from "./cached-cluster-details";

import { IP, Telemetry, DatabaseRow, PeeringInfo, AWSParams } from "./types";
import { requireLogin } from "./devSettings";

const deepCopy = (original: any): any => {
	return JSON.parse(JSON.stringify(original)) as typeof original;
};

const emptyIp: IP = { ip: "N.A.", geo: undefined };

const getEmptyTelemetry = (clusterID: string): Telemetry => {
	return deepCopy({
		clusterID,
		provider: "N.A.",
		liqoVersion: "N.A.",
		kubernetesVersion: "N.A.",
		peeringInfo: [],
		namespacesInfo: []
	});
};

// Sets up the AWS configs
const login = (token: string) => {
	AWS.config.update({
		region: "eu-west-1"
	});

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: "eu-west-1:ad173869-6674-4dbc-9751-33b0281f6d08",
		Logins: {
			"cognito-idp.eu-west-1.amazonaws.com/eu-west-1_LeT31Ger7": token
		}
	});
};

// Given a list of entries of the database, fills the missing information.
// Useful to avoid errors in the page
const fillGaps = (table: DatabaseRow[]) => {
	table.map((row: DatabaseRow) => {
		if (!("ip" in row)) row.ip = deepCopy(emptyIp);

		if (!("telemetry" in row) || row.telemetry === undefined) row.telemetry = getEmptyTelemetry(row.clusterID);
		else {
			if (!("clusterID" in row.telemetry) || row.telemetry.clusterID === undefined)
				row.telemetry.clusterID = row.clusterID;
			if (!("provider" in row.telemetry) || row.telemetry.provider === undefined) row.telemetry.provider = "N.A.";
			if (!("liqoVersion" in row.telemetry) || row.telemetry.liqoVersion === undefined)
				row.telemetry.liqoVersion = "N.A.";
			if (!("kubernetesVersion" in row.telemetry) || row.telemetry.kubernetesVersion === undefined)
				row.telemetry.kubernetesVersion = "N.A.";
			if (!("peeringInfo" in row.telemetry) || row.telemetry.peeringInfo === undefined)
				row.telemetry.peeringInfo = [];
			else {
				row.telemetry.peeringInfo = row.telemetry.peeringInfo.map((info: PeeringInfo) => {
					if (!("remoteClusterID" in info)) info.remoteClusterID = "N.A.";
					if (!("method" in info)) info.method = "N.A.";
					if (!("discoveryType" in info)) info.discoveryType = "N.A.";
					if (!("latency" in info)) info.latency = undefined;
					if (!("incoming" in info) || info.incoming === undefined) info.incoming = { enabled: false };
					if (!("outgoing" in info) || info.outgoing === undefined) info.outgoing = { enabled: false };
					return info;
				});
			}
			if (!("namespacesInfo" in row.telemetry) || row.telemetry.namespacesInfo === undefined)
				row.telemetry.namespacesInfo = [];
		}

		// if (!("timestamp" in row)) row.timestamp = 0;

		return row;
	});
	return table;
};

// Creates a fake table that mimic the real ones.
// Useful only for testing
const getFullTableFake = (tableName: string) => {
	if (tableName === "liqo-user-telemetry-first-record") return fillGaps(firstRecordCached);
	if (tableName === "liqo-user-telemetry-last-record") return fillGaps(lastRecordCached);
};

// Retreives the content of a full table from the database
const getFullTable = async (tableName: string) => {
	if (!requireLogin) return getFullTableFake(tableName);

	const docClient = new AWS.DynamoDB.DocumentClient();
	let params: AWSParams = {
		TableName: tableName
	};

	let items: any;
	let database: DatabaseRow[] = [];

	do {
		items = await docClient.scan(params).promise();
		items.Items.forEach((item: DatabaseRow) => {
			database.push(item);
		});
		params.ExclusiveStartKey = items.LastEvaluatedKey;
	} while (typeof items.LastEvaluatedKey !== "undefined");

	return fillGaps(database);
};

// Retreives all the data of a specific cluster from the database
const getClusterData = async (clusterID: string) => {
	if (!requireLogin) return detailsCached[clusterID];

	const docClient = new AWS.DynamoDB.DocumentClient();
	let params = {
		TableName: "liqo-user-telemetry",
		ExpressionAttributeValues: {
			":c": clusterID
		},
		KeyConditionExpression: "clusterID = :c"
	};

	const result = await docClient.query(params).promise();
	console.log({ [clusterID]: result.Items });
	return result.Items;
};

export { login, getFullTable, getClusterData };
