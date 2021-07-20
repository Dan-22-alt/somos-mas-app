import React, { useEffect, useState } from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { getData } from "../../services/organizationService";
import Description from "./components/Description";
import Title from "../../components/Title";
import { getAll } from "../../services/membersService";
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import NosotrosMemberList from './components/NosotrosMemberList';

const Index = () => {
    const getDatos = getData();
    const [data, setData] = useState({});
    //   const getMembers = getAll()
    const [members, setMembers] = useState()

    useEffect(() => {
        if (getDatos.res?.data) {
            setData(getDatos.res.data[0]);
        }

    }, [getDatos]);

    async function getMem() {
         await getAll().then(res => {
            setMembers(res.data)
        })
    }

    if (!members) {
        getMem()
    }

    return (
        <Container maxW={"3xl"}>
            <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Title title="Nosotros"></Title>
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    Sobre nosotros
                </Heading>
                <Description text={data.short_description}>{ }</Description>
                <Heading align="center" mx={"auto"} mb={0} as="h1" size="2xl">
                    Miembros
                </Heading>
                {
                    members ?
                        (<NosotrosMemberList members={members} ></NosotrosMemberList>)
                        :
                        (<ComponentSkeleton></ComponentSkeleton>)
                }
            </Stack>
        </Container>
    );
};

export default Index;
