import React from "react";

import {
    Flex,
    Heading,
    Input as ChakraInput,
    Button,
    Stack,
    Box,
    Avatar,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    useToast,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { CenterBox } from '../components/CenterBox/CenterBox'









const FormBox = ({onSubmit}) => {
  return (
    <Box minW={{ base: "90%", md: "468px" }}>
      <form onSubmit={onSubmit}>
        <Stack
          spacing={4}
          p="1rem"
          background="whiteAlpha.900"
          boxShadow="md"
        >
        </Stack>
      </form>
    </Box>
  )
}






export const HomePage = () => {
  const mmmm = () => console.log('hola')
  return (
    <CenterBox>
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Login</Heading>
      <FormBox onSubmit={mmmm}/>
    </CenterBox >
  )
}
