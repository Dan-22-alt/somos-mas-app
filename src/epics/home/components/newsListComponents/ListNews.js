import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button, SimpleGrid } from '@chakra-ui/react';

import { Card } from './Card';
import { ObtenerNovedades } from '../../../../reducers/newsBackofficeReducer';
import { ConditionalRender } from '../../../../components/Error/ErrorMsg';

export const ListNews = ({ title }) => {
  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => state.news);

  const List = () => (
    <SimpleGrid mb={10} spacing={10} columns={[1, 2, 2, 4]}>
      {news.slice(0, 4).map((data, i) => (
        <Card key={data.name + i} {...data} />
      ))}
    </SimpleGrid>
  );

  useEffect(() => {
    if (status === 'idle') dispatch(ObtenerNovedades());
  }, [status, dispatch]);

  return (
    <Box mb={['5rem', '10.625rem']}>
      <Text as="h2" fontSize="4xl" textAlign="center" fontWeight="bold" color="primary.400" mb={12}>
        {title}
      </Text>

      {ConditionalRender(status, List, 'No se pudieron cargar las imagenes')}

      <Box mt="3rem" mx="auto" width="fit-content">
        <Link to="/novedades">
          <Button bg="primary.400" color="white" _hover={{ bg: 'primary.500' }}>
            Ver todas
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
