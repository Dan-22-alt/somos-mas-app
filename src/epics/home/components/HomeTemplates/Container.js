import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Image } from "./Image";

export const Container = ({arrOfImage}) => (
  <SimpleGrid
    spacing={[2, 10]}
    columns={[2, null, 4, 4]}
    px={['0px', '2.5rem', '2.5rem', '7.5rem']}
  >
    {arrOfImage.map( data => <Image {...data}/>)}
  </SimpleGrid>
)
