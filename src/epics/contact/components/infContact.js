import { Box, Button, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Spinner from '../../../layout/Spinners.js';
import { getContact } from '../../../services/contactService';

const IMAGE = 'https://cdn.discordapp.com/attachments/854123246759968773/858030522151731220/unknown_2.png';

const InfoContact = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getContact().then((r) => setData(r.data[0]));
  }, []);

  return (
    <Stack spacing={4}>
      {data.name ? (
        <Center>
          <Box maxW={'330px'} w={'full'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
            <Stack textAlign={'center'} p={6} align={'center'}>
              <Text fontSize={'sm'} fontWeight={500} p={2} px={3} color={'green.500'} rounded={'full'}>
                {data.name}
              </Text>
            </Stack>

            <Box px={6} py={10}>
              <Box rounded={'lg'} mt={-12} pos={'relative'} justifyContent="center" alignItems="center">
                <Image rounded={'lg'} height={125} width={282} src={IMAGE} />
              </Box>
              <Stack pt={6} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} p={3} px={4}>
                  {data.email}
                </Heading>
              </Stack>
              <Button
                w={'full'}
                colorScheme={'facebook'}
                leftIcon={<FaFacebook />}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
              ></Button>

              <Button
                mt={5}
                w={'full'}
                colorScheme={'messenger'}
                leftIcon={<SiLinkedin />}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
              ></Button>
            </Box>
          </Box>
        </Center>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </Stack>
  );
};

export default InfoContact;
