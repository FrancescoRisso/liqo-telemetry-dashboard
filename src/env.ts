type envVarNames = "REACT_APP_GMAPS_API_KEY" | "REACT_APP_AWS_LOGIN" | "NODE_ENV";

type envVarObj = { [key in envVarNames]?: string };

const getEnvVar = (envVarName: envVarNames) => {
	const envVar = process.env[envVarName] ?? (window as envVarObj)[envVarName];
	if (envVar === undefined) {
		throw new Error(`ERROR: ENV VAR ${envVarName} NOT DEFINED`);
	}
	return envVar;
};

export const REACT_APP_GMAPS_API_KEY = getEnvVar("REACT_APP_GMAPS_API_KEY");
export const REACT_APP_AWS_LOGIN = getEnvVar("REACT_APP_AWS_LOGIN");

export const requireLogin = getEnvVar("NODE_ENV") === "production" || false;
export const renderMap = getEnvVar("NODE_ENV") === "production" || false;
