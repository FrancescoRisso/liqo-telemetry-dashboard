/*

description:
	Checks if the user is logged in.
	If so, renders the correct page.
	If not, redirects to the re-login page
	
state:
	
props:
	- link: the link of the displayed page
	- params (optional): the eventual parameters to be passed to the child
	
functions:
	
imported into:
	- PageRouter
	
dependences:
	- ClustersList
	- ApiContext
	- react-router-dom components
	- requireLogin
	
*/

import React from "react";

import ClustersList from "../ClustersList";

import ApiContext from "../ApiContext";
import requireLogin from "../../requireLogin";

import { Navigate } from "react-router-dom";

class CheckLoggedIn extends React.Component {
	static contextType = ApiContext;

	render() {
		if (requireLogin && !this.context.API.isTokenPresent()) return <Navigate to="/logbackin" />;

		switch (this.props.link) {
			case "/test":
				return <p>Test</p>;
			case "/clusters":
				return <ClustersList />;
			default:
				return <p>Default</p>;
		}
	}
}

export default CheckLoggedIn;
