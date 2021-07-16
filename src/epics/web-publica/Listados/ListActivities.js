import React, { Fragment, useEffect, useState } from 'react'
import { Flex, Container, SimpleGrid, Stack, Heading, Center, Text } from "@chakra-ui/react";
import { Card } from './Components/Card';
import { useDispatch, useSelector } from "react-redux"
import { fetchActivities } from "../../../reducers/activitiesSlice"


const ListActivities = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActivities())
    }, []);
    const data = useSelector(state => state.activities);
    const actividades = Object.values(data.entities)
    console.log(actividades);

    return (
        <Fragment>
            <Flex>
                <Heading align="center" mx={"auto"} my={5} as="h1" size="2xl">
                    <Text>
                        Listado de Actividades
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
                {actividades.map(activity => (
                    <Card
                        key={"activity " + activity.id}
                        {...activity}
                    />
                ))}
            </SimpleGrid>
        </Fragment>
    )
}

export default ListActivities
