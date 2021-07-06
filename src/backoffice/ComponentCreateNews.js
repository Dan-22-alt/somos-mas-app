import React from "react";
import AuthChecker from "../features/auth/AuthChecker";
const ComponentCreateNews = () => {
	return (
		<AuthChecker>
			<div>
				<h1>Formulario de creacion</h1>
			</div>
		</AuthChecker>
	);
};

export default ComponentCreateNews;
