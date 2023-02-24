/*

description:
	The side menu of the website, that allows you to navigate inside the website
	
state:
	
hooks:
	
context:
	
imported into:
	- App
	
component dependences:
	
other dependences:
	- React-bootstrap components
	- React-router-dom components
	
*/

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideMenu = () => {
	return (
		<Nav
			variant="dark"
			className="flex-column bg-dark sidebar page-height col-md-2 col-sm-12 d-md-block d-sm-block px-3"
		>
			<Nav.Item>
				<Link className="nav-link" to="/clusters">
					Cluster details
				</Link>
			</Nav.Item>
			{/* <Nav.Item>
				<Link className="nav-link" to="/">
					Statistics
				</Link>
			</Nav.Item> */}
		</Nav>
	);
};

export default SideMenu;
