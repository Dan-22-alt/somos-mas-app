import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    Avatar,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';

const FormLogin = () => {
      // Formulario y validación con formik y Yup
      const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('El email no es válido')
                .required('El Email es Obligatorio'),
            password: Yup.string()
                .required('Ingrese su contraseña')
                .min(6, 'El password debe contener al menos 6 caracteres')
        }),
        onSubmit: valores => {
            const values = {
                email: valores.email,
                password: valores.password
            };
            console.log(values)
        }
    });
    return (
        <Flex
        flexDirection="column"
        width="100wh"
        height="90vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Login</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form
                onSubmit={formik.handleSubmit}
            >
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl mt={2}>
                        {formik.touched.email && formik.errors.email ? (
                            <Alert justifyContent="center" status="error">
                                <AlertIcon />
                                {formik.errors.email}
                            </Alert>
                            ) : null}
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Mquinola@maquinola.com"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>
                    <FormControl mt={2}>
                    {formik.touched.password && formik.errors.password ? (
                            <Alert justifyContent="center" status="error">
                                <AlertIcon />
                                {formik.errors.password}
                            </Alert>
                            ) : null}
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>





        /*<Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
            <Box my={4} textAlign="left">
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <FormControl mt={2}>
                        {formik.touched.email && formik.errors.email ? (
                            <Alert status="error">
                                <AlertIcon />
                                {formik.errors.email}
                            </Alert>
                            ) : null}
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Mquinola@maquinola.com"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>
                    <FormControl mt={2}>
                    {formik.touched.password && formik.errors.password ? (
                            <Alert status="error">
                                <AlertIcon />
                                {formik.errors.password}
                            </Alert>
                            ) : null}
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>
                    <Button width="full" mt={4} type="submit" colorScheme="teal" variant="outline">
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    </Flex>*/
);

}
 
export default FormLogin;