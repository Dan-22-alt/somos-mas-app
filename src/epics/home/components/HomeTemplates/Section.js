import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Container } from "./Container";

export const Section = ({title}) => {
  const data = [1, 2, 3, 4]
  return(
    <Box>
      <Text
        as='h2'
        fontSize={['1.5rem', '2rem']}
        textAlign='center'
        mt={['80px', '170px']}
        mb={['1rem', '3.25rem']}
      >
    {title}
      </Text>
      <Container arrOfImage={data}/>
    </Box>
  )
}
