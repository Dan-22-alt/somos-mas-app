import React, { useEffect, useState, Fragment } from 'react'
import { Flex, Container, SimpleGrid, Stack, Heading, Center} from "@chakra-ui/react";
import { getData } from '../../../services/organizationService';
import Logo from './components/Logo';
import Items from './components/Items';
import Contactos from './components/Contacto';

const FooterComponent = () => {
    const getDatos = getData();
    const [data, setData] = useState({});
    const [datosContacto, setDatosContacto] = useState({});

    // datos ejemplo------------------------------------------------------------
    const arraySecciones = [{
        route: "/1",
        name: "Inicio",
        id: 1
    },
    {
        route: "/2",
        name: "Contactos",
        id: 2
    },
    {
        route: "/3",
        name: "Proyectos",
        id: 3
    },
    ,
    {
        route: "/2",
        name: "Donaciones",
        id: 4
    },
    {
        route: "/3",
        name: "Servicios",
        id: 5
    },
    {
        route: "/2",
        name: "Algo mas",
        id: 6
    },
    ]
    // Fin datos ejemplo------------------------------------------------------------



    useEffect(() => {
        if (getDatos.res?.data) {
            setData(getDatos.res.data[0]);
            setDatosContacto({
                phone : getDatos.res.data[0].phone,
                cellphone: getDatos.res.data[0].cellphone,
                address: getDatos.res.data[0].address
            }
            )
        } 
    }, [getDatos]);
    console.log(data);
    return (
        <Fragment>
            <Flex
                as="footer"
                align="center"
                justify="space-between"
                wrap="wrap"
                pb={1}
                bg="blue.1"
                color="white"
                mt="20rem" // RECORDAR SACARLOOOOOO ES SOLO DE PARA LA PRUEBAAAAA-------------------------------------------------
            >
                <Container as={Stack} maxW={'7x1'} py={2}>
                    <SimpleGrid
                        columns={3} spacing={10}>
                        <Center>
                        <Stack  spacing={4}>
                            <Flex align="center" >
                                <Logo img={data.logo}></Logo>
                            </Flex>
                            <Heading mx={1} as="h3" size="md">
                                <Center>{data.name}</Center>
                            </Heading>
                        </Stack>
                        </Center>
                        <Items titulo={"Navegación"} array={arraySecciones}></Items>
                        <Contactos titulo={"Contáctanos"} datosContacto={datosContacto}></Contactos>
                    </SimpleGrid>
                </Container>
            </Flex>
        </Fragment>
    )
}

export default FooterComponent
