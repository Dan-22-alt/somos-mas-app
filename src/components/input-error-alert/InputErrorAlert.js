import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const InputErrorAlert = ({ text, ...rest }) => {
  return (
    <Alert status="error" borderRadius="md" {...rest}>
      <AlertIcon />
      {text}
    </Alert>
  );
};

export default InputErrorAlert;
