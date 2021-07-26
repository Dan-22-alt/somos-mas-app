import React from 'react'
import Title from "../../../components/Title";
import { Box, Container, Stack } from "@chakra-ui/react";
import ListTestimonialsPublic from './components/ListTestimonialsPublic';
import Description from '../../nosotros/components/Description';

const Index = () => {

    const image = "http://www.tusclicks.cl/blog/wp-content/uploads/2013/10/testimonios.png"

    return (
        <Container maxW="6xl">
            <Stack
                as={Box}
                textAlign="center"
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Title title="Testimonios" image={image}/>
                <Description text="Listado de testimonios" ></Description>
                <ListTestimonialsPublic />
            </Stack>
        </Container>
    )
}

export default Index
