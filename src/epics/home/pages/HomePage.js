import React from "react";
import { useSelector } from "react-redux";

import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";
import { UseRequest } from "./useRequest";

import LogOutButt from "../../logout/LogOutButt";

import { ListNews } from "../components/newsListComponents/ListNews";
import TestimoniesCardsList from "../components/testimonies-section/TestimoniesCardsList";
import { Container } from "@chakra-ui/react";

export const HomePage = () => {
	const homeData = useSelector(state => state.organization.data);
	const { news, testimonials } = UseRequest();
	const admin = true;

	return (
		<>
			{admin && <HomeEditForm />}
			<LogOutButt />
			<MainSlide />
			<Welcome text={homeData?.welcome_text} />
			<Container maxW="container.xl">
				<ListNews title="Últimas Novedades" state={news} />
				<TestimoniesCardsList
					title="Últimos testimonios"
					state={testimonials}
				/>
				<Section title="Testimonios" state={testimonials} />
			</Container>
		</>
	);
};
