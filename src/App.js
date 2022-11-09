/*

description:
	The main website component
	
state:
	- APIToken: the token received from cognito
	- APIExpiryTimeout: a timeout that expires when the token becomes invalid
	- APIclusterSummary[]: a list containing the summary data of the clusters
	
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
	- TitleBar
	- SideMenu
	- PageRouter
	- ApiContext
	- React-bootstrap components
	- css files
	
*/


import React from "react";

import TitleBar from "./CustomComponents/TitleBar";
import SideMenu from "./CustomComponents/SideMenu";
import PageRouter from "./CustomComponents/Routing/PageRouter";

import ApiContext from "./CustomComponents/ApiContext";

import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { getFullTable, login } from "./api";

class App extends React.Component {
	static contextType = ApiContext;

	constructor(props) {
		super(props);
		this.state = {
			APIToken: null,
			APIExpiryTimeout: null,
			APIclusterSummary: []
		};
	}

	setToken = (val, expiryTime) => {
		// Remove existing reset timeouts
		if (this.state.APIExpiryTimeout) clearTimeout(this.state.APIExpiryTimeout);

		// Add timeout to remove token when it expires
		let expiryTimeout = setTimeout(() => {
			this.setState({ APIToken: null, APIExpiryTimeout: null });
		}, expiryTime * 1000);

		// Store the token and the timeout
		login(val);
		this.setState({ APIToken: val, APIExpiryTimeout: expiryTimeout });
	};

	isTokenPresent = () => {
		return this.state.APIToken !== null;
	};

	isTokenSameAs = (reference) => {
		return this.state.APIToken === reference;
	};

	loadClusterSummary = (force) => {
		if (force || this.state.APIclusterSummary === "Error" || this.state.APIclusterSummary.length === 0)
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
								this.setState({ APIclusterSummary: data });
							} catch {
								console.log("Some records in the 'last' table were not present in the 'first' table");
								this.setState({ APIclusterSummary: "Error" });
							}
						})
						.catch((err) => {
							console.log(err);
							this.setState({ APIclusterSummary: "Error" });
						});
				})
				.catch((err) => {
					console.log(err);
					this.setState({ APIclusterSummary: "Error" });
				});
	};

	// componentDidUpdate(); // if token -> null, redirect to logbackin

	render() {
		return (
			<ApiContext.Provider
				value={{
					API: {
						setToken: this.setToken,
						isTokenPresent: this.isTokenPresent,
						isTokenSameAs: this.isTokenSameAs,
						dataLoaders: {
							clusterSummary: this.loadClusterSummary
						},
						data: {
							clusterSummary: this.state.APIclusterSummary
						},
						dataSorters: {
							clusterSummary: this.sortClusterSummary
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
	}
}

export default App;
