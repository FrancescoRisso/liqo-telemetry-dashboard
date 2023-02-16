/* =================================================================\
|	Structure of the API context values								|
\================================================================= */

export interface ClusterGenericInfo {
	ip?: IP;
	computedFirstSeen: number;
	lastSeen: number;
	provider: string;
	inPeers: number;
	outPeers: number;
	liqoVersion: string
}

export interface ClusterDataType {
	ip?: IP;
	telemetry: Telemetry;
	timestamp: number;
	inPeers: number;
	outPeers: number;
}

export interface ApiContextStructure {
	setToken: Function;
	isTokenPresent: Function;
	isTokenSameAs: Function;
	dataLoaders: {
		clusterSummary: Function;
		clusterData: Function;
	};
	data: {
		clusterSummary: "Error" | Record<string, ClusterGenericInfo>;
		clusterData: Record<string, ClusterDataType[] | "Error">;
	};
}

/* =================================================================\
|	table sorting function											|
\================================================================= */
type TableComparisonFunction = (valA: any[], valB: any[]) => 0 | 1 | -1;
export type TableSortingFunction = (fieldNo: number) => (asc: boolean) => TableComparisonFunction;

/* =================================================================\
|	possible table column types										|
\================================================================= */
export interface TextColumn {
	type: "text";
	value: string;
}

export interface IconColumn {
	type: "textWithIcon";
	value: string;
	icon: string;
}

export interface LinkColumn {
	type: "link";
	value: string;
}

export interface TimeColumn {
	type: "time";
	value: number;
}

export interface DurationColumn {
	type: "timeDuration";
	last: number;
	first: number;
	value?: undefined; // unused
}

export type TableColumn = TextColumn | LinkColumn | TimeColumn | DurationColumn | IconColumn;
export type TableRowType = TableColumn[];

export interface TableColumnTitle {
	type: "text" | "timeDuration";
	label: string;
}

export function isDurationColumn(obj: TableColumn): obj is DurationColumn {
	return obj.type === "timeDuration";
}

export function isClusterDataType(obj: "Error" | ClusterDataType[]): obj is ClusterDataType[] {
	return obj !== "Error";
}

/* =================================================================\
|	LIQO telemetry types											|
|	Taken from https://github.com/liqotech/user-telemetry/blob/		|
|		main/src/usertelemetryitem.ts								|
\================================================================= */

export interface ipInfo {
	range: [number, number];
	country: string;
	region: string;
	eu: "0" | "1";
	timezone: string;
	city: string;
	ll: [number, number];
	metro: number;
	area: number;
}

export interface NamespaceInfo {
	uid: string;
	mappingStrategy: "DefaultName" | "EnforceSameName";
	offloadingStrategy: "Local" | "Remote" | "LocalAndRemote";
	hasClusterSelector: boolean;
	numOffloadedPods: Record<string, number>;
}

export interface PeeringDetails {
	enabled: boolean;
	resources?: Record<string, string>;
}

export interface PeeringInfo {
	remoteClusterID?: string;
	method?: "InBand" | "OutOfBand" | "N.A."; // Added a N.A value
	discoveryType?: "LAN" | "Manual" | "IncomingPeering" | "N.A."; // Added a N.A value
	latency?: number;
	incoming?: PeeringDetails;
	outgoing?: PeeringDetails;
}

export interface Telemetry {
	clusterID?: string;
	provider?: string;
	liqoVersion?: string;
	kubernetesVersion?: string;
	peeringInfo?: PeeringInfo[];
	namespacesInfo?: NamespaceInfo[];
}

export interface IP {
	ip: string;
	geo?: ipInfo | undefined;
	// TODO: add provider info
}

export interface DatabaseRow {
	clusterID: string;
	ip?: IP;
	telemetry: Telemetry;
	timestamp: number;
}

/* =================================================================\
|	AWS types														|
\================================================================= */

export interface AWSParams {
	TableName: string;
	ExclusiveStartKey?: any;
}

/* =================================================================\
|	other															|
\================================================================= */

export interface PeerCount {
	avg: {
		in: number;
		out: number;
	};
	max: {
		in: number;
		out: number;
	};
}
