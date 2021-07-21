import React from 'react'
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import Title from '../../../components/Title';

const Index = () => {
    return (
        <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          {/*COMPONENTE DE TITULO NOSOTROS*/}
          <Title title="DETALLE DE NOVEDAD" ></Title>         
          
        </Stack>
      </Container>
    )
}

export default Index
