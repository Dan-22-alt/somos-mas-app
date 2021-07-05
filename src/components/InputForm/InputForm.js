import React from "react";

import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export const InputForm =
  ({type='text', placeholder='set this please', label='set this please'}) => {
  return (
    <FormControl mt={2}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput
        type={type}
        placeholder={placeholder}
      />
    </FormControl>
  )
}
