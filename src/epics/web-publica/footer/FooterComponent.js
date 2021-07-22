import React from 'react'

import { Flex, Container, SimpleGrid, Stack, Heading, Center } from "@chakra-ui/react";

import Logo from './components/Logo';
import Items from './components/Items';
import Contactos from './components/Contacto';
import FormNewsletter from './components/FormNewsletter';

const arraySecciones = [{
    route: "/1",
    name: "Inicio",
    id: 1
  },
  {
    route: "/2",
    name: "Contactos",
    id: 2
  },
  {
    route: "/3",
    name: "Proyectos",
    id: 3
  },
  {
    route: "/2",
    name: "Donaciones",
    id: 4
  },
  {
    route: "/3",
    name: "Servicios",
    id: 5
  },
  {
    route: "/2",
    name: "Algo mas",
    id: 6
  }
]

const FooterComponent = ({organizationData}) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      pb={1}
      bg="primary.400"
      color="white"
    >
      <Container as={Stack} maxW={'5x1'} py={2}>
        <SimpleGrid
          columns={4}
          spacing={5}
        >
          <Center>
            <Stack spacing={2}>
              <Flex align="center" >
                <Logo img={organizationData?.logo}></Logo>
              </Flex>
              <Heading align="center" mx={0} as="h3" size="md">
                <Center>{organizationData?.name}</Center>
              </Heading>
            </Stack>
          </Center>
          <Items titulo="Navegación" array={arraySecciones}/>
          <Contactos titulo="Contáctanos" datosContacto={organizationData}/>
          <FormNewsletter></FormNewsletter>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
export default FooterComponent
