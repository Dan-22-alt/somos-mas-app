import React, {useEffect} from 'react';
import { 
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Container,
  useToast,
  Stack,
  Text,
  useBreakpointValue, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MemberCard from './MemberCard';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { listMembers, deleteMember, defaultOk } from '../../../reducers/membersReducer';

const MemberList = () => {

  const dispatch = useDispatch();
  const toast = useToast();
  const membersState = useSelector((state) => state.members);
  const { members, status } = membersState;
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') dispatch(listMembers());
    if (status === 'succeeded-delete') {
      toast({
        title: 'Miembro eliminado!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      dispatch(defaultOk())
    }
    if (status === 'failed') {
      toast({
        title: 'Ocurrio un error al eliminar el miembro.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      dispatch(defaultOk())
    }
  }, [status, dispatch, toast]);

  const handleEdit = (id) => {
    history.push(`/backoffice/members/edit/${id}`);
  };

  const handleDelete = (id) => dispatch(deleteMember(id))

  return (
      <Container maxW="container.xl" my={7}>
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
                    Miembros
                  </Text>
                  <br />{' '}
                  <Text color={' #9AC9FB'} as={'span'}>
                    ONG
                  </Text>{' '}
                </Heading>
              </Stack>
            </Flex>
          </Stack>
        <Link to="/backoffice/members/create">
          <Button bg="primary.400" color="white" _hover={{ bg: 'primary.300' }}>
            Nuevo miembro
          </Button>
        </Link>
        <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} spacing={8} my={10}>
          {members.map((member) => (
            <MemberCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            {...member}
            key={member.id}
            />
          ))}
        </SimpleGrid>
      </Container>
  );
};

export default MemberList;
