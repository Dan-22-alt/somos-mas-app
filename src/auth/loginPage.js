import React from 'react';
import {
    Flex,
    Box,
    Heading,
} from '@chakra-ui/react';
import FormLogin from "./formLogin"


const LoginPage = () => {
    return ( 
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8}  borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <FormLogin/>
            </Box>
        </Flex>
     );
}
 
export default LoginPage;