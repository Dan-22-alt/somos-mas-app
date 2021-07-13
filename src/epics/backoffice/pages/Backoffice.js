import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dasboard from "../components/Dasboard";
import AuthChecker from "../../../features/auth/AuthChecker";

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
