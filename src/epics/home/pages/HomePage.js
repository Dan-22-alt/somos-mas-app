import { Container } from '@chakra-ui/react';
import React from 'react';
import { MainSlide } from '../components/HomeTemplates/MainSlide';
import { ListNews } from '../components/newsListComponents/ListNews';
import TestimoniesCardsList from '../components/testimonies-section/TestimoniesCardsList';
import { Welcome } from '../components/Welcome';
import { UseRequest } from '../useRequest';

export const HomePage = () => {
  const testimonials = UseRequest();
  return (
    <>
      <MainSlide />
      <Welcome />
      <Container maxW="container.xl">
        <ListNews title="Últimas Novedades" />
        <TestimoniesCardsList title="Últimos Testimonios" state={testimonials} />
      </Container>
    </>
  );
};
