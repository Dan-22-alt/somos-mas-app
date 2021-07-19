import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {

    const [send, setSend] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Nombre obligatorio")
                .min(4, "El nombre es muy corto"),
            email: Yup.string()
                .email("Email no valido")
                .required("Email obligatorio"),
            phone: Yup.string()
                .required("Telefono obligatorio")
                .min(8, "El numero es muy corto"),
            message: Yup.string()
                .required("Mensaje obligatorio")
                .min(8, "El mensaje es muy corto"),
        }),
        onSubmit: valores => {
            const values = {
                name: valores.name,
                email: valores.email,
                phone: valores.phone,
                message: valores.message,
            };
            //fUNCIONES PARA EVITAR SPAM DE MENSAJES A REVISAR
            localStorage.setItem('msjSend', values)
            setSend(true)
            //fUNCIONES PARA EVITAR SPAM DE MENSAJES A REVISAR
        },
    });

    return (
        <Flex
            flexDirection="column"
            width="100vh"
            minH="80vh"
            maxH="125vh"
            backgroundColor="gray.100"
            justifyContent="center"
            alignItems="center"
            boxShadow={'2xl'}
            borderRadius="20px"
        >
            <Heading color="teal.400">Formulario de contacto</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack
                        spacing={4}
                        p="1rem"
                    >
                        <FormControl mt={2}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && !localStorage.getItem('msjSend') ? (
                                <Alert justifyContent="center" status="error" marginTop="2vh">
                                    <AlertIcon />
                                    {formik.errors.name}
                                </Alert>
                            ) : null}
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="ejemplo@gmail.com"
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && !localStorage.getItem('msjSend') ? (
                                <Alert justifyContent="center" status="error" marginTop="2vh">
                                    <AlertIcon />
                                    {formik.errors.email}
                                </Alert>
                            ) : null}
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Telefono</FormLabel>
                            <Input
                                type="number"
                                placeholder="1122334455"
                                id="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone && !localStorage.getItem('msjSend') ? (
                                <Alert justifyContent="center" status="error" marginTop="2vh">
                                    <AlertIcon />
                                    {formik.errors.phone}
                                </Alert>
                            ) : null}
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Mensaje</FormLabel>
                            <Textarea
                                type="text"
                                placeholder=""
                                id="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message && !localStorage.getItem('msjSend') ? (
                                <Alert justifyContent="center" status="error" marginTop="2vh">
                                    <AlertIcon />
                                    {formik.errors.message}
                                </Alert>
                            ) : null}
                        </FormControl>
                        {localStorage.getItem('msjSend') || send
                            ? <Box
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                height="2.5rem"
                                borderColor="black"
                                textAlign="center"
                            >Ya has enviado un mensaje</Box>
                            : <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full">
                                Enviar
                            </Button>
                        }
                    </Stack>
                </form>
            </Box>
        </Flex>
    )
}

export default ContactForm
