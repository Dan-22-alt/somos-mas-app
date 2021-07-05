import React from 'react'
// import { Link } from 'react-router-dom'
import { SimpleGrid, Center, Link } from '@chakra-ui/react'
import Slide from "./Slide"

const ListOfSlides = () => {
    return (
        <Center d="flex" flexDirection="column">
            <Link to="/backoffice/slides/create">Create new slide</Link>
            <h1>List of slides</h1>
            <SimpleGrid
            d="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            my='50px'
            minChildWidth="350px"
            mt='150px'
            justifyItems='center'
            spacing="40px"
            mx={[0, 5, 10, 30]}
        >
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
        </SimpleGrid>
        </Center>
    )
}

export default ListOfSlides
