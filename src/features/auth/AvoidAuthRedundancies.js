import React from "react";
import userIsLogged from "./userIsLogged";
import { Redirect } from "react-router";

const AvoidAuthRedundancies = ({ children }) => {
	return <>{userIsLogged() ? <Redirect to="/" /> : children}</>;
};

export default AvoidAuthRedundancies;
