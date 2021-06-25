import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

const FormLogin = () => {
    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
            <Box my={4} textAlign="left">
                <form>
                    <FormControl mt={2}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Mquinola@maquinola.com"
                            id="email"
                        />
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            id="password"
                        />
                    </FormControl>
                    <Button width="full" mt={4} type="submit" colorScheme="teal" variant="outline">
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    </Flex>
    );
}
 
export default FormLogin;