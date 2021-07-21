import React, { useEffect, useState } from 'react'
import {
  Box, Container,
  Heading, Stack,
} from '@chakra-ui/react';

import { getData } from '../../services/organizationService';
import { Spinner } from '../../layout/Spinners'
import Description from './components/Description';

const Index = () => {
    const {res, loading, error}= getData();
    const [data, setData] = useState({});

    useEffect(() => {
      if (res) setData(res.data[0])
      if (error) console.log(error)
    }, [res, error]);

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
                { loading
                  ? <Spinner minH='5rem'/>
                  : res
                    ? <Description minH='5rem' text={data.short_description}/>
                    : <Description minH='5rem' text='Error al cargar la descripcion'/>
                }
                <Heading align="center" mx={"auto"} mb={0} as="h1" size="2xl">
                    Miembros
                </Heading>
                {/* ACA VA EL COMPONENTE DE DE LISTAR MIEMBROS- TICKET 104" ------------------------------------------------ */}

            </Stack>
        </Container>
    )
}

export default Index
