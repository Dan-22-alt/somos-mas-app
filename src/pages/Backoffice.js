import React from "react";
import Header from "../backoffice/Header";
import Sidebar from "../backoffice/Sidebar";
import Dasboard from "../backoffice/Dasboard";
import AuthChecker from "../features/auth/AuthChecker";

const BackofficePage = () => {
	return (
		<AuthChecker>
			<div>
				<div>
					<Header />
				</div>
				<Sidebar />
				<Dasboard />
			</div>
		</AuthChecker>
	);
};

export default BackofficePage;
