import React from 'react';
import { Box, Container, Stack, Heading, Text } from '@chakra-ui/react';
import Title from '../../../components/Title';

const Gracias = () => {
  const imagen = 'https://static4.abc.es/media/bienestar/2019/11/28/dar-gracias-6-k2EB--1024x512@abc.jpg';

  return (
    <Container maxW="3xl">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Title title="Gracias" image={imagen} />
        <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          a su Contribución{' '}
          <Text as={'span'} color={' #9AC9FB'}>
            Seguiremos mejorando
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
};

export default Gracias;
