import { Button, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Alert from '../alert/Alert';

export const ButtonsCard = ({ id, handleDelete, handleEdit }) => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  return (
    <HStack spacing={4} justifyContent="center">
      <Button bg="primary.400" _hover={{ bg: 'primary.300' }} color="white" onClick={() => handleEdit(id)}>
        Editar
      </Button>
      <Button onClick={() => setDeleteIsOpen(true)} colorScheme="red">
        Eliminar
      </Button>
      <Alert
        isOpen={deleteIsOpen}
        setIsOpen={setDeleteIsOpen}
        title="¿Desea eliminar esta actividad?"
        type="error"
        onConfirm={() => handleDelete(id)}
      />
    </HStack>
  );
};
