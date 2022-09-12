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
		some time to wait
	
props:
	- searchParams: the '?' params from the url, as useSearchParams() (react-router-dom) returns
	
functions:
	- componentDidMount(): operates the logic to check if the login is ok
	
imported into:
	- RedirectFromHome (PageRouter)
	
dependences:
	- ApiContext
	- react-router-dom components
	
*/

import React from "react";

import ApiContext from "../ApiContext";

import { Navigate } from "react-router-dom";

class RedirectFromHomeClass extends React.Component {
	static contextType = ApiContext;

	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}

	componentDidMount = () => {
		if (window.location.toString().includes("localhost:3000/#"))
			window.location = window.location.toString().replace("localhost:3000/#", "localhost:3000/?"); // Because on localhost that '?' gets replaced by a '#'

		if (
			this.props.searchParams.get("id_token") &&
			this.props.searchParams.get("expires_in") &&
			!this.context.API.isTokenSameAs(this.props.searchParams.get("id_token"))
		) {
			this.setState({ redirect: false }, () => {
				this.context.API.setToken(
					this.props.searchParams.get("id_token"),
					this.props.searchParams.get("expires_in")
				);
				console.log("Wait");
				this.setState({ redirect: true });
			});
		} else this.setState({ redirect: true });
	};

	render() {
		const doRedirect = true;
		if (!this.state.redirect) return <></>;
		if (this.context.API.isTokenPresent())
			return doRedirect ? <Navigate to="/clusters" /> : <p>{console.log("WIP")}WIP</p>;
		return doRedirect ? <Navigate to="/login" /> : <p>{console.log("Login")}Login</p>;
	}
}

export default RedirectFromHomeClass;
