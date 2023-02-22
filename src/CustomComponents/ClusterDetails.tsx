/*

description:
	Displays a cluster information and the list of its peers
	
state:
	- 
	
hooks:
	- useEffect: on mount or on clusterID change, loads the data from the
		database, without forcing the reload if the data is already present
	
context:
	- ApiContext
	
imported into:
	- CheckLoggedIn
	
component dependences:
	- Map
	
other dependences:
	- 
	
*/

import { useContext, useEffect, useMemo } from "react";

import ClusterTitle from "./ClusterTitle";

import { ApiContext } from "./ApiContext";
import { ClusterDataType, TimeColumn, TextColumn, IconColumn, PeerCount, ChildColumn } from '../types';
import SortedTable from "./SortedTable";
import { providerToIcon, sortTable, getLocationString } from "../utils";

export interface ClusterDetailsProps {
	clusterID: string;
}

const ClusterDetails = ({ clusterID }: ClusterDetailsProps) => {
	const API = useContext(ApiContext);

	useEffect(() => {
		API.dataLoaders.clusterSummary(false);
	}, [API.dataLoaders]);

	useEffect(() => {
		API.dataLoaders.clusterData(clusterID);
	}, [API.dataLoaders, clusterID]);

	const thisClusterData: "Error" | ClusterDataType[] = useMemo(() => {
		return API.data.clusterData[clusterID];
	}, [API.data, clusterID]);

	const peersCount: PeerCount = useMemo(() => {
		if (thisClusterData === "Error" || thisClusterData === undefined || thisClusterData.length === 0)
			return { avg: { in: 0, out: 0 }, max: { in: 0, out: 0 } };
		return {
			avg: {
				in: thisClusterData.reduce((partSum, record) => partSum + record.inPeers, 0) / thisClusterData.length,
				out: thisClusterData.reduce((partSum, record) => partSum + record.outPeers, 0) / thisClusterData.length
			},
			max: {
				in: Math.max(...thisClusterData.map((record) => record.inPeers)),
				out: Math.max(...thisClusterData.map((record) => record.outPeers))
			}
		};
	}, [thisClusterData]);

	const location = useMemo(() => {
		return getLocationString(API.data.clusterSummary, clusterID);
	}, [API.data.clusterSummary, clusterID]);

	if (thisClusterData === "Error" || API.data.clusterSummary === "Error")
		return (
			<div className="h-100percent w-100percent">
				<ClusterTitle clusterID={clusterID} error />
			</div>
		);
	else if (thisClusterData === undefined || API.data.clusterSummary[clusterID] === undefined)
		return (
			<div className="h-100percent w-100percent">
				<ClusterTitle clusterID={clusterID} loading />
			</div>
		);

	return (
		<div className="h-100percent w-100percent pb-2">
			<ClusterTitle
				clusterID={clusterID}
				firstSeen={API.data.clusterSummary[clusterID].computedFirstSeen}
				lastSeen={API.data.clusterSummary[clusterID].lastSeen}
				coordinates={API.data.clusterSummary[clusterID].ip?.geo?.ll || undefined}
				ip={API.data.clusterSummary[clusterID].ip?.ip}
				peers={peersCount}
				location={location}
			/>
			<div className="h-70percent pt-2">
				<SortedTable
					initialSorting={{col: 0, ascending: false}}
					columns={[
						{ type: "text", label: "Timestamp" },
						{ type: "text", label: "Provider" },
						{ type: "text", label: "K8s version" },
						{ type: "text", label: "Liqo version" },
						{ type: "text", label: "#IN peers" },
						{ type: "text", label: "#OUT peers" }
					]}
					values={thisClusterData.map((record) => {
						const timestamp: TimeColumn = { type: "time", value: record.timestamp };
						const provider: IconColumn = {
							type: "textWithIcon",
							value: record.telemetry.provider || "N.A.",
							icon: providerToIcon(record.telemetry.provider || "N.A.")
						};
						const version: TextColumn = { type: "text", value: record.telemetry.liqoVersion || "N.A." };
						const k8sVersion: TextColumn = {
							type: "text",
							value: record.telemetry.kubernetesVersion || "N.A."
						};
						const inPeers: TextColumn = { type: "text", value: String(record.inPeers) };
						const outPeers: TextColumn = { type: "text", value: String(record.outPeers) };
						const details: ChildColumn = {
							type:"child",
							value: <div className="w-100percent p-0">Tmp test</div>
						}
						return [timestamp, provider, k8sVersion, version, inPeers, outPeers, details];
					})}
					sortingFunct={sortTable}
				/>
			</div>
		</div>
	);
};

export default ClusterDetails;
