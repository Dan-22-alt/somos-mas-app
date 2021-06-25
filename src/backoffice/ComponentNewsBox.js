import React from 'react'

import { Box , Button, Container } from "@chakra-ui/react"

const ComponentNewsBox = () => {
    return (
        <Box
            bmaxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="blue.300"
            overflow="hidden"
            w="60%"
            h="28vh"
            d="flex"
            flexDirection="row">
            <Box h="100%" w="28%" d="flex" alignItems="center" borderWidth="1px">
                Imagen de la novedad
            </Box>
            <Container>

                <Box d="flex" flexDirection="column" w="78%" h="100%" justifyContent="space-around">
                    <Box mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        Nombre de la novedad
                    </Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        Fecha de creacion: 24/06/2021
                    </Box>
                    <Box>
                        <Box d="flex" justifyContent="space-between" w="50%">
                            <Button colorScheme="orange">Editar</Button>
                            <Button colorScheme="red">Eliminar</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ComponentNewsBox
