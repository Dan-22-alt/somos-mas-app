import { Alert, AlertIcon, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

export const InputForm = ({ type = 'text', placeholder = '', label = '', name, formik }) => {
  return (
    <FormControl mt={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <Alert justifyContent="center" status="error">
          <AlertIcon />
          {formik.errors[name]}
        </Alert>
      ) : null}
    </FormControl>
  );
};
