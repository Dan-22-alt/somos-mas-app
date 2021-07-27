import { Button, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock-data/membersData';
import MemberCard from './MemberCard';

const MemberList = () => {
  return (
    <>
      <Container maxW="container.xl" my={7}>
        <Link to="/backoffice/members/create">
          <Button bg="primary.400" color="white" _hover={{ bg: 'primary.300' }}>
            Nuevo miembro
          </Button>
        </Link>
        <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} spacing={8} my={10}>
          {mockData.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default MemberList;
