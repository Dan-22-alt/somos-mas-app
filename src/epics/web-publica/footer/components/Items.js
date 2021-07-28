import { Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Items = ({ titulo, array }) => {
  return (
    <Stack mt={0} px={0} align={'center'} fontSize={['md', 'lg', 'xl']}>
      <Text fontWeight="bold" fontSize={['md', 'lg', 'xl']} mb={2}>
        {titulo}
      </Text>
      <SimpleGrid columns={['1', '2']} spacing={2}></SimpleGrid>
    </Stack>
  );
};

export default Items;
