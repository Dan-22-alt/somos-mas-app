import React from "react";
import userIsLogged from "./userIsLogged";
import { Redirect } from "react-router";

const AuthChecker = ({ children, ...rest }) => {
	return <>{userIsLogged() ? children : <Redirect to="/login" />}</>;
};

export default AuthChecker;
