/*

description:
	Provides the routing system for the different pages of the website
	
state:
	
props:
	
functions:
	
imported into:
	- App
	
dependences:
	- Login
	- RedirectFromHome (RedirectFromHomeClass)
	- CheckLoggedIn
	- react-router-dom components
	
*/

import React from "react";

import Login from "../Login";
import CheckLoggedIn from "./CheckLoggedIn";
import RedirectFromHome from "./RedirectFromHome";

import { Routes as Switch, Route } from "react-router-dom";

class PageRouter extends React.Component {
	render() {
		return (
			<div className="page-height m-0">
				<Switch>
					<Route path="/login" element={<Login text="Please log in to view the dashboard" />} />
					<Route path="/logbackin" element={<Login text="Your session expired. Please log back in" />} />
					<Route path="/clusters" element={<CheckLoggedIn link="/clusters" />} />
					<Route path="*" element={<RedirectFromHome />} />
				</Switch>
			</div>
		);
	}
}

export default PageRouter;
