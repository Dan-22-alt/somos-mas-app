import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const SmartPicture = ({ src }) =>
  src ? (
    <Image borderRadius="lg" src={src} objectFit="cover" h={64} m="auto" />
  ) : (
    <Box borderRadius="lg" display="flex" bg="purple.100" h={64} alignItems="center" justifyContent="center" p="3px">
      <Text as="p">No existe esta imagen</Text>
    </Box>
  );
