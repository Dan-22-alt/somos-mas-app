import React from "react";
import { Box, Text, Image as ChakraImage} from "@chakra-ui/react";

export const Image = ({image}) => {
  return(
    <Box p='10px'>
      { image
        ? <ChakraImage
            src={image}
            h='10rem'
            objectFit="cover"
            w='100%'
          />
        : <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            h='10rem'
            boxShadow='xs'
            bg='gray.200'
          >
            <Text >
              La imagen no cargo
            </Text>
          </Box>
      }
    </Box>
  )
}
