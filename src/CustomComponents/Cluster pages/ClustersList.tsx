/*

description:
	Displays the page that contains the list of clusters.
	If data is wrong or pending, notifies the user.
	
state:
	
hooks:
	- useEffect: on mount, loads the data from the database, without forcing the
		reload if the data is already present
	
context:
	- ApiContext
	
imported into:
	- CheckLoggedIn
	
component dependences:
	- SortedTable

other dependences:
	- React-bootstrap components
	- refresh icon
	
*/

import { useContext, useEffect } from "react";

import SortedTable from "../Tables/SortedTable";

import { ApiContext } from "../ApiContext";

import { Button } from "react-bootstrap";
import refresh from "../../images/refresh.svg";
import {
	TableRowType,
	TextColumn,
	DurationColumn,
	TimeColumn,
	LinkColumn,
	IconColumn,
	ClusterGenericInfo,
	ApiContextStructure
} from "../../types";
import { Entries } from "type-fest";
import { providerToIcon, sortTable, getLocationString } from "../../utils";

// export interface ClustersListProps {}

const ClustersList = () => {
	const API = useContext(ApiContext);

	useEffect(() => {
		API.dataLoaders.clusterSummary(false);
	}, [API.dataLoaders]);

	if (API.data.clusterSummary === "Error") return <p>Something went wrong. See console for details</p>;

	if (JSON.stringify(API.data.clusterSummary) === "{}") return <div className="spinner-border"></div>;

	return (
		<div className="h-100percent">
			<div style={{ height: "60px" }} className="mb-0 mx-2 d-flex align-items-center justify-content-between">
				<h1 className="m-0">Clusters list</h1>
				<Button
					variant="dark"
					title="Refresh"
					className="py-auto"
					onClick={() => {
						API.dataLoaders.clusterSummary(true);
					}}
				>
					<img alt="Refresh" src={refresh} style={{ filter: "invert(1)", height: "15px" }} />
				</Button>
			</div>
			<div style={{ height: `calc(100% - 60px` }} className="pb-2">
				<SortedTable
					values={(Object.entries(API.data.clusterSummary) as Entries<typeof API.data.clusterSummary>).map(
						([clusterID, record]): TableRowType => createTableColumn(API, clusterID, record)
					)}
					columns={[
						{ type: "text", label: "Cluster ID" },
						{ type: "timeDuration", label: "Uptime" },
						{ type: "text", label: "Last seen" },
						{ type: "text", label: "Provider" },
						{ type: "text", label: "Location" },
						{ type: "text", label: "Liqo version" },
						{ type: "text", label: "#IN peers" },
						{ type: "text", label: "#OUT peers" }
					]}
					sortingFunct={sortTable}
				/>
			</div>
		</div>
	);
};

export default ClustersList;

const createTableColumn = (API: ApiContextStructure, clusterID: string, record: ClusterGenericInfo): TableRowType => {
	const clusterIdCol: TextColumn = { type: "text", value: clusterID };
	const uptime: DurationColumn = {
		type: "timeDuration",
		first: record.computedFirstSeen,
		last: record.lastSeen
	};
	const lastSeen: TimeColumn = { type: "time", value: record.lastSeen };
	const provider: IconColumn = {
		type: "textWithIcon",
		value: record.provider,
		icon: providerToIcon(record.provider)
	};
	const location: TextColumn = {
		type: "text",
		value: getLocationString(API.data.clusterSummary, clusterID)
	};
	const liqoVersion: TextColumn = { type: "text", value: record.liqoVersion };
	const inPeers: TextColumn = { type: "text", value: String(record.inPeers) };
	const outPeers: TextColumn = { type: "text", value: String(record.outPeers) };
	const link: LinkColumn = { type: "link", value: `/cluster/${clusterID}` };
	return [clusterIdCol, uptime, lastSeen, provider, location, liqoVersion, inPeers, outPeers, link];
};
