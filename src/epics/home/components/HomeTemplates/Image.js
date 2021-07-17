import React from "react";
import { Box, Text, Image as ChakraImage} from "@chakra-ui/react";

export const Image = ({src}) => (
  <Box p='10px'>
    { src
      ? <ChakraImage src={src} />
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
