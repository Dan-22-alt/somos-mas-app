import { Box, Avatar, Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Dashboard = ({ title, image }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      w={{ base: 250 }}
      pb="10px"
      boxShadow="lg"
      p="1rem"
      m="2"
      bg="white"
      _hover={{
        bg: 'gray.50',
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
          {title}
        </Box>
        <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
          <Avatar size="xl" src={image} alt="Avatar Alt" mb={4} pos="relative" />
        </Box>
        <Button colorScheme="teal" mt="5" size="sm">
          Ir
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
