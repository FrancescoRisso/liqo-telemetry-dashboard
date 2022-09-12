/*

description:
	The side menu of the website, that allows you to navigate inside the website
	
state:
	
props:
	
functions:
	
imported into:
	- App
	
dependences:
	- React-bootstrap components
	- react-router-dom components
	
*/

import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class SideMenu extends React.Component {
	render() {
		return (
			<Nav
				bg="dark"
				variant="dark"
				className="flex-column bg-dark sidebar page-height col-md-2 col-sm-12 d-md-block d-sm-block px-3"
			>
				<Nav.Item>
					<Link className="nav-link" to="/clusters">
						Cluster details
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/">
						Statistics
					</Link>
				</Nav.Item>
			</Nav>
		);
	}
}

export default SideMenu;
