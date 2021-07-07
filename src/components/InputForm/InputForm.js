import React from "react";
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

export const InputForm = ({type='text', placeholder='', label=''}) => {
  return (
    <FormControl mt={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
      />
    </FormControl>
  )
}
