import { Box, Avatar, Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Dasboard = ({name, image}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" w={[350]} pb="10px" boxShadow="lg" p="1rem" m="2" 
    _hover={{
      bg: 'gray.200',
    }}
    _focus={{
      bg: 'green.500',
    }}
    >
    <Box>
      <Box
        mt="1"
        fontWeight="semibold"
        fontSize="20px"
        color="primary.200"
        as="h4"
        textAlign="center"
        my="8px"
        lineHeight="tight"
        isTruncateds
      >
        {name}
      </Box>
      <Box
        my={'auto'}
        color={useColorModeValue('gray.800', 'gray.200')}
        alignContent={'center'}>
        <Avatar size="xl" src={image} alt="Avatar Alt" mb={4} pos="relative" />
      </Box>
      <Button colorScheme="teal" mt="5" size="sm">
      ir
      </Button>
    </Box>
  </Box>
  );
};

export default Dasboard;
