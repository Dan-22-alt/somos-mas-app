import { Alert, AlertIcon, Text, Textarea } from '@chakra-ui/react';
import React from 'react';

export const FormTextArea = ({ control, id }) => {
  return (
    <>
      <Text mb="8px">Welcome message</Text>
      <Textarea
        id={id}
        value={control.values[id]}
        onChange={control.handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        onBlur={control.handleBlur}
      />
      {control.errors[id] && control.touched[id] && (
        <Alert justifyContent="center" status="error">
          <AlertIcon />
          {control.errors[id]}
        </Alert>
      )}
    </>
  );
};
