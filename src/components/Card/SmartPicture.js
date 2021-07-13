import React from "react";
import { Box, Image } from "@chakra-ui/react";

export const SmartPicture = ({src}) => (
  src ?
    <Image
      borderRadius="lg"
      src={src}
      objectFit="cover"
      h="350px"
      m='auto'
      p="3px"
    />
      :
    <Box
      borderRadius="lg"
      bg="purple.100"
      h="350px"
      p="3px"
    >
      Hola
    </Box>
)
