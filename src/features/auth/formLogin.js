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
    useToast,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { login } from '../../services/authService'
import { useSelector, useDispatch } from 'react-redux';
import { authLog, selectAuth } from '../../reducers/authReducer';

const FormLogin = () => {

    const toast = useToast();
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

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
            // console.log(values)
            //Conexion a la API
            dispatch(authLog(values))
            // const alertType = login(values)
            // handleFeedback(alertType)
        }
    });

    //Funcion para llamar alertas de Login

    const handleFeedback = (alertType) => {
        if (alertType){
            toast({
				description: "Bienvenido!",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
        }
        else{
            toast({
				description: "Email o contraseña incorrecta",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
        }
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
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

    );
}

export default FormLogin;