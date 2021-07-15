import React from 'react'
import {
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";

const Contactos = ({ titulo, datosContacto }) => {

    return (
        <Stack mt={0} align={'center'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                {titulo}
            </Text>
            <Text fontSize="sm">Teléfono: {datosContacto.phone}</Text>
            <Text fontSize="sm">Celular: {datosContacto.cellphone}</Text>
            <Text fontSize="sm">{datosContacto.address}</Text>

        </Stack>
    )
}

export default Contactos
