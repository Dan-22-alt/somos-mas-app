import { Text } from '@chakra-ui/react';
import React from 'react';

export const Welcome = ({ text }) => {
  return (
    <Text
      textAlign="center"
      as="h1"
      fontSize={['1.875rem', '2.1875rem', '3.125rem']}
      bg="gray.50"
      borderBottom="1px"
      borderColor="gray.200"
      py="2.5rem"
    >
      {text}
    </Text>
  );
};
