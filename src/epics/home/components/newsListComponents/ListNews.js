import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Spinner } from "../../../../layout/Spinners";
import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export const ListNews = ({ title, state }) => {
    return (
        <Box
      mb={['5rem', '10.625rem']}
    >
      <Text
        as='h2'
        fontSize={['1.5rem', '2rem']}
        textAlign='center'
        mb={['1rem', '3.25rem']}
      >
        {title}
      </Text>
      { state.loading
        ? <Spinner minH='10rem' />
        : <SimpleGrid
        spacing={[2, 10]}
        columns={[1, 2, 2, 4]}
        px={['0.5rem', '1rem', '2.5rem', '5.5rem']}
    >
        {state.res.map(data => <Card {...data} />)}
    </SimpleGrid>
      }
    </Box>
        
    )
}