import React from "react";

import { Flex, Stack } from '@chakra-ui/react';


export const CenterBox = ({children}) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
    </Flex>
  )
}
