import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthChecker from '../../../features/auth/AuthChecker';
import { ListOfActivities } from '../components/ListOfActivities';

const LinkNew = () => (
  <Box mb={0}>
    <Link to="/backoffice/news/create">
      <Button ml={6} bg="primary.400" _hover={{ bg: 'primary.300' }} color="white">
        Crear Actividad
      </Button>
    </Link>
  </Box>

);

export const ActivitiesPage = () => {
  return (
    <>
      <AuthChecker>
        <Container marginTop={5} >
        <LinkNew />
        <ListOfActivities />
        </Container>
      </AuthChecker>
    </>
  );
};
