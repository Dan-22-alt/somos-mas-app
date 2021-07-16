import React, { useEffect } from 'react'
import { Card } from './Components/Card';
import { useDispatch, useSelector } from "react-redux"
import { ObtenerNovedades } from '../../../reducers/newsBackofficeReducer';
import { Flex, Container, SimpleGrid, Stack, Heading, Center, Text } from "@chakra-ui/react";
import { Fragment } from 'react';

const ListNews = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ObtenerNovedades())
    }, []);
    const data = useSelector(state => state.news);
    const news = data?.news
    console.log(data?.news);
    return (
        <Fragment>
            <Flex>
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    <Text>
                        Novedades
                    </Text>
                </Heading>
            </Flex>
            <SimpleGrid
                // my="50px"
                // minChildWidth="350px"
                // mt="150px"
                justifyItems="center"
                // mx={[0, 5, 10, 30]}
                columns={["1", "2", "3"]} spacing={5}
            >
                {news.map(novedad => (
                    <Card
                        key={"new " + novedad.id}
                        {...novedad}
                    />
                ))}
            </SimpleGrid>

        </Fragment>
    )
}

export default ListNews
