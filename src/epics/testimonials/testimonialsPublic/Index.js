import React from 'react'
import Title from "../../../components/Title";
import { Box, Container, Stack } from "@chakra-ui/react";

const Index = () => {

    const image = "http://www.tusclicks.cl/blog/wp-content/uploads/2013/10/testimonios.png"

    return (
        <Container maxW="3xl">
            <Stack
                as={Box}
                textAlign="center"
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Title title="Testimonios" image={image}/>
            </Stack>
        </Container>
    )
}

export default Index
