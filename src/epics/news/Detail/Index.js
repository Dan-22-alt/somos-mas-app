import React, { useEffect, useState } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Title from '../../../components/Title';
import { getNewsById } from '../../../services/newsService';
import {AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Description from './../../nosotros/components/Description';

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const imagen = 'https://image.shutterstock.com/image-photo/text-sign-showing-update-motivational-600w-1326093911.jpg';
  //console.log(data)
  useEffect(() => {
    getNewsById(id).then((r) => setData(r.data));
  }, [id]);

  return (
    <Container maxW={'5xl'} py={12}>
      <Title title={`Detalle de Novedad`} image={imagen}></Title>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={{ base: 20, md: 8 }}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Novedad: {data.id}
          </Text>
          <Heading>{data.name}</Heading>
          <Description color={'gray.500'} fontSize={'lg'} align={'justify'} text={data.content} />
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}></Stack>
          <Link to={`/novedades`}>
            <Button
              rightIcon={<AiOutlineArrowLeft />}
              textTransform={'uppercase'}
              colorScheme="teal" 
              fontWeight={600}
              fontSize={'xs'}
              variant="outline"
              p={2}
              alignSelf={'flex-end'}
              rounded={'md'}
            >
              Volver
            </Button>
          </Link>
        </Stack>
        <Flex>
          <Image rounded={'md'} alt={'feature image'} src={data.image} objectFit={'cover'} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
