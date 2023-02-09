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

import SortedTable, { LinkColumn, TableColumn, TableRowType, isDurationColumn } from "./SortedTable";

import { ApiContext } from "./ApiContext";

import { Button } from "react-bootstrap";
import refresh from "../images/refresh.svg";
import { TextColumn, DurationColumn, TimeColumn } from "./SortedTable";

// export interface ClustersListProps {}

const ClustersList = () => {
	const API = useContext(ApiContext);

	useEffect(() => {
		API.dataLoaders.clusterSummary(false);
	}, [API.dataLoaders]);

	const sortClusterSummary: Function = (fieldNo: number) => {
		return (asc: boolean) => {
			return (rowA: TableRowType, rowB: TableRowType) => {
				const fieldA: TableColumn = rowA[fieldNo];
				const fieldB: TableColumn = rowB[fieldNo];

				let a: number | string;
				let b: number | string;

				if (isDurationColumn(fieldA) && isDurationColumn(fieldB)) {
					a = fieldA.last - fieldA.first;
					b = fieldB.last - fieldB.first;
				} else if (!isDurationColumn(fieldA) && !isDurationColumn(fieldB)) {
					a = fieldA.value;
					b = fieldB.value;
				} else return 0;

				if (asc) return a === b ? 0 : a > b ? -1 : 1;
				return a === b ? 0 : a < b ? -1 : 1;
			};
		};
	};

	if (API.data.clusterSummary === "Error" || !Array.isArray(API.data.clusterSummary))
		return <p>Something went wrong. See console for details</p>;

	if (API.data.clusterSummary.length === 0) return <div className="spinner-border"></div>;

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
			<div style={{ height: `calc(100% - 60px` }}>
				<SortedTable
					values={API.data.clusterSummary.map((record, i): TableRowType => {
						const clusterId: TextColumn = { type: "text", value: record.clusterID };
						const uptime: DurationColumn = {
							type: "timeDuration",
							last: record.computedFirstSeen,
							first: record.timestamp
						};
						const lastSeen: TimeColumn = { type: "time", value: record.timestamp };
						const provider: TextColumn = { type: "text", value: record.telemetry.provider || "N.A." };
						const link: LinkColumn = { type: "link", value: `/cluster/${record.clusterID}` };
						const inPeers: TextColumn = {
							type: "text",
							value: String(
								record.telemetry?.peeringInfo === undefined
									? 0
									: record.telemetry.peeringInfo.filter((pi) =>
											pi.incoming === undefined ? false : pi.incoming.enabled
									  ).length
							)
						};
						const outPeers: TextColumn = {
							type: "text",
							value: String(
								record.telemetry?.peeringInfo === undefined
									? 0
									: record.telemetry.peeringInfo.filter((pi) =>
											pi.outgoing === undefined ? false : pi.outgoing.enabled
									  ).length
							)
						};
						return [clusterId, uptime, lastSeen, provider, inPeers, outPeers, link];
					})}
					columns={[
						{ type: "text", label: "Cluster ID" },
						{ type: "timeDuration", label: "Uptime" },
						{ type: "text", label: "Last seen" },
						{ type: "text", label: "Provider" },
						{ type: "text", label: "#IN peers" },
						{ type: "text", label: "#OUT peers" }
					]}
					sortingFunct={sortClusterSummary}
				/>
			</div>
		</div>
	);
};

export default ClustersList;
