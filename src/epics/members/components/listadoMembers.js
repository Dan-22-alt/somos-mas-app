import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Alert } from '../../../components';

const ListMembers = () => {
  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);

  const handleDelete = () => {
    setDeleteAlertIsOpen(true);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Center py={9}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
          >
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Lindsey James
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @lindsey_jam3s
            </Text>
            <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
              Actress, musician, songwriter and artist. PM for work inquires or{' '}
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>{' '}
              me in your posts
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                #art
              </Badge>
              <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                #photography
              </Badge>
              <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                #music
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Detalle
              </Button>
              <Button
                onClick={handleDelete}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                _hover={{
                  bg: 'yellow.500',
                }}
                _focus={{
                  bg: 'red.500',
                }}
              >
                Eliminar
              </Button>
            </Stack>
          </Box>
          <Alert
            isOpen={deleteAlertIsOpen}
            setIsOpen={setDeleteAlertIsOpen}
            type="error"
            title="¿Está seguro de eliminar este Members?"
            confirmButtonText="Eliminar"
          />
        </Center>
      </Stack>
    </Flex>
  );
};

export default ListMembers;
