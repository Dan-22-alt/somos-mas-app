import React, {Fragment } from 'react'
import { Stack, Text, Input, IconButton, useToast } from "@chakra-ui/react";
import { BiMailSend } from 'react-icons/bi';
import { useFormik } from 'formik';

const FormNewsletter = () => {
    const toast = useToast()
    const emailSuscripto = localStorage.getItem('suscripto')
  
    const formSuscription = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            localStorage.setItem('suscripto', values.email);    
            toast({
                title: "Suscripcion Correcta",
                status: "success",
                duration: 2000,
            })
            formSuscription.resetForm()
        },
    })
    return (
        <Fragment>
            {
                !emailSuscripto ?
                    (
                        <Stack align={'flex-start'}>
                            <Text align="center" fontWeight={'500'} fontSize={'lg'} mb={2}>
                                Suscribete al Newsletter
                            </Text>
                            <form onSubmit={formSuscription.handleSubmit}>
                                <Stack direction={'row'}>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder={'Ingresa tu email'}
                                        bg={'primary.700'}
                                        color={'black'}
                                        border={0}
                                        _focus={{
                                            bg: 'whiteAlpha.800',
                                        }}
                                        onChange={formSuscription.handleChange}
                                        value={formSuscription.values.email}
                                    />
                                    <IconButton
                                        bg={'primary.800'}
                                        color={'gray.800'}
                                        _hover={{
                                            bg: 'primary.600',
                                        }}
                                        aria-label="Subscribe"
                                        icon={<BiMailSend />}
                                        type='submit'
                                    />
                                </Stack>
                            </form>
                        </Stack>
                    )
                    :
                    (
                        <Stack align={'flex-center'}>
                            <Text align="center" fontWeight={'500'} fontSize={'lg'} mb={2}>
                                Gracias, estas suscripto a nuestro Newsletter.
                            </Text>
                        </Stack>
                    )
            }
        </Fragment>
    )
}

export default FormNewsletter
