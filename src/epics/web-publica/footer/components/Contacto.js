import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Contactos = ({ titulo, organization }) => {
  return (
    <Stack align={'center'} mx={'auto'} mt={0}>
      <Text fontWeight={'500'} fontSize={['sm', 'md', 'lg', 'xl']} mb={2}>
        {titulo}
      </Text>
      <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        Teléfono: {organization.phone}
      </Text>
      <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        Celular: {organization.cellphone}
      </Text>
      <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl']} align={'center'}>
        {' '}
        {organization.address}
      </Text>
    </Stack>
  );
};

export default Contactos;
