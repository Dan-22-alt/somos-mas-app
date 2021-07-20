import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

// aca va una imagen por defecto
const imageDefault = "imagen";

//este componente recibe el titulo, la imagen
const Title = ({ title = "Título", image = imageDefault }) => {
  return (
    <Box
      position="relative"
      alignItems={"center"}
      height="200px"
      display="flex"
      width="100%"
      overflow="hidden"
      justifyContent="center"
    >
      <Heading as="h1" zIndex="9999" fontSize="7xl">
        {title}
      </Heading>
      <Image
        src={image ? image : imageDefault}
        alt={imageDefault}
        position="absolute"
        width="100%"
        style={{ filter: "blur(4px)" }}
      />
    </Box>
  );
};

export default Title;
