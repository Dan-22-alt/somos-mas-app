import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import FormNewsletter from './FormNewsletter';

const Contactos = ({ titulo, organization }) => {
  return (
    <Stack align={'center'} mx={'auto'} mt={0}>
      <Text fontWeight="bold" fontSize={['md', 'lg', 'xl']} mb={2}>
        {titulo}
      </Text>
      <Text fontSize={['sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        Teléfono: {organization.phone}
      </Text>
      <Text fontSize={['sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        Celular: {organization.cellphone}
      </Text>
      <Text fontSize={['sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        {organization.address}
      </Text>
      <FormNewsletter />
    </Stack>
  );
};

export default Contactos;
