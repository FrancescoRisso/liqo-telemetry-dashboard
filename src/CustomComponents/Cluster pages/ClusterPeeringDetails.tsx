import { ClusterDataType } from "../../types";
import { Table } from "react-bootstrap";
/*

description:
	The full descryption of a peering detail
	
state:
	
hooks:
	
context:
	
imported into:
	- ClusterDetails
	
component dependences:
	
other dependences:
	
*/

export interface ClusterPeeringDetailsProps {
	record: ClusterDataType;
}

const ClusterPeeringDetails = ({ record }: ClusterPeeringDetailsProps) => {
	const v = true;
	if(v) return <p>To do</p>;

	return (
		<ul>
			{record.telemetry.peeringInfo === undefined ? (
				<></>
			) : (
				record.telemetry.peeringInfo.map((peeringInfo, index) => {
					return (
						<li key={index}>
							<td>
								<ul>
									<li>Remote cluster ID: {peeringInfo.remoteClusterID || "N.A."}</li>
								</ul>
							</td>
						</li>
					);
				})
			)}
		</ul>
	);
};

export default ClusterPeeringDetails;
