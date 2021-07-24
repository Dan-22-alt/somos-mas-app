import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const SmartPicture = ({ src }) =>
  src ? (
    <Image borderRadius="lg" src={src} objectFit="cover" h="350px" m="auto" p="3px" />
  ) : (
    <Box borderRadius="lg" display="flex" bg="purple.100" h="350px" alignItems="center" justifyContent="center" p="3px">
      <Text as="p">No existe esta imagen</Text>
    </Box>
  );
