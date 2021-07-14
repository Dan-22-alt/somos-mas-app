import React, { useEffect, useState, Fragment } from 'react'
import {
    Flex,
    Container,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";
import { getData } from '../../../services/organizationService';
import Logo from './components/Logo';
import Items from './components/Items';

// PENDIENTE: 
// 1-altura del componente, revisarlo
// 2-No hay datos de redes sociales, incluir los datos de contacto por ahora mientras consulto 
// 3-Cambiar los colores a la paleta que se decidió hoy
// 4-Centrar y aumentar el tamaño del nombre de la organización

const FooterComponent = () => {
    const getDatos = getData();
    const [data, setData] = useState({});
    const arraySecciones = [{
        route: "/1",
        name: "Uno",
        id: 1
    },
    {
        route: "/2",
        name: "Dos",
        id: 2
    },
    {
        route: "/3",
        name: "Tres",
        id: 3
    },
    ]

    useEffect(() => {
        if (getDatos.res?.data) setData(getDatos.res.data[0]);
    }, [getDatos]);
    console.log(data);
    return (
        <Fragment>
            <Flex

                as="footer"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                bg="teal.500"
                color="white"
                mt="20rem" // RECORDAR SACARLOOOOOO ES SOLO DE PARA LA PRUEBAAAAA-------------------------------------------------
            >
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Flex align="center" >
                                <Logo img={data.logo}></Logo>
                            </Flex>
                            <Text fontSize={'sm'}>
                                {data.name}
                            </Text>
                        </Stack>
                        <Items titulo={"Navegación"} array={arraySecciones}></Items>
                        <Items titulo={"Navegación"} array={arraySecciones}></Items>  
                    </SimpleGrid>
                </Container>
            </Flex>
        </Fragment>
    )
}

export default FooterComponent
