import React, { useEffect } from 'react'
import { Card } from './Components/Card';
import { useDispatch, useSelector } from "react-redux"
import { ObtenerNovedades } from '../../../reducers/newsBackofficeReducer';
import { Flex, Container, SimpleGrid, Stack, Heading, Center, Text } from "@chakra-ui/react";
import { Fragment } from 'react';

const Listado = ({titulo, array}) => {

    // PARA OBTENER LOS ARRAYS RESOPECTIVOS SE PUEDE USAR ESTO en el componte que renderiza:

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(ObtenerNovedades())
    //   dispatch(fetchActivities())
    // }, []);

    // const dataAct = useSelector(state => state.activities);
    // const actividades = Object.values(dataAct.entities)
    // const dataNews = useSelector(state => state.news);
    // const news = dataNewa?.news
    
    return (
        <Fragment>
            <Flex>
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    <Text>
                        {titulo}
                    </Text>
                </Heading>
            </Flex>
            <SimpleGrid                
                justifyItems="center"
                mx={[0, 5, 10, 30]}
                columns={["1", "2", "3"]} spacing={5}
            >
                {array.map(item => (
                    <Card
                        key={"card" + item.id}
                        {...item}
                    />
                ))}
            </SimpleGrid>

        </Fragment>
    )
}

export default Listado
