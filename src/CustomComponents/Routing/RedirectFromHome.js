/*
	Wrapper function for RedirectFromHomeClass
	Needed to supply it with the searchParams
*/

import React from "react";
import { useSearchParams } from "react-router-dom";

import RedirectFromHomeClass from "./RedirectFromHomeClass";

const RedirectFromHome = () => {
	let [searchParams] = useSearchParams();
	return <RedirectFromHomeClass searchParams={searchParams} />;
};

export default RedirectFromHome;
