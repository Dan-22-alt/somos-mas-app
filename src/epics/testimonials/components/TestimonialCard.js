import { Avatar, Box, Button, Center, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Alert } from '../../../components';

export default function TestimonialCard({ image, name, id }) {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const handleDelete = () => {
    setDeleteIsOpen(true);
  };

  return (
    <Center py={6}>
      <Box w="full" bg={useColorModeValue('white', 'gray.900')} boxShadow="lg" rounded="md" p={6} textAlign="center">
        <Avatar size="xl" src={image} alt="Avatar Alt" mb={4} pos="relative" />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize="sm"
            rounded="md"
            boxShadow="md"
            _focus={{
              bg: 'gray.100',
            }}
          >
            Editar
          </Button>
          <Button
            onClick={handleDelete}
            flex={1}
            fontSize="sm"
            rounded="md"
            bg="red.400"
            color="white"
            boxShadow="md"
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}
          >
            Eliminar
          </Button>
        </Stack>
      </Box>
      <Alert
        isOpen={deleteIsOpen}
        setIsOpen={setDeleteIsOpen}
        title="¿Desea eliminar el testimonio?"
        type="error"
        confirmButtonText="Eliminar"
      />
    </Center>
  );
}
