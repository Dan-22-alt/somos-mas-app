import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Spinner } from '../../../../layout/Spinners';
import { Container } from './Container';

export const Section = ({ title, state }) => {
  return (
    <Box mb="2rem">
      <Text as="h2" fontSize={['1.5rem', '2rem']} py="2rem" textAlign="center">
        {title}
      </Text>
      {state.loading ? (
        <Spinner minH="10rem" />
      ) : (
        <Box py="2rem">
          <Container arrOfImage={state.res} />
        </Box>
      )}
    </Box>
  );
};
