import { Center, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Contactos from './components/Contacto';
import FormNewsletter from './components/FormNewsletter';
import Logo from './components/Logo';

const FooterComponent = () => {
  const organization = useSelector((state) => state.organization.data);

  return (
    <>
      <Flex
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        pb={-1}
        color="gray.900"
        borderTop="1px"
        borderColor="gray.200"
        bgColor="gray.50"
        fontSize={['md', 'lg', 'xl']}
      >
        <Container as={Stack} maxW={'5x1'} p={1}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <Center>
              <Stack spacing={2}>
                <Flex align="center" width="15vw" height="15vw">
                  <Logo img={organization.logo} />
                </Flex>
                {/* <Text>2021 Alkemy</Text> */}
              </Stack>
            </Center>

            <Contactos titulo={'Contáctanos'} organization={organization} />
            <Stack align={'center'} justify="center" height="10vw" p={5} display="flex">
              <FormNewsletter />
            </Stack>
          </SimpleGrid>
          <Stack direction="row" justify="space-between" p={3}>
            <Text fontSize="sm" color="#737373">
              Alkemy © 2021
            </Text>
            <Link to="/login" fontSize="sm" color="#737373" mt={10} display="block">
              Ingresar como administrador
            </Link>
          </Stack>
        </Container>
      </Flex>
    </>
  );
};
export default FooterComponent;
