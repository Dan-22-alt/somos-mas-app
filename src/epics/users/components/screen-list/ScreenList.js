import { Box, Button, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard';
import data from './screenListMockData';

const ScreenList = () => {
  return (
    <Container maxWidth="1024px" my={10}>
      <Box mb={8}>
        <Link to="/backoffice/users/create" mb={5}>
          <Button colorScheme="teal">Crear usuario</Button>
        </Link>
      </Box>
      <SimpleGrid columns={{ lg: 4, md: 3, sm: 2, base: 1 }} spacing={6}>
        {data.map((user) => (
          <UserCard {...user} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ScreenList;
