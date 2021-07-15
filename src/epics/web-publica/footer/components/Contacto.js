import React from 'react'
import {Stack, Text} from "@chakra-ui/react";

const Contactos = ({ titulo, datosContacto }) => {

    return (
        <Stack align={"center"} mx={"auto"}  mt={0}>
            <Text fontWeight={'500'} fontSize={["sm", "md", "lg", "xl"]} mb={2}>
                {titulo}
            </Text>
            <Text fontSize={["xs","sm", "md", "lg", "xl"]}  align={"center"}> Teléfono: {datosContacto.phone}</Text>
            <Text fontSize={["xs","sm", "md", "lg", "xl"]}  align={"center"}> Celular: {datosContacto.cellphone}</Text>
            <Text fontSize={["xs","sm", "md", "lg", "xl"]}  align={"center"}> {datosContacto.address}</Text>

        </Stack>
    )
}

export default Contactos
