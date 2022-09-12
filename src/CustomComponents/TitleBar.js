/*

description:
	Renders a bar on the top of the page, displaying the title of the webpage
	
state:
	
props:
	
functions:
	
imported into:
	- App
	
dependences:
	- React-bootstrap components
	
*/

import React from "react";

import { Container, Navbar } from "react-bootstrap";

class TitleBar extends React.Component {	
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="https://liqo.io/">
						<img
							alt=""
							src="https://liqo.io/imgs/logo-liqo-blue.svg"
							width="110"
							height="30"
							className="d-inline-block align-top"
						/>
						{" "}Usage telemetry dashboard
					</Navbar.Brand>
				</Container>
			</Navbar>
		);
	}
}

export default TitleBar;
