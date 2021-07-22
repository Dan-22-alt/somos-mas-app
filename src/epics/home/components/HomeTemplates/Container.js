import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Image } from "./Image";

export const Container = ({arrOfImage}) => (
  <SimpleGrid
    spacing={[2, 10]}
    columns={[1, 2, 2, 4]}
    px={['0.5rem', '1rem', '2.5rem', '5.5rem']}
  >
    {arrOfImage.map( data => <Image {...data}/>)}
  </SimpleGrid>
)
