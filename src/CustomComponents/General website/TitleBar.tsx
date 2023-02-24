/*

description:
	Renders a bar on the top of the page, displaying the title of the webpage
	
state:
	
hooks:
	
context:
	
imported into:
	- App
	
component dependences:
	
other dependences:
	- React-bootstrap components
	- requireLogin
	
*/

import { Container, Nav, Navbar } from "react-bootstrap";
import { requireLogin } from "../../env";
import { Link, redirect } from "react-router-dom";

const TitleBar = () => {
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
					/>{" "}
					Usage telemetry dashboard {requireLogin ? "" : "- WARNING: using old data"}
				</Navbar.Brand>
				<Nav>
					<Nav.Link
						href="/clusters"
						onClick={(event) => {
							event.preventDefault();
							document.getElementById("clustersLink")?.click();
						}}
					>
						Clusters list
					</Nav.Link>
					<Link to="/clusters" id="clustersLink" className="d-none" />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default TitleBar;
