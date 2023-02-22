import * as AWS from "aws-sdk";

import lastRecordCached from "./cached-last-record-table";
import firstRecordCached from "./cached-first-record-table";
import detailsCached from "./cached-cluster-details";

import { IP, Telemetry, DatabaseRow, PeeringInfo, AWSParams } from "./types";
import { requireLogin } from "./env";

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
		row.ip ??= deepCopy(emptyIp);

		row.telemetry ??= getEmptyTelemetry(row.clusterID);

		row.telemetry.clusterID ??= row.clusterID;
		row.telemetry.provider ??= "N.A.";
		row.telemetry.liqoVersion ??= "N.A.";
		row.telemetry.kubernetesVersion ??= "N.A.";
		row.telemetry.peeringInfo ??= [];
		row.telemetry.peeringInfo = row.telemetry.peeringInfo.map((info: PeeringInfo) => {
			info.remoteClusterID ??= "N.A.";
			info.method ??= "N.A.";
			info.discoveryType ??= "N.A.";
			info.latency ??= undefined;
			info.incoming ??= { enabled: false };
			info.outgoing ??= { enabled: false };
			return info;
		});

		row.telemetry.namespacesInfo ??= [];

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
