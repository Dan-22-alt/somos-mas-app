import React from 'react'

import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";

import LogOutButt from "../../logout/LogOutButt"

import { UseRequest }from "../useRequest"

export const HomePage = () => {
  const {news, testimonials} = UseRequest()
	const admin = true;

	return(
    <>
      {admin && <HomeEditForm />}
      <LogOutButt />
      <MainSlide />
      <Welcome text='Texto de Bienvenida' />
      <Section title='Últimas Novedades' state={news}/>
      <Section title='Testimonios' state={testimonials}/>
    </>
  )
}
