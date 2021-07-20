import React, { useEffect, useState } from "react";
import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";
import LogOutButt from "../../logout/LogOutButt";
import { fetchOrganizationData } from "../../../services/homeService";

export const HomePage = () => {
	const [homeData, setHomeData] = useState(null);

	useEffect(() => {
		fetchOrganizationData().then(data => setHomeData(data));
	}, []);

	const admin = true;
	return (
		<>
			{admin && <HomeEditForm />}
			<LogOutButt />
			<MainSlide />
			<Welcome text={homeData?.welcome_text} />
			<Section title="Últimas Novedades" />
			<Section title="Testimonios" />
		</>
	);
};
