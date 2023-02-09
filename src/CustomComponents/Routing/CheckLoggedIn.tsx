/*

description:
	
	
state:
	- 
	
hooks:
	- 
	
context:
	- 
	
imported into:
	- 
	
component dependences:
	- 
	
other dependences:
	- 
	
*/

import { useContext } from "react";

import { Navigate, useParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";
import requireLogin from "../../requireLogin";

import ClustersList from "../ClustersList";

export interface CheckLoggedInProps {
	link: string;
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
			return <>{clusterID}</>;

		default:
			return <p>Default</p>;
	}
};

export default CheckLoggedIn;

/*

description:
	Checks if the user is logged in.
	If so, renders the correct page.
	If not, redirects to the re-login page
	
state:
	
props:
	- link: the link of the displayed page
	
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
