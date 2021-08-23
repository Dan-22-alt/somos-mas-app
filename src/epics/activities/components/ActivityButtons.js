import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Alert from '../../../components/alert/Alert';

export const ActivityButtons = ({ id, deleteItem }) => {
  const handleEdit = () => console.log(id, 'editing');

  const handleDelete = () => {
    setDeleteIsOpen(true);
  };

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="center">
      <Button colorScheme="cyan" color="white" onClick={handleEdit} m="2px">
        Edit
      </Button>
      <Button m="2px" onClick={handleDelete} colorScheme="red">
        Delete
      </Button>
      <Alert
        isOpen={deleteIsOpen}
        setIsOpen={setDeleteIsOpen}
        title="¿Desea eliminar esta actividad?"
        type="error"
        onConfirm={() => deleteItem(id)}
      />
    </Box>
  );
};
