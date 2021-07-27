import React from 'react';
import { Box, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { Spinner } from '../../../../layout/Spinners';
import { Card } from './Card';
import { Link } from 'react-router-dom';

export const ListNews = ({ title, state }) => {
  return (
    <Box mb={['5rem', '10.625rem']}>
      <Text as="h2" fontSize="4xl" textAlign="center" fontWeight="bold" color="primary.400" mb={12}>
        {title}
      </Text>
      {state.loading ? (
        <Spinner minH="10rem" />
      ) : (
        <SimpleGrid mb={10} spacing={10} columns={[1, 2, 2, 4]}>
          {state.res.map((data) => (
            <Card {...data} />
          ))}
        </SimpleGrid>
      )}
      <Box mx="auto" width="fit-content">
        <Link to="/novedades">
          <Button bg="primary.400" color="white" _hover={{ bg: 'primary.500' }}>
            Ver todas
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
