import React, { useEffect } from 'react'
import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import Title from '../../components/Title';
import Description from '../nosotros/components/Description';
import { useSelector, useDispatch } from 'react-redux'
import { ObtenerNovedades } from '../../reducers/newsBackofficeReducer';
import { Spinner } from '../../layout/Spinners';
import { Fragment } from 'react';
import NewsCardPublic from './components/NewsCardPublic';
import { Card } from '../../components/Card/index';
import { Link } from 'react-router-dom';

const Index = () => {
    const imagen = 'https://image.shutterstock.com/image-photo/text-sign-showing-update-motivational-600w-1326093911.jpg'
    const { 'news': newsData, 'status': newsStatus } = useSelector(state => state.news)

    // idle
    const dispatch = useDispatch();
    useEffect(() => {
        if (newsStatus === "idle") {
            dispatch(ObtenerNovedades())
        }
    }, [newsStatus])

    return (
        <Container maxW="3xl">
            <Stack
                as={Box}
                textAlign="center"
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Title title="Novedades" image={imagen} />
                <Description text="Enterate de nuestras novedades" ></Description>
                <SimpleGrid
                    my="auto"
                    mt="50px"
                    justifyItems="center"
                    mb='10rem'
                    minChildWidth="20vw"
                    spacing="40px"
                >
                    {
                        newsStatus === "succeeded" ?
                            (
                                newsData.map(ne =>
                                    <Link to={`/novedades/${ne.id}`} >
                                        <NewsCardPublic
                                            key={ne.id}
                                            data={ne}
                                        />
                                    </Link>
                                )
                            )
                            :
                            (
                                <Fragment>
                                    <Spinner /> <Spinner />
                                    <Spinner /> <Spinner />
                                </Fragment>
                            )
                    }
                    {
                        newsStatus === "failed" ?
                        ( <span>Error al cargar las novedades</span> )
                        :
                        ( <span></span> )
                    }
                </SimpleGrid>


                {/* { ongStatus === 'loading'
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
          { members
            ? (<NosotrosMemberList members={members} ></NosotrosMemberList>)
            : <ComponentSkeleton/>
          } */}
            </Stack>
        </Container>
    )
}

export default Index
