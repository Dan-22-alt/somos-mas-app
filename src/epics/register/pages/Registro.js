import React from "react";
import FormRegistro from "../components/formRegister";
import AvoidAuthRedundancies from "../../../features/auth/AvoidAuthRedundancies";

const Registro = () => {
	return (
		<AvoidAuthRedundancies>
			<FormRegistro />
		</AvoidAuthRedundancies>
	);
};

export default Registro;
