import React from 'react';
import { Box, Container, Stack } from "@chakra-ui/react";
import Title from '../../../components/Title';

const Gracias = () => {
    const imagen = 'https://www.pnliafi.com.ar/wp-content/uploads/2021/06/declaracion-de-gratitud.jpg'

    return ( 
        <Container maxW="3xl">
        <Stack
            as={Box}
            textAlign="center"
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
        >
            <Title title="Gracias" image={imagen}  />
            
        </Stack>
    </Container>
     );
}
 
export default Gracias;