/*

description:
	Displays the page that contains the list of clusters.
	If data is wrong or pending, notifies the user.
	
state:
	
props:
	
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

import React, { useContext, useEffect } from "react";

import SortedTable from "./SortedTable";

import ApiContext from "./ApiContext";

import { Button } from "react-bootstrap";
import refresh from "../images/refresh.svg";

const ClustersList = () => {
	const { API } = useContext(ApiContext);

	useEffect(() => {
		API.dataLoaders.clusterSummary(false);
	}, []);

	const sortClusterSummary = (type, fieldNo) => {
		let difference = false;
		switch (type) {
			case "text":
			case "time":
				break;
			case "timeDuration":
				difference = true;
				break;
			default:
				break;
		}

		return (asc) => {
			return (a, b) => {
				if (difference) {
					a = a[fieldNo].last - a[fieldNo].first;
					b = b[fieldNo].last - b[fieldNo].first;
				} else {
					a = a[fieldNo].value;
					b = b[fieldNo].value;
				}

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
					data={API.data.clusterSummary.map((record, i) => {
						return [
							{ type: "text", value: record.clusterID },
							{ type: "timeDuration", last: record.computedFirstSeen, first: record.timestamp },
							{ type: "time", value: record.timestamp },
							{ type: "text", value: record.telemetry.provider },
							{
								type: "text",
								value: record.telemetry.peeringInfo.filter((pi) => pi.incoming).length
							},
							{ type: "text", value: record.telemetry.peeringInfo.filter((pi) => pi.outgoing).length },
							{ type: "link", value: `/cluster/${record.clusterID}` }
						];
					})}
					columns={[
						{ type: "text", label: "Cluster ID" },
						{ type: "timeDuration", label: "Uptime" },
						{ type: "time", label: "Last seen" },
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
