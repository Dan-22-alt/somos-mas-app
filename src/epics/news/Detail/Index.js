import React, {useEffect, useState} from 'react'
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
  } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Title from '../../../components/Title';
import {getNewsById} from "../../../services/newsService"


const Index = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    //console.log(data)
    useEffect(() => {
        getNewsById(id).then(r => setData(r.data))
    }, []);
   
    
    return (
        <Container maxW={'5xl'} py={12}>
            <Title title={`Detalle novedad`} ></Title>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Novedad: {data.id}
                    </Text>
                    <Heading>{data.name}</Heading>
                    <Text color={'gray.500'} fontSize={'lg'} align={"justify"}>
                        {data.content}
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={data.image}
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>

    )
}

export default Index
