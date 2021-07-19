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

const ContactForm = () => {

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
                <form>
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
                            />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="ejemplo@gmail.com"
                                id="email"
                            />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Telefono</FormLabel>
                            <Input
                                type="number"
                                placeholder="1122334455"
                                id="phone"
                            />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Mensaje</FormLabel>
                            <Textarea
                                type="text"
                                placeholder=""
                                id="message"
                            />
                        </FormControl>
                        {localStorage.getItem('msjSend') 
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
