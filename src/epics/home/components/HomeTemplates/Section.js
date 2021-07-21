import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Container } from "./Container";
import SpinnerChakra from "../../../../layout/Spinners";

export const Section = ({title, state}) => {

  const Spinner = () => (
    <Box
      w='100%'
      h='9rem'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <SpinnerChakra />
    </Box>
  )

  console.log(state)
  return(
    <Box
      mb={['5rem', '10.625rem']}
    >
      <Text
        as='h2'
        fontSize={['1.5rem', '2rem']}
        textAlign='center'
        mb={['1rem', '3.25rem']}
      >
        {title}
      </Text>
      { state.loading
        ? <Spinner />
        : <Container arrOfImage={state.res}/>
      }
    </Box>
  )
}
