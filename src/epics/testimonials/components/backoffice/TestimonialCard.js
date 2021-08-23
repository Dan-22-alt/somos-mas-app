import { Avatar, Box, Button, Center, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Alert } from '../../../../components';
import { deleteTestimonialByID } from '../../../../reducers/testimonialsReducer';

export default function TestimonialCard({ image, name, id }) {
  const dispatch = useDispatch();


  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const history = useHistory();

  const handleDelete = () => setDeleteIsOpen(true)
  const onConfirmDelete = () => dispatch(deleteTestimonialByID(id))

  const handleEdit = () => {
    history.push(`/backoffice/testimonials/${id}`);
  }

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
            onClick={handleEdit}
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
        onConfirm={onConfirmDelete}
        title="¿Desea eliminar el testimonio?"
        type="error"
        confirmButtonText="Eliminar"
      />
    </Center>
  );
}
