import React from "react";
import { Text } from "@chakra-ui/react";

export const Welcome = ({text}) => {
  return (
    <Text
      textAlign='center'
      as='h1'
      fontSize={['1.875rem', '2.1875rem', '3.125rem']}
      mt='2rem'
      mb={['5rem', '10.625rem']}
    >
      {text}
    </Text>
  )
}
