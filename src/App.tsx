/*

description:
	The main website component
	
state:
	- APIToken: the token received from cognito
	- APIExpiryTimeout: a timeout that expires when the token becomes invalid
	- APIclusterSummary[]: a list containing the summary data of the clusters
	
hooks:
	
context:
	- ApiContext
	
imported into:
	
component dependences:
	- TitleBar
	- SideMenu
	- PageRouter
	- ApiContext
	
other dependences:
	- React-bootstrap components
	- React-router-dom components
	- css files
	
*/

import TitleBar from "./CustomComponents/General website/TitleBar";
import SideMenu from "./CustomComponents/General website/SideMenu";
import PageRouter from "./CustomComponents/Routing/PageRouter";
import { ApiContextProvider } from "./CustomComponents/ApiContext";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	return (
		<ApiContextProvider>
			<Router>
				<TitleBar />
				<Container fluid>
					<Row>
						{/* <Col md="2" className="p-0">
							<SideMenu />
						</Col>
						<Col md="10">
							<PageRouter />
						</Col> */}
						<Col md="12">
							<PageRouter />
						</Col>
					</Row>
				</Container>
			</Router>
		</ApiContextProvider>
	);
};

export default App;
