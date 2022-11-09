/*

description:
	The main website component
	
state:
	- APIToken: the token received from cognito
	- APIExpiryTimeout: a timeout that expires when the token becomes invalid
	- APIclusterSummary[]: a list containing the summary data of the clusters
	
props:
	
hooks:
	
context:
	- ApiContext (provider)
	
imported into:
	
component dependences:
	- TitleBar
	- SideMenu
	- PageRouter
	
	other dependences:
	- React-bootstrap components
	- React-router-dom components
	- apis
	- css files
	
*/

import React, { useState } from "react";

import TitleBar from "./CustomComponents/TitleBar";
import SideMenu from "./CustomComponents/SideMenu";
import PageRouter from "./CustomComponents/Routing/PageRouter";

import ApiContext from "./CustomComponents/ApiContext";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { getFullTable, login } from "./api";

const App = () => {
	const [APIToken, setAPIToken] = useState(null);
	const [APIExpiryTimeout, setAPIExpiryTimeout] = useState(null);
	const [APIclusterSummary, setAPIclusterSummary] = useState([]);

	const setToken = (val, expiryTime) => {
		// Remove existing reset timeouts
		if (APIExpiryTimeout) clearTimeout(APIExpiryTimeout);

		// Add timeout to remove token when it expires
		let expiryTimeout = setTimeout(() => {
			setAPIToken(null);
			setAPIExpiryTimeout(null);
		}, expiryTime * 1000);

		// Store the token and the timeout
		login(val);
		setAPIToken(val);
		setAPIExpiryTimeout(expiryTimeout);
	};

	const isTokenPresent = () => {
		return APIToken !== null;
	};

	const isTokenSameAs = (reference) => {
		return APIToken === reference;
	};

	const loadClusterSummary = (force) => {
		if (force || APIclusterSummary === "Error" || APIclusterSummary.length === 0)
			getFullTable("liqo-user-telemetry-last-record")
				.then((data) => {
					getFullTable("liqo-user-telemetry-first-record")
						.then((firstData) => {
							try {
								data = data.map((entry) => {
									entry.computedFirstSeen = firstData.filter(
										(e) => e.clusterID === entry.clusterID
									)[0].timestamp;
									entry.computedUptime = entry.timestamp - entry.computedFirstSeen;
									return entry;
								});
								setAPIclusterSummary(data);
							} catch {
								console.log("Some records in the 'last' table were not present in the 'first' table");
								setAPIclusterSummary("Error");
							}
						})
						.catch((err) => {
							console.log(err);
							setAPIclusterSummary("Error");
						});
				})
				.catch((err) => {
					console.log(err);
					setAPIclusterSummary("Error");
				});
	};

	return (
		<ApiContext.Provider
			value={{
				API: {
					setToken: setToken,
					isTokenPresent: isTokenPresent,
					isTokenSameAs: isTokenSameAs,
					dataLoaders: {
						clusterSummary: loadClusterSummary
					},
					data: {
						clusterSummary: APIclusterSummary
					}
				}
			}}
		>
			<Router>
				<TitleBar />
				<Container fluid>
					<Row>
						<Col md="2" className="p-0">
							<SideMenu />
						</Col>
						<Col md="10">
							<PageRouter />
						</Col>
					</Row>
				</Container>
			</Router>
		</ApiContext.Provider>
	);
};

export default App;

/*

description:
	
state:
	
props:
	
functions:
	- setToken(val, expiryTime): sets val as the current APIToken, and starts an expiryTime-long
		APIExpiryTimeout to reset the token when it expires
	- isTokenPresent(): return whether there is a token currently active
	- isTokenSameAs(reference): tells whether the token is equal to a reference one
	- loadClusterSummary(force): loads the cluster summary from the api, if not present yet.
		The force parameter forces the loading to reload the data even if it is present.
	
imported into:
	
dependences:
	
*/

// class AppOld extends React.Component {
// 	static contextType = ApiContext;

// 	// componentDidUpdate(); // if token -> null, redirect to logbackin

// 	render() {}
// }
