import React from 'react';
import {
    Flex,
    Heading,
    Stack,
    Box,
} from '@chakra-ui/react';

const Dasboard = () => {
    return ( 
        <Flex
        flexDirection="column"
        width="100wh"
        height="90vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
    >
        <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
        >
            <Heading color="teal.400">Bienvenido!!!</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
                
            </Box>
        </Stack>
    </Flex>
     );
}
 
export default Dasboard;