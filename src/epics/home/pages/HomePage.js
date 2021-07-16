import React, {useEffect} from "react";
import { HomeEditForm } from "../components/HomeEditForm";
import { Welcome } from "../components/Welcome";
import { MainSlide } from "../components/HomeTemplates/MainSlide";
import { Section } from "../components/HomeTemplates/Section";


export const HomePage = () => {
	const admin = true;

  useEffect(()=> {

  }, [])

	return(
    <>
      {admin && <HomeEditForm />}
      <MainSlide />
      <Welcome text='Texto de Bienvenida' />
      <Section title='Últimas Novedades'/>
      <Section title='Testimonios'/>
    </>
  )
}
