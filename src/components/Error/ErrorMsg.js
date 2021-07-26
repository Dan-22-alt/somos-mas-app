import React from "react";
import { Text, Box } from "@chakra-ui/react";

export const ErrorMsg = ({text}) => (
  <Box>
    <Text
      as='h2'
      fontSize={[
        '1.25rem',
        '1.875rem',
        '2.5rem',
        '3rem'
      ]}
      color='gray.400'
      textAlign='center'
    >
      {text}
    </Text>
  </Box>
)
