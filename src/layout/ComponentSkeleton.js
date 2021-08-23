import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const ComponentSkeleton = () => {
  return (
    // Box da un diseño de tarjeta
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={5} spacing="5" startColor="yellow.200" endColor="blue.200" />
    </Box>
  );
};

export default ComponentSkeleton;
