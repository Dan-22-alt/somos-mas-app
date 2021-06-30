import React from "react";
import FormLogin from "../features/auth/formLogin";
import AvoidAuthRedundancies from "../features/auth/AvoidAuthRedundancies";
const Login = () => {
	return (
		<AvoidAuthRedundancies>
			<FormLogin />
		</AvoidAuthRedundancies>
	);
};

export default Login;
