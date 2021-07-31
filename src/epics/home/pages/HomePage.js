import { Container } from '@chakra-ui/react';
import React from 'react';
import { MainSlide } from '../components/HomeTemplates/MainSlide';
import { ListNews } from '../components/newsListComponents/ListNews';
import TestimoniesCardsList from '../components/testimonies-section/TestimoniesCardsList';
import { Welcome } from '../components/Welcome';

export const HomePage = () => {
  return (
    <>
      <MainSlide />
      <Welcome />
      <Container maxW="container.xl">
        <ListNews title="Últimas Novedades" />
        <TestimoniesCardsList title="Últimos Testimonios"  />
      </Container>
    </>
  );
};
