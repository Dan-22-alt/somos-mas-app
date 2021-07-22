import React from 'react'
import { Stack, Text, Input,  IconButton, useColorModeValue } from "@chakra-ui/react";
import { BiMailSend } from 'react-icons/bi';

const FormNewsletter = () => {
    return (
        <Stack align={'flex-start'}>
                <Text align="center" fontWeight={'500'} fontSize={'lg'} mb={2}>
                    Suscribete al Newsletter
                </Text>
                <Stack direction={'row'}>
                    <Input
                        placeholder={'Ingresa tu email'}
                        bg={'primary.700'}
                        color={'black'}
                        border={0}
                        _focus={{
                            bg: 'whiteAlpha.800',
                        }}
                    />
                    <IconButton
                        bg={'primary.800'}
                        color={'gray.800'}
                        _hover={{
                            bg: 'primary.600',
                        }}
                        aria-label="Subscribe"
                        icon={<BiMailSend />}
                    />
                </Stack>
            </Stack>
    )
}

export default FormNewsletter
