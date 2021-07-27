import { Avatar, Box, Button, Center, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const MemberCard = ({ name, image, id }) => {
  return (
    <Center py={6}>
      <Box w="full" bg="white" boxShadow="lg" rounded="base" p={6} textAlign="center">
        <Avatar size="xl" src={image} alt="Avatar Alt" mb={4} pos="relative" />
        <Heading fontSize="2xl" fontFamily="body">
          {name}
        </Heading>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            color="white"
            bg="red.500"
            _hover={{
              bg: 'red.600',
            }}
          >
            Eliminar
          </Button>
          <Button
            flex={1}
            bg="primary.400"
            color="white"
            _hover={{
              bg: 'primary.300',
            }}
          >
            Editar
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default MemberCard;
