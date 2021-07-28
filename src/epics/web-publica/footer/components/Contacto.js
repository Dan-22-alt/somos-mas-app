import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Contactos = ({ titulo, organization }) => {
  return (
    <Flex>
      <Stack align={'center'} mx={'auto'} mt={0} justify="center">
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
      </Stack>
    </Flex>
  );
};

export default Contactos;
