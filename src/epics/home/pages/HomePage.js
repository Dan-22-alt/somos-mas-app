import { Container } from '@chakra-ui/react';
import React from 'react';
import { MainSlide } from '../components/HomeTemplates/MainSlide';
import { ListNews } from '../components/newsListComponents/ListNews';
import TestimoniesCardsList from '../components/testimonies-section/TestimoniesCardsList';
import { Welcome } from '../components/Welcome';
import { UseRequest } from '../useRequest';

export const HomePage = () => {
  const { news, testimonials } = UseRequest();

  return (
    <>
      <MainSlide />
      <Welcome />
      <Container maxW="container.xl">
        <ListNews title="Últimas Novedades" state={news} />
        <TestimoniesCardsList title="Últimos testimonios" state={testimonials} />
      </Container>
    </>
  );
};
