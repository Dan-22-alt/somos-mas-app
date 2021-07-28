import { Box, Container, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../../categories/pages/ContactForm';
import { Spinner } from './../../../layout/Spinners';
import InfoContact from './infContact';
import Title from '../../../components/Title';

const Contact = () => {
  const image =
    'https://businessblog.trivago.com/wp-content/uploads/2019/10/The-Best-Ways-for-Hoteliers-to-Contact-trivago.jpg';
  const datosOrg = useSelector((state) => state.organization);

  return (
    <Container>
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 8 }}>
        <Title title="Contacto" image={image} />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {datosOrg.status === 'succeeded' ? <InfoContact datos={datosOrg} /> : <Spinner />}

          <Flex>
            <ContactForm />
          </Flex>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Contact;
