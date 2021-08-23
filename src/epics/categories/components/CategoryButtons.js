import { Button } from '@chakra-ui/react';
import React from 'react';

export const CategoryButtons = ({ id, deleteCategory }) => {
  const handleEdit = () => console.log(id, 'editing');
  return (
    <>
      <Button colorScheme="cyan" m="1" onClick={handleEdit}>
        Edit
      </Button>
      <Button colorScheme="red" m="1" onClick={deleteCategory}>
        Delete
      </Button>
    </>
  );
};
