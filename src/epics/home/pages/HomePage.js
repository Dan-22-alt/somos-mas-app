import React from "react";
import { HomeEditForm } from "../../../components/HomeEditForm";

export const HomePage = () => {
	const admin = true;
	return <>{admin && <HomeEditForm />}</>;
};
