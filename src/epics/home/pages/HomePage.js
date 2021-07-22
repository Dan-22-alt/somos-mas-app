import React, { useEffect, useState } from "react";

import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";

import LogOutButt from "../../logout/LogOutButt";

import { fetchOrganizationData } from "../../../services/homeService";

import { UseRequest }from "../useRequest"
import { ListNews } from "../components/newsListComponents/ListNews";

export const HomePage = () => {

  const {news, testimonials} = UseRequest()
	const [homeData, setHomeData] = useState(null);
	const admin = true;

	useEffect(() => {
		fetchOrganizationData().then(data => setHomeData(data));
	}, []);

	return(
    <>
      {admin && <HomeEditForm />}
      <LogOutButt />
      <MainSlide />
			<Welcome text={homeData?.welcome_text} />
      <ListNews title='Últimas Novedades' state={news}/>
      <Section title='Testimonios' state={testimonials}/>
    </>
  )
}

