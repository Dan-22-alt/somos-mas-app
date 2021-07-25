import React from 'react';
import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import Title from '../../../components/Title';

const Index = () => {
    const imagen = 'https://www.expoknews.com/wp-content/uploads/2018/01/cosas-que-debes-saber-antes-de-donar.jpg'

    return ( 
        <Container maxW="3xl">
        <Stack
            as={Box}
            textAlign="center"
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
        >
            <Title title="Donar" image={imagen}  />
            
        </Stack>
    </Container>
     );
}
 
export default Index;