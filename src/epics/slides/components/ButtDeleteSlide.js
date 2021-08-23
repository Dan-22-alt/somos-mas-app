import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Alert from '../../../components/alert/Alert';

const ButtDeleteSlide = ({handleDelete, id}) => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteSlide = () => {
    handleDelete(id)
  }

  return (
    <>
      <Button m="2px" w="25vh" colorScheme="red" onClick={() => setIsOpen(true)}>
        Eliminar
      </Button>

      <Alert
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={deleteSlide}
        title="Eliminando"
        description="¿Estas seguro que deseas eliminar este slide?"
        type="error"
      />
    </>
  );
};

export default ButtDeleteSlide;
