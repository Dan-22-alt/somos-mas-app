import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    Avatar,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    useToast,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { login } from '../../services/authService'
import { useSelector, useDispatch } from 'react-redux';
import { authLog, selectAuth } from '../../reducers/authReducer';

import React, { useEffect } from 'react';
import FormLogin from "../features/auth/formLogin"
import { useSelector } from 'react-redux';
import { selectAuth } from '../reducers/authReducer';
import { useToast } from '@chakra-ui/react';
import AvoidAuthRedundancies from "../features/auth/AvoidAuthRedundancies";

    const toast = useToast();
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    // Formulario y validación con formik y Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('El email no es válido')
                .required('El Email es Obligatorio'),
            password: Yup.string()
                .required('Ingrese su contraseña')
                .min(6, 'El password debe contener al menos 6 caracteres')
        }),
        onSubmit: valores => {
            const values = {
                email: valores.email,
                password: valores.password
            };
            // console.log(values)
            //Conexion a la API
            dispatch(authLog(values))
            // const alertType = login(values)
            // handleFeedback(alertType)
        }
    });

    //Funcion para llamar alertas de Login

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
        <AvoidAuthRedundancies>
			<FormLogin />
		</AvoidAuthRedundancies>
    );
}

export default Login;
