import React from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

const Contact = () => {
    return ( 
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
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
                Contact Pages
              </Text>
              <br />{' '}
              <Text color={' #9AC9FB'} as={'span'}>
                Pagina de Contactos
              </Text>{' '}
            </Heading>
          </Stack>
        </Flex>
      </Stack>
    
    );
}
 
export default Contact;