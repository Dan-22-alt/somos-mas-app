import { Button, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide';

const ListOfSlides = () => {
  return (
    <Flex backgroundColor="gray.200">
      <Center flexDirection="column" marginTop="3vh">
        <Link to="/backoffice/slides/create">
          <Button borderRadius="20px" type="submit" variant="solid" colorScheme="teal">
            Create New Slide
          </Button>
        </Link>
        <Heading paddingTop="4vh">Listado de Slides</Heading>
        <SimpleGrid
          d="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          my="50px"
          minChildWidth="350px"
          mt="90px"
          justifyItems="center"
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
    </Flex>
  );
};

export default ListOfSlides;
