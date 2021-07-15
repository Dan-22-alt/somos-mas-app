import React from "react";
import LogOutButt from "../../logout/LogOutButt";
import { HomeEditForm } from "../components/HomeEditForm";

export const HomePage = () => {
	const admin = true;
	return <>{admin && <HomeEditForm />} <LogOutButt /></>;
};
