/*

description:
	This component should be rendered when the user opens the home ("/") page.
	This can be done manually, or happens after login: in this case there is a "?id_token_[...]"
	parameter in the URL (among with others).
	If there are the parameters, the component stores them and redirects the user to the
	main page.
	If the user is already logged in, the component operates the same redirect
	If the user is not logged in, the component redirects the user to the login page
	
state:
	- redirect: whether everything is setup for the redirect to happen, or if there is still
		somehing to be waited for
	
hooks:
	- useSearchParams
	- useEffect: on mount, sets the authorization token if needed
		In developement, also replaces the '#' of the return link with the more correct '?'

context:
	- ApiContext
	
imported into:
	- PageRouter
	
component dependences:
	
other dependences:
	- react-router-dom components

*/

import { useContext, useEffect, useState } from "react";

import { Navigate, useSearchParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";

export interface RedirectFromHomeProps {
	
}

const RedirectFromHome = ({}:RedirectFromHomeProps) => {
	const [params] = useSearchParams();

	const API = useContext(ApiContext);

	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		if (window.location.toString().includes("localhost:3000/#"))
			window.location.href = window.location.toString().replace("localhost:3000/#", "localhost:3000/?"); // Because on localhost that '?' gets replaced by a '#'

		if (params.get("id_token") && params.get("expires_in") && !API.isTokenSameAs(params.get("id_token"))) {
			API.setToken(params.get("id_token"), params.get("expires_in"));
			setRedirect(true);
		} else if (!redirect) setRedirect(true);
	}, []);

	if (!redirect) return <></>;

	if (API.isTokenPresent()) return <Navigate to="/clusters" />;
	return <Navigate to="/login" />;
}

export default RedirectFromHome;
