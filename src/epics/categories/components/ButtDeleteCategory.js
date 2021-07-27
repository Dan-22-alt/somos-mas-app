import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Alert from '../../../components/alert/Alert';

const ButtDeleteCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colorScheme="red" onClick={() => setIsOpen(true)}>
        Eliminar
      </Button>

      <Alert
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Eliminando"
        description="¿Estas seguro que deseas eliminar esta categoria?"
        type="error"
        hasFeedback={true}
        feedbackTitle="Eliminado con exito"
        feedbackDuration={3000}
      />
    </>
  );
};

export default ButtDeleteCategory;
