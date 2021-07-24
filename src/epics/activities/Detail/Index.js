import React from 'react'
import { Box, Container,Stack } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import Title from '../../../components/Title';

const Index = () => {
  const { id } = useParams();
  console.log(id);
  const imagen =
    'https://media.istockphoto.com/photos/little-girl-molding-colorful-clay-cloud-with-rain-watching-online-picture-id1219030024?s=612x612';
  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 25 }}>
        {/* CAMBIAR TITULO LUEGO POR ALGO MAS ACORDE--------------------------------------------- */}
        <Title title={`Detalle de la Actividad ID: ${id}`} image={imagen}></Title>
      </Stack>
    </Container>
  );
};

export default Index;
