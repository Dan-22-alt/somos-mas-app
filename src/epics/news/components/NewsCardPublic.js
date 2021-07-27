import React from 'react';
import { Box, Image, Text, Heading, Stack, useColorModeValue, Badge } from '@chakra-ui/react';
//import { SmartPicture } from './../../../components/Card/SmartPicture';
//import Description from './../../nosotros/components/Description';

const NewsCardPublic = ({ data }) => {
  console.log(data)
  return (
    <Box
      mt={6}
      role={'group'}
      p={8}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
      <Box
        rounded={'lg'}
        mt={-10}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${data.image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(50px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={data.image}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          Id: {data.id}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {data.name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Badge rounded="full" px="2" fontSize="1em" colorScheme="teal">
                Ver más
              </Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewsCardPublic;
