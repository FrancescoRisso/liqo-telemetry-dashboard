/*

description:
	A context provider for all the API stuff
	
state:
	- APIToken: the token received from cognito
	- APIExpiryTimeout: a timeout that expires when the token becomes invalid
	- APIclusterSummary[]: a list containing the summary data of the clusters
	
props:
	- children: the child that will be able to use this context
	
hooks:
	
context:
	- ApiContext (provider)
	
imported into:
	- App (provider)
	- ClustersList (consumer)
	- CheckLoggedIn (consumer)
	- RedirectFromHome (consumer)
	
component dependences:
	
other dependences:
	- apis
	
*/

import React, { useState } from "react";

import { getFullTable, login } from "../api";

export const ApiContext = React.createContext();

export const ApiContextProvider = ({ children }) => {
	const [APIToken, setAPIToken] = useState(null);
	const [APIExpiryTimeout, setAPIExpiryTimeout] = useState(null);
	const [APIclusterSummary, setAPIclusterSummary] = useState([]);

	// sets val as the current APIToken, and starts an expiryTime-long
	// APIExpiryTimeout to reset the token when it expires
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

	// return whether there is a token currently active
	const isTokenPresent = () => {
		return APIToken !== null;
	};

	// tells whether the token is equal to a reference one
	const isTokenSameAs = (reference) => {
		return APIToken === reference;
	};

	// loads the cluster summary from the api, if not present yet.
	// The force parameter forces the loading to reload the data even if it is present.
	const loadClusterSummary = async (force) => {
		if (force || APIclusterSummary === "Error" || APIclusterSummary.length === 0)
			try {
				let data = await getFullTable("liqo-user-telemetry-last-record");
				const firstData = await getFullTable("liqo-user-telemetry-first-record");

				try {
					data = data.map((entry) => {
						entry.computedFirstSeen = firstData.filter((e) => e.clusterID === entry.clusterID)[0].timestamp;
						entry.computedUptime = entry.timestamp - entry.computedFirstSeen;
						return entry;
					});
					setAPIclusterSummary(data);
				} catch {
					console.log("Some records in the 'last' table were not present in the 'first' table");
					setAPIclusterSummary("Error");
				}
			} catch (err) {
				console.log(err);
				setAPIclusterSummary("Error");
			}
	};

	return (
		<ApiContext.Provider
			value={{
				setToken: setToken,
				isTokenPresent: isTokenPresent,
				isTokenSameAs: isTokenSameAs,
				dataLoaders: {
					clusterSummary: loadClusterSummary
				},
				data: {
					clusterSummary: APIclusterSummary
				}
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};
