import React from "react";
import { HomeEditForm } from "../components/HomeEditForm";
import LogOutButt from "../../logout/LogOutButt"

export const HomePage = () => {
	const admin = true;
	return <>{admin && <HomeEditForm />}<LogOutButt /></>;
};
