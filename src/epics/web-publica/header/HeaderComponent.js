import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Items from './components/Items';
import Logo from './components/Logo';
import ButtonLog from './components/ButtonLog';
import userIsLogged from './../../../features/auth/userIsLogged';

const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    const logged = userIsLogged()

    console.log(logged);

    //   datos ejemplo ----------------------------------------
    const datosEjemplo = {
        "id": 1,
        "name": "Somos Más",
        "logo": "http://ongapi.alkemy.org/storage/DzRIutTmQl.png",
        "short_description": "<p>Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.</p>",
        "long_description": "<p>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos.﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.</p>",
        "welcome_text": "Bienvenido a nuestra ONG!",
        "address": "Perón 1525, CABA",
        "phone": "44203322",
        "cellphone": "1160112988",
        "created_at": "2021-03-31T12:33:48.000000Z",
        "updated_at": "2021-07-12T22:18:56.000000Z",
        "deleted_at": null
    }
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

    const usuarioLog = true

    // fin datos ejemplo ----------------------------------------

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <Flex align="center" >
                <Logo img={datosEjemplo.logo}></Logo>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            {
                usuarioLog ?
                (<Items array={arraySecciones} isOpen={isOpen} ></Items>)
                :
                (<ButtonLog isOpen={isOpen} ></ButtonLog>)
            }
                
        </Flex>
    );
};

export default Header;
