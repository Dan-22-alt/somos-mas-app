import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Spinner } from '../../../../layout/Spinners';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './TestimoniesCard';
import { Link } from 'react-router-dom';

const TestimoniesCardsList = ({ title, state }) => {
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
        <Link to="/testimonios">
          <Button bg="primary.400" color="white" _hover={{ bg: 'primary.500' }}>
            Ver todos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TestimoniesCardsList;
