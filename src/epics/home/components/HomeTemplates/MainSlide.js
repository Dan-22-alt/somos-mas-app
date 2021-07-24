import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const data = {
  title: 'Esto es un ejemplo',
  description: 'Esto es una descripción',
  src: '/images/tractor.jpeg',
};

export const MainSlide = () => {
  const color = 'gray.50';

  return (
    <Box
      h={['10rem', '15rem', '17.5rem', '20rem']}
      bg="cyan.100" // borrar
      objectFit="cover"
      backgroundImage={data?.src}
      backgroundSize="cover"
    >
      <Stack textAlign="center" direction="column" w="100%" h="100%" justifyContent="center">
        <Text as="h2" fontSize={['1.5rem', '3rem']} color={color}>
          {data?.title}
        </Text>
        <Text as="h2" fontSize={['1rem', '2rem']} color={color}>
          {data?.description}
        </Text>
      </Stack>
    </Box>
  );
};
