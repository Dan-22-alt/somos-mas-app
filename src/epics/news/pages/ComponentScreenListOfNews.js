import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@chakra-ui/react';
import { ListOfNews } from '../components/ListOfNews';

const ComponentScreenListOfNews = () => {
  return (
    <Container marginTop={12}>
      <Box mb={10}>
        <Link to="/backoffice/news/create">
          <Button bg="primary.400" _hover={{ bg: 'primary.300' }} color="white">
            Crear Novedad
          </Button>
        </Link>
      </Box>
      <ListOfNews />
    </Container>
  );
};

export default ComponentScreenListOfNews;
