import React from 'react';
// import { useSelector } from 'react-redux';
import { MainSlide } from '../components/HomeTemplates/MainSlide';
import { Section } from '../components/HomeTemplates/Section';
import { Welcome } from '../components/Welcome';
import { UseRequest } from '../useRequest';

export const HomePage = () => {
  const { news, testimonials } = UseRequest();

  // const state = useSelector((state) => state);

  return (
    <>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <MainSlide />
      <Welcome />
      <Section title="Últimas Novedades" state={news} />
      <Section title="Testimonios" state={testimonials} />
    </>
  );
};
