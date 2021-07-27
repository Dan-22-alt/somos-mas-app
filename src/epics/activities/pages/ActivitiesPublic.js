import React from 'react';
import Title from '../../../components/Title';
import { Box, Container, Stack } from '@chakra-ui/react';
import ActivitySearchBar from '../components/ActivitySearchBar';

const ActivitiesPublic = () => {
  const image = 'https://www.esan.edu.pe/apuntes-empresariales/2016/06/14/ongempresas_principal.jpg';

  return (
    <Container>
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 8 }}>
        <Title title="Actividades" image={image} />
      </Stack>
      <ActivitySearchBar />
    </Container>
  );
};

export default ActivitiesPublic;
