import { Box, Image as ChakraImage, Text } from '@chakra-ui/react';
import React from 'react';

export const Image = ({ image }) => {
  const hight = ['12rem', '10rem', '12rem', '10rem'];
  return (
    <Box>
      {image ? (
        <ChakraImage src={image} h={hight} objectFit="cover" w="100%" />
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" h={hight} boxShadow="xs" bg="gray.200">
          <Text>La imagen no cargo</Text>
        </Box>
      )}
    </Box>
  );
};
