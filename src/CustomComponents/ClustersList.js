/*

description:
	Displays the page that contains the list of clusters.
	If data is wrong or pending, displays this information.
	
state:
	
props:
	
functions:
	- componentDidMount(): loads the data into the context API
	- sortClusterSummary(type, fieldNo): given an attribute in the form of
		(type of data [type], number of column where to find it[fieldNo]), returns a
		function that, given a boolean "asc", returns the comparing function to be
		passed to the Array.sort().
	
imported into:
	- CheckLoggedIn
	
dependences:
	- SortedTable
	- ApiContext
	- React-bootstrap components
	- refresh image
	
*/

import React from "react";

import SortedTable from "./SortedTable";

import ApiContext from "./ApiContext";

import { Button } from "react-bootstrap";
import refresh from "../images/refresh.svg";

class ClustersList extends React.Component {
	static contextType = ApiContext;

	componentDidMount = () => {
		this.context.API.dataLoaders.clusterSummary(false);
	};

	sortClusterSummary = (type, fieldNo) => {
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

	render() {
		if (this.context.API.data.clusterSummary === "Error" || !Array.isArray(this.context.API.data.clusterSummary))
			return <p>Something went wrong. See console for details</p>;

		if (this.context.API.data.clusterSummary.length === 0) return <div className="spinner-border"></div>;

		return (
			<div className="h-100percent">
				<div style={{ height: "60px" }} className="mb-0 mx-2 d-flex align-items-center justify-content-between">
					<h1 className="m-0">Clusters list</h1>
					<Button
						variant="dark"
						title="Refresh"
						className="py-auto"
						onClick={() => {
							this.context.API.dataLoaders.clusterSummary(true);
						}}
					>
						<img alt="Refresh" src={refresh} style={{ filter: "invert(1)", height: "15px" }} />
					</Button>
				</div>
				<div style={{ height: `calc(100% - 60px` }}>
					<SortedTable
						data={this.context.API.data.clusterSummary.map((record, i) => {
							return [
								{ type: "text", value: record.clusterID },
								{ type: "timeDuration", last: record.computedFirstSeen, first: record.timestamp },
								{ type: "time", value: record.timestamp },
								{ type: "text", value: record.telemetry.provider },
								{
									type: "text",
									value: record.telemetry.peeringInfo.filter((pi) => pi.incoming).length
								},
								{ type: "text", value: record.telemetry.peeringInfo.filter((pi) => pi.outgoing).length }
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
						sortingFunct={this.sortClusterSummary}
					/>
				</div>
			</div>
		);
	}
}

export default ClustersList;
