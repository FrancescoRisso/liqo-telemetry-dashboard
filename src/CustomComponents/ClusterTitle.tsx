/*

description:
	All the information about a cluster
	
state:
	
hooks:
	
context:
	
imported into:
	- ClusterDetails
	
component dependences:
	- Map
	
other dependences:
	- 
	
*/

import Moment from "react-moment";
import Map from "./Map";
import { PeerCount } from "../types";

export interface ClusterTitleProps {
	clusterID: string; // The ID of the cluster
	loading?: boolean; // If data is still loading
	error?: boolean; // If there was an error while loading the data
	firstSeen?: number; // The timestamp of the first appearence of the cluster
	lastSeen?: number; // The timestamp of the last appearence of the cluster
	coordinates?: [number, number]; // The coordinates of the cluster
	ip?: string; // The last known ip address
	peers?: PeerCount; // The average and max number of in and out peers
	location?: string; // State/region/city of the cluster
}

const ClusterTitle = ({
	clusterID,
	loading,
	error,
	firstSeen,
	lastSeen,
	coordinates,
	ip,
	peers,
	location
}: ClusterTitleProps) => {
	return (
		<div className="h-30percent">
			<div className="h-30percent">
				<h1 className="center-text-vertically pl-2 mb-0 center-vertically" id="cluster-title">
					Cluster ID: {clusterID}
				</h1>
			</div>
			{loading ? (
				<div className="spinner-border"></div>
			) : error ? (
				<p>Something went wrong. See console for details.</p>
			) : (
				<div className="row h-70percent">
					<div className="col-3">
						<Map width={"100%"} height={"100%"} pins={coordinates === undefined ? [] : [coordinates]} />
					</div>
					<div className="col-9 row">
						<div className="col-6">
							<div>
								<span>Uptime: </span>
								<Moment
									duration={firstSeen}
									date={lastSeen}
									format="D [days], H [hours], m [minutes]"
								/>
							</div>
							<div>
								<span>Last seen: </span>
								<Moment date={lastSeen} format="YYYY-MM-DD HH:mm:ss" />
							</div>
							<div>
								<span>First seen: </span>
								<Moment date={firstSeen} format="YYYY-MM-DD HH:mm:ss" />
							</div>
							<div>Location: {location}</div>
						</div>
						<div className="col-6">
							<div>Last IP address: {ip}</div>
							<div>Max incoming peers: {peers?.max.in}</div>
							<div>Avg incoming peers: {peers?.avg.in}</div>
							<div>Max outgoing peers: {peers?.max.out}</div>
							<div>Max outgoing peers: {peers?.avg.out}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClusterTitle;
