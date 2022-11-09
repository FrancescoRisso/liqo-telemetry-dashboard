/*

description:
	Provides the routing system for the different pages of the website
	
state:
	
props:
	
hooks:
	
context:
	
imported into:
	- App
	
component dependences:
	- Login
	- RedirectFromHome
	- CheckLoggedIn
	
other dependences:
	- react-router-dom components
	
*/

import React from "react";

import Login from "../Login";
import CheckLoggedIn from "./CheckLoggedIn";
import RedirectFromHome from "./RedirectFromHome";

import { Routes as Switch, Route } from "react-router-dom";

const PageRouter = () => {
	return (
		<div className="page-height m-0">
			<Switch>
				<Route path="/login" element={<Login text="Please log in to view the dashboard" />} />
				<Route path="/logbackin" element={<Login text="Your session expired. Please log back in" />} />
				<Route path="/clusters" element={<CheckLoggedIn link="/clusters" />} />
				<Route path="/cluster/:clusterID" element={<CheckLoggedIn link="/cluster" />} />
				<Route path="*" element={<RedirectFromHome />} />
			</Switch>
		</div>
	);
};

export default PageRouter;
