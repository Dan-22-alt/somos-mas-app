import React from "react";
import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";
import LogOutButt from "../../logout/LogOutButt"

export const HomePage = () => {
	const admin = true;
	return(
    <>
      {admin && <HomeEditForm />}
      <LogOutButt />
      <MainSlide />
      <Welcome text='Texto de Bienvenida' />
      <Section title='Últimas Novedades'/>
      <Section title='Testimonios'/>
    </>
  )
}
