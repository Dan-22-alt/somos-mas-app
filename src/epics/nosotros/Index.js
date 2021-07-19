import React, { useEffect, useState } from 'react'
import {
    Box,
    Container,
    Heading,
    Stack,
} from '@chakra-ui/react';
import { getData } from '../../services/organizationService';
import Description from './components/Description';
import MemberList from './../members/components/MemberList';


const Index = () => {
    const getDatos = getData();
    const [data, setData] = useState({});

    useEffect(() => {
        if (getDatos.res?.data) {
            setData(getDatos.res.data[0]);

        }
    }, [getDatos]);
    console.log(data);

    return (
        <Container maxW={'3xl'}>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                {/* ACA VA EL COMPONENTE DE TITULO NOSOTROS-  TICKET 97" ------------------------------------------------ */}
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    Sobre nosotros
                </Heading>
                <Description text={data.short_description}>{ }</Description>                
                <Heading align="center" mx={"auto"} mb={0} as="h1" size="2xl">
                    Miembros
                </Heading>
                {/* ACA VA EL COMPONENTE DE DE LISTAR MIEMBROS- TICKET 104" ------------------------------------------------ */}
                
            </Stack>
        </Container>

    )
}

export default Index
