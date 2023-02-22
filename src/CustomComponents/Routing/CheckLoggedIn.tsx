/*

description:
	Checks if the user is logged in.
	If so, renders the correct page.
	If not, redirects to the re-login page
	
state:
	
hooks:
	
context:
	- ApiContext
	
imported into:
	- PageRouter
	
component dependences:
	- ClustersList
	
other dependences:
	- requireLogin
	- react-router-dom components
	
*/

import { useContext } from "react";

import { Navigate, useParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";
import { requireLogin } from "../../devSettings";

import ClustersList from "../Cluster pages/ClustersList";
import ClusterDetails from "../Cluster pages/ClusterDetails";

export interface CheckLoggedInProps {
	link: string; // the link of the displayed page
}

const CheckLoggedIn = ({ link }: CheckLoggedInProps) => {
	let { clusterID } = useParams();

	let API = useContext(ApiContext);

	if (requireLogin && !API.isTokenPresent()) return <Navigate to="/logbackin" />;

	switch (link) {
		case "/test":
			return <p>Test</p>;
		case "/clusters":
			return <ClustersList />;
		case "/cluster":
			return <ClusterDetails clusterID={clusterID || ""} />;

		default:
			return <p>Default</p>;
	}
};

export default CheckLoggedIn;
