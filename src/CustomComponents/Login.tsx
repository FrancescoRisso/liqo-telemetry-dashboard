/*

description:
	A button to log in inside the website
	
state:
	
hooks:
	
context:
	
imported into:
	- PageRouter
	
component dependences:
	
other dependences:
	- padlock image
	
*/

import padlock from "../images/padlock.svg";

export interface LoginProps {
	text: string;	// the text to be displayed above the login button
}

export const Login = ({ text }: LoginProps) => {
	return (
		<div className="center">
			<p className="bigger-text text-center">{text}</p>
			<a
				role="button"
				className="center-horizontally btn btn-dark bigger-text p-3"
				href="https://liqo.auth.eu-west-1.amazoncognito.com/login?client_id=7u72s21d0m6eqaoufg4ti72249&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000"
			>
				<p className="my-0 mx-3">
					<span className="center-vertically" style={{ height: "30px" }}>
						<img src={padlock} style={{ filter: "invert(1)" }} height="30px" alt="" />
					</span>{" "}
					Login
				</p>
			</a>
		</div>
	);
};
