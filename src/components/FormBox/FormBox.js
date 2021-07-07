import React from "react";
import { Stack, Box } from '@chakra-ui/react';

export const FormBox = ({onSubmit, children}) => {
  return (
    <Box minW={{ base: "90%", md: "100%" }}>
      <form onSubmit={onSubmit}>
        <Stack
          spacing={4}
          p="1rem"
          background="whiteAlpha.900"
          boxShadow="md"
        >
        {children}
        </Stack>
      </form>
    </Box>
  )
}
