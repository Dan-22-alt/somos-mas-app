import React from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Box,
    Container,
    SimpleGrid,
  } from '@chakra-ui/react';

const Index = () => {
    return (
        <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: ' #9AC9FB',
                    zIndex: -1,
                  }}>
                  Novedades
                </Text>
                <br />{' '}
                <Text color={' #9AC9FB'} as={'span'}>
                  ONG
                </Text>{' '}
              </Heading>
            </Stack>
          </Flex>
        </Stack>

        
      </Box>
    
    );
}
 
export default Index;