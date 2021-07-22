import React from 'react'
import { Stack, Text, Input,  IconButton, useColorModeValue } from "@chakra-ui/react";
import FormNewsletter from './FormNewsletter';


const Contactos = ({ titulo, datosContacto }) => {
    const fontSize = ["xs", "sm", "md", "lg", "xl"]
    return (
        <Stack align="center" mx="auto" mt={0}>
            <Text fontWeight='500' fontSize={["sm", "md", "lg", "xl"]} mb={2}>
                {titulo}
            </Text>
            <Text fontSize={fontSize} align="center"> Teléfono: {datosContacto?.phone} Celular: {datosContacto?.cellphone} </Text>
            <Text fontSize={fontSize} align="center"> {datosContacto?.address}</Text> 
            <FormNewsletter></FormNewsletter>

        </Stack>
    )
}

export default Contactos
