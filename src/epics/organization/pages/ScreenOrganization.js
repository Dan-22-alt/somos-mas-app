import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
    SimpleGrid,
    Center,
    Button,
    Heading,
    Flex,
    Text,
    Image,
    Box
} from "@chakra-ui/react";
import { getData } from "../../../services/organizationService";
import Spinners from "../../../layout/Spinners";

const ScreenOrganization = () => {

    const getDatos = getData();
    const [data, setData] = useState({});

    useEffect(() => {
        if (getDatos.res?.data) setData(getDatos.res.data[0]);
    }, [getDatos]);

    const textHtml = () => {
        const text = data.short_description
        const shortDesc = text.replace(/<[^>]+>/g, '')
        return <Text d="flex">{shortDesc}</Text>
    }

    return (
        <Flex backgroundColor="gray.200" h="100vh" flexDirection="column" alignItems="center" paddingTop="9vh">
                <Text fontWeight="semibold" fontSize="3xl" color="teal" mb={2}>DATOS DE LA ORGANIZACIÓN</Text>
                <Center w="100vh" marginBottom="6vh">
                {data.name
                    ? <SimpleGrid>
                        <Box alignItems="center" justifyContent="space-around" h="15vh" d="flex">
                            <Heading>{data.name}</Heading>
                        </Box>
                            <Image
                                boxSize="75%"
                                objectFit="contain"
                                src={data.logo}
                                className="margin-auto"
                                alt="logo"
                            />
                        <SimpleGrid d="flex"  flexDirection="column" >
                            <Text d="flex" color="teal" fontSize="2xl">Descripción breve</Text>
                            {textHtml()}
                        </SimpleGrid>
                    </SimpleGrid>
                    : <Spinners />}
                </Center>
                <Link to="/backoffice/organization/edit">
                    <Button
                        w="18vh"
                        h="7vh"
                        borderRadius="20px"
                        type="submit"
                        variant="solid"
                        colorScheme="teal">
                        Editar
                    </Button>
                </Link>
        </Flex>
    )
}

export default ScreenOrganization
