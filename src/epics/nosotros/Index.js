import React, { useEffect, useState } from 'react'
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { useSelector } from 'react-redux'

import Description from "./components/Description";
import NosotrosMemberList from './components/NosotrosMemberList';

import Title from "../../components/Title";
import { getAll } from "../../services/membersService";
import { Spinner } from '../../layout/Spinners'
import ComponentSkeleton from './../../layout/ComponentSkeleton';

const Index = () => {
  const { 'data':ongData, 'status': ongStatus } = useSelector(state => state.organization)

  const [members, setMembers] = useState()
  const imagen = 'https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg'

  useEffect(() => {
    const getMem = async() => {
      try {
        const res = await getAll()
        setMembers(res.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    if(!members) getMem()
  }, [members]);

  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Title title="Nosotros" image={imagen}/>
        <Heading align="center" mx="auto" my={5} as="h1" size="2xl">
          Sobre nosotros
        </Heading>
        { ongStatus === 'loading'
          ? <Spinner minH='5rem'/>
          : <Description
              minH='5rem'
              text={
                ongStatus === 'failed'
                ? 'Error al cargar la descripcion'
                : ongData?.short_description
              }
            />
        }
        <Heading align="center" mx="auto" mb={0} as="h1" size="2xl">
          Miembros
        </Heading>
        {members ? <NosotrosMemberList members={members}></NosotrosMemberList> : <ComponentSkeleton />}
      </Stack>
    </Container>
  );
};

export default Index;
