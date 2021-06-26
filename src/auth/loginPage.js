import React from 'react';
import {
    Flex,
    Box,
} from '@chakra-ui/react';
import FormLogin from "./formLogin"


const LoginPage = () => {
    return ( 
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} w="50%"  borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                </Box>
                <FormLogin/>
            </Box>
        </Flex>
     );
}
 
export default LoginPage;