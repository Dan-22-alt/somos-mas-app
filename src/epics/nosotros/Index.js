import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import { Spinner } from '../../layout/Spinners';
import { getAll } from '../../services/membersService';
import { getData } from '../../services/organizationService';
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import Description from './components/Description';
import NosotrosMemberList from './components/NosotrosMemberList';

const Index = () => {
  const { res, loading, error } = getData();
  const [data, setData] = useState({});
  const [members, setMembers] = useState();
  const imagen = 'https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg';

  useEffect(() => {
    if (res) setData(res.data[0]);
    if (error) console.log(error);
  }, [res, error]);

  useEffect(() => {
    const getMem = async () => {
      try {
        const res = await getAll();
        setMembers(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    if (!members) getMem();
  }, [members]);

  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Title title="Nosotros" image={imagen} />
        <Heading align="center" mx={'auto'} my={5} as="h1" size="2xl">
          Sobre nosotros
        </Heading>
        {loading ? (
          <Spinner minH="5rem" />
        ) : res ? (
          <Description minH="5rem" text={data.short_description} />
        ) : (
          <Description minH="5rem" text="Error al cargar la descripcion" />
        )}
        <Heading align="center" mx="auto" mb={0} as="h1" size="2xl">
          Miembros
        </Heading>
        {members ? <NosotrosMemberList members={members}></NosotrosMemberList> : <ComponentSkeleton />}
      </Stack>
    </Container>
  );
};

export default Index;
