import React, { useEffect, useState } from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import Description from "./components/Description";
import Title from "../../components/Title";
import { getAll } from "../../services/membersService";
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import NosotrosMemberList from './components/NosotrosMemberList';

import { useSelector } from 'react-redux'

const Index = () => {
    const organizationData = useSelector(state => state.organization.data)
    const [members, setMembers] = useState()
    const imagen = 'https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg'

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
                <Title title="Nosotros" image={imagen}></Title>
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    Sobre nosotros
                </Heading>
                <Description text={organizationData?.short_description}>{ }</Description>
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
