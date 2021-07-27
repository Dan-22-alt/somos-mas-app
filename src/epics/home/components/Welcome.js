import { Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export const Welcome = () => {
  const organization = useSelector((state) => state.organization.data);
  return (
    <Text
      textAlign="center"
      as="h1"
      fontSize={['1.875rem', '2.1875rem', '3.125rem']}
      bg="gray.50"
      borderBottom="1px"
      borderColor="gray.200"
      py="2.5rem"
      mb="2.5rem"
    >
      {organization?.welcome_text}
    </Text>
  );
};
