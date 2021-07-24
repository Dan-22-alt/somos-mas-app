import { Button } from '@chakra-ui/button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from '../../components';
import { logoutSuccess } from '../../reducers/authReducer';

const LogOutButt = () => {
  const dispatch = useDispatch();

  const [alertOpen, setAlertOpen] = useState(false);

  const logOut = () => {
    console.log('logout');
    dispatch(logoutSuccess());
  };

  return (
    <>
      <Button borderRadius="20px" variant="solid" colorScheme="teal" onClick={() => setAlertOpen(true)}>
        Cerrar sesión
      </Button>
      <Alert
        isOpen={alertOpen}
        setIsOpen={setAlertOpen}
        onConfirm={logOut}
        title="¿Desea cerrar sesión?"
        type="info"
        confirmButtonText="Cerrar"
        cancelButtonText="No"
        hasFeedback={true}
        feedbackTitle="Sesión cerrada"
        feedbackDuration={3000}
        feedbackType="info"
      />
    </>
  );
};

export default LogOutButt;
