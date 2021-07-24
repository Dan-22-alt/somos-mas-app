import React from 'react'
import Title from "../../../components/Title";
import { Container, Stack } from "@chakra-ui/react";

const ActivitiesPublic = () => {

    const image = "https://www.esan.edu.pe/apuntes-empresariales/2016/06/14/ongempresas_principal.jpg"

    return (
        <Container maxW="3xl">
            <Stack
                as={Box}
                textAlign="center"
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Title title="Actividades" image={image}/>
            </Stack>
        </Container>
    )
}

export default ActivitiesPublic
