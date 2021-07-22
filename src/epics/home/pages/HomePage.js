import React from "react";
import { useSelector } from 'react-redux'
import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";
import LogOutButt from "../../logout/LogOutButt";

export const HomePage = () => {
  const homeData = useSelector(state => state.organization.data)

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
