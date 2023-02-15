/*

description:
	A context provider for all the API stuff
	
state:
	- APIToken: the token received from cognito
	- APIExpiryTimeout: a timeout that expires when the token becomes invalid
	- APIclusterSummary: the summary data of the clusters
	- APIclusterData: all the data data of the specific clusters
	
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

import { getClusterData, getFullTable, login } from "../api";
import { ApiContextStructure, ClusterGenericInfo, DatabaseRow, IP, ClusterDataType, Telemetry } from "../types";
import { countPeers } from "../utils";

export const ApiContext = React.createContext({} as ApiContextStructure);

export interface ApiContextProviderProps {
	children: JSX.Element | JSX.Element[] | string | string[];
}

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
	const [APIToken, setAPIToken] = useState<string | null>(null);
	const [APIExpiryTimeout, setAPIExpiryTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
	const [APIclusterSummary, setAPIclusterSummary] = useState<"Error" | Record<string, ClusterGenericInfo>>({});
	const [APIclusterData, setAPIclusterData] = useState<Record<string, "Error" | ClusterDataType[]>>({});

	// sets val as the current APIToken, and starts an expiryTime-long
	// APIExpiryTimeout to reset the token when it expires
	const setToken = (val: string, expiryTime: number) => {
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
	const isTokenSameAs = (reference: string) => {
		return APIToken === reference;
	};

	// loads the cluster summary from the api, if not present yet.
	// The force parameter forces the loading to reload the data even if it is present.
	const loadClusterSummary = async (force: boolean) => {
		if (force || APIclusterSummary === "Error" || JSON.stringify(APIclusterSummary) === "{}")
			try {
				const lastData = await getFullTable("liqo-user-telemetry-last-record");
				const firstData = await getFullTable("liqo-user-telemetry-first-record");

				if (lastData !== undefined && firstData !== undefined) {
					try {
						const data = lastData.map((entry: DatabaseRow) => {
							const ip: IP | undefined = entry.ip;
							const computedFirstSeen: number = firstData.filter(
								(record) => record.clusterID === entry.clusterID
							)[0].timestamp;
							const lastSeen: number = entry.timestamp;
							const provider: string = entry.telemetry.provider || "N.A.";
							const inPeers: number = countPeers("incoming", entry.telemetry);
							const outPeers: number = countPeers("outgoing", entry.telemetry);
							const final: ClusterGenericInfo = {
								ip,
								computedFirstSeen,
								lastSeen,
								provider,
								inPeers,
								outPeers
							};
							return [entry.clusterID, final];
						});
						setAPIclusterSummary(Object.fromEntries(data));
					} catch {
						console.log("Some records in the 'last' table were not present in the 'first' table");
						setAPIclusterSummary("Error");
					}
				}
			} catch (err) {
				console.log(err);
				setAPIclusterSummary("Error");
			}
	};

	const loadClusterData = async (clusterID: string) => {
		if (APIclusterData[clusterID] === "Error" || APIclusterData[clusterID] === undefined) {
			try {
				const apiData = (await getClusterData(clusterID)) as DatabaseRow[];
				const thisClusterData = apiData.map((record: DatabaseRow) => {
					const ip: IP | undefined = record.ip;
					const telemetry: Telemetry = record.telemetry;
					const timestamp: number = record.timestamp;
					const inPeers: number = countPeers("incoming", record.telemetry);
					const outPeers: number = countPeers("outgoing", record.telemetry);
					const finalValue: ClusterDataType = { ip, telemetry, timestamp, inPeers, outPeers };
					return finalValue;
				});
				setAPIclusterData({ ...APIclusterData, ...{ [clusterID]: thisClusterData } });
			} catch (err) {
				console.log(`Could not load data for clusterID = ${clusterID}`);
				console.log(err);
			}
		}
	};

	return (
		<ApiContext.Provider
			value={{
				setToken: setToken,
				isTokenPresent: isTokenPresent,
				isTokenSameAs: isTokenSameAs,
				dataLoaders: {
					clusterSummary: loadClusterSummary,
					clusterData: loadClusterData
				},
				data: {
					clusterSummary: APIclusterSummary,
					clusterData: APIclusterData
				}
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};
