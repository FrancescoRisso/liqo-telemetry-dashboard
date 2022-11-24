import * as AWS from "aws-sdk";
import requireLogin from "./requireLogin";

// Sets up the AWS configs
const login = (token) => {
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
const fillGaps = (table) => {
	table.map((row) => {
		if (!("IsInstallation" in row.telemetry)) row.telemetry.isInstallation = false;
		if (!("clusterID" in row.telemetry)) row.telemetry.clusterID = row.clusterID;
		if (!("provider" in row.telemetry)) row.telemetry.provider = "N.A.";
		if (!("liqoVersion" in row.telemetry)) row.telemetry.liqoVersion = "N.A.";
		if (!("kubernetesVersion" in row.telemetry)) row.telemetry.kubernetesVersion = "N.A.";
		if (!("peeringInfo" in row.telemetry)) row.telemetry.peeringInfo = [];
		row.telemetry.peeringInfo = row.telemetry.peeringInfo.map((info) => {
			if (!("remoteClusterID" in info)) info.remoteClusterID = "N.A.";
			if (!("method" in info)) info.method = "N.A.";
			if (!("discoveryType" in info)) info.discoveryType = "N.A.";
			if (!("latency" in info)) info.latency = "N.A.";

			["outgoing", "incoming"].forEach((type) => {
				if (!(type in info)) info[type] = null;
				else {
					if (!("uid" in info[type])) info[type].uid = "N.A.";
					if (!("mappingStrategy" in info[type])) info[type].mappingStrategy = "N.A.";
					if (!("offloadingStrategy" in info[type])) info[type].offloadingStrategy = "N.A.";
					if (!("hasClusterSelector" in info[type])) info[type].hasClusterSelector = "N.A.";
					if (!("numOffloadedPods" in info[type])) info[type].numOffloadedPods = "N.A.";
				}
			});
			return info;
		});
		return row;
	});
	return table;
};

// Creates a fake table that mimic the real ones.
// Useful only for testing
const getFullTableFake = (tableName) => {
	const lastRecord = [
		{
			ip: "87.9.217.73",
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1460262912, 1460263936],
				region: "21"
			},
			clusterID: "cf84a81e-f477-425f-abe4-abe96697d269",
			telemetry: {
				isInstallation: false,
				clusterID: "cf84a81e-f477-425f-abe4-abe96697d269"
			},
			timestamp: 1662387574283
		}
	];

	const firstRecord = [
		{
			ip: "87.9.217.73",
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1460262912, 1460263936],
				region: "21"
			},
			clusterID: "cf84a81e-f477-425f-abe4-abe96697d269",
			telemetry: {
				isInstallation: true,
				clusterID: "cf84a81e-f477-425f-abe4-abe96697d269"
			},
			timestamp1: 1662387448405,
			timestamp: 1651830989000
		}
	];

	let n = 15;
	let last = [];
	let first = [];
	for (let i = 0; i < n; i++) {
		last.push(JSON.parse(JSON.stringify(lastRecord[0])));
		first.push(JSON.parse(JSON.stringify(firstRecord[0])));
	}

	last = last.map((x, i) => {
		x.clusterID = i;
		x.telemetry.provider = (3 * i * i + 2 * i + 6) % n;
		return x;
	});

	last[0].telemetry.peeringInfo = [{ incoming: {} }];
	last[1].telemetry.peeringInfo = [{ incoming: {}, outgoing: {} }];
	last[2].telemetry.peeringInfo = [{ outgoing: {} }];

	first = first.map((x, i) => {
		x.clusterID = i;
		x.telemetry.provider = (3 * i * i + 2 * i + 6) % n;
		return x;
	});

	if (tableName === "liqo-user-telemetry-first-record") return fillGaps(first);

	if (tableName === "liqo-user-telemetry-last-record") return fillGaps(last);
};

// Retreives the content of a full table from the database
const getFullTable = async (tableName) => {
	if (!requireLogin) return getFullTableFake(tableName);

	const docClient = new AWS.DynamoDB.DocumentClient();
	let params = {
		TableName: tableName
	};

	let items;
	let database = [];

	do {
		items = await docClient.scan(params).promise();
		items.Items.forEach((item) => {
			database.push(item);
		});
		params.ExclusiveStartKey = items.LastEvaluatedKey;
	} while (typeof items.LastEvaluatedKey !== "undefined");

	return fillGaps(database);
};

export { login, getFullTable };
