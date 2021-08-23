import React from 'react';
import Title from '../../../../components/Title';
import { Box, Container, Stack } from '@chakra-ui/react';
import ListTestimonialsPublic from '../../components/public/TestimonialsList';

const Index = () => {
  const image = 'https://i1.wp.com/serranojaimeconsultores.com/wp-content/uploads/2018/03/ong-2.jpg?fit=1024%2C682&ssl=1';
  return (
    <Container maxW="6xl">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 8 }}>
        <Title title="Testimonios" image={image} />
        <ListTestimonialsPublic />
      </Stack>
    </Container>
  );
};

export default Index;
