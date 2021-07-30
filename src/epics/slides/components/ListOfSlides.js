import React, { useEffect } from 'react';
import { Box, 
  Button, 
  Center, 
  Flex, 
  Heading, 
  SimpleGrid, 
  Container, 
  useToast, 
  Stack, 
  Text, 
  useBreakpointValue 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slide from './Slide';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { listSlides, deleteSlide, defaultOk } from '../../../reducers/slicesReducer';

const ListOfSlides = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const slideState = useSelector((state) => state.slides);
  const { slides, status } = slideState;
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') dispatch(listSlides());
    if (status === 'succeeded-delete') {
      toast({
        title: 'Slide eliminado.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      dispatch(defaultOk())
    }
    if (status === 'failed') {
      toast({
        title: 'Ocurrio un error al eliminar el slide.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      dispatch(defaultOk())
    }
  }, [status, dispatch, toast]);

  const handleEdit = (id) => {
    history.push(`/backoffice/slides/${id}`);
  };

  const handleDelete = (id) => dispatch(deleteSlide(id))

  return (
    <Flex>
      <Container >
        <Center flexDirection="column" marginTop="3vh">
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
                      bg: '#9AC9FB',
                      zIndex: -1,
                    }}
                  >
                    Slides
                  </Text>
                  <br />{' '}
                  <Text color={' #9AC9FB'} as={'span'}>
                    ONG
                  </Text>{' '}
                </Heading>
              </Stack>
            </Flex>
          </Stack>
          <Box mb={10}>
            <Link to="/backoffice/slides/create">
              <Button type="submit" variant="solid" colorScheme="teal">
                Crear Slide
              </Button>
            </Link>
          </Box>
          <SimpleGrid
            d="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            my="50px"
            minChildWidth="350px"
            mt="90px"
            justifyItems="center"
            spacing="40px"
            mx={[0, 5, 10, 30]}
          >
            {slides.map((s) => (
              <Slide
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                {...s}
                key={s.id}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Container>
    </Flex>
  );
};

export default ListOfSlides;
