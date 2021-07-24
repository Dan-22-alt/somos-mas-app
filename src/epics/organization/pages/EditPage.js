import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Text } from '@chakra-ui/react';

import EditForm from '../edit-page/components/EditForm';
import ComponentSkeleton from '../../../layout/ComponentSkeleton';

const EditPage = () => {
  const data = useSelector((state) => state.organization.data);
  return (
    <Container py={8}>
      <Text fontWeight="semibold" fontSize="3xl" color="teal" mb={10}>
        Actualizar datos de la organización
      </Text>
      {data.name ? <EditForm datos={data} /> : <ComponentSkeleton />}
    </Container>
  );
};

export default EditPage;
