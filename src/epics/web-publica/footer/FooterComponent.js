import { Center, Container, Flex, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Contactos from './components/Contacto';
import Items from './components/Items';
import Logo from './components/Logo';

const FooterComponent = () => {
  const organization = useSelector((state) => state.organization.data);
  // datos ejemplo------------------------------------------------------------
  const arraySecciones = [
    {
      route: '/1',
      name: 'Inicio',
      id: 1,
    },
    {
      route: '/2',
      name: 'Contactos',
      id: 2,
    },
    {
      route: '/3',
      name: 'Proyectos',
      id: 3,
    },
    {
      route: '/2',
      name: 'Donaciones',
      id: 4,
    },
    {
      route: '/3',
      name: 'Servicios',
      id: 5,
    },
    {
      route: '/2',
      name: 'Algo mas',
      id: 6,
    },
  ];
  // Fin datos ejemplo------------------------------------------------------------

  return (
    <Fragment>
      <Flex
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        pb={1}
        color="gray.900"
        borderTop="1px"
        borderColor="gray.200"
        bgColor="gray.50"
        py="8"
      >
        <Container as={Stack} maxW={'5x1'} py={2}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <Center>
              <Stack spacing={2}>
                <Flex align="center">
                  <Logo img={organization.logo} />
                </Flex>
                <Heading align="center" mx={0} as="h3" size="md">
                  <Center>{organization.name}</Center>
                </Heading>
              </Stack>
            </Center>
            <Items titulo={'Navegación'} array={arraySecciones}></Items>
            <Contactos titulo={'Contáctanos'} organization={organization}></Contactos>
          </SimpleGrid>
        </Container>
      </Flex>
    </Fragment>
  );
};
export default FooterComponent;
