import React, { useEffect } from 'react';
import FormLogin from "../features/auth/formLogin"
import { useSelector } from 'react-redux';
import { selectAuth } from '../reducers/authReducer';
import { useToast } from '@chakra-ui/react';

const Login = () => {

    const log = useSelector(selectAuth);
    const toast = useToast();

    useEffect(() => {
        if (log.state === 'success') {
            toast({
                description: "Bienvenido!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } else if (log.state === 'error') {
            toast({
                description: "Email o contraseña incorrecta",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    });

    return (
        <div>
            <FormLogin />
        </div>
    );
}

export default Login;