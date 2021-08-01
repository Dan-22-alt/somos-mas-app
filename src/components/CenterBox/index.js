import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';

export const CenterBox = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        {children}
      </Stack>
    </Flex>
  );
};
