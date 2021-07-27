import { Box, Button, Center, Container, SimpleGrid, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../../../components/Card';
import { deleteNews } from '../../../services/newsService';
import { sortDate } from '../../../utils/sortDate';

import { ObtenerNovedades } from '../../../reducers/newsBackofficeReducer';

const ComponentScreenListOfNews = () => {
  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle') dispatch(ObtenerNovedades());
  }, [status, dispatch]);

  const history = useHistory();
  const toast = useToast();

  const handleEdit = (id) => {
    history.push(`/backoffice/news/${id}/edit`);
  };

  const handleDelete = (id) => {
    deleteNews(id)
      .then((r) => {
        toast({
          title: 'Novedad eliminada.',
          status: 'success',
        });
        window.location.reload();
      })
      .catch((e) => {
        toast({
          title: 'Ocurrio un error al eliminar la novedad.',
          status: 'error',
        });
      });
  };

  return (
    <Container marginTop={12}>
      <Box mb={10}>
        <Link to="/backoffice/news/create">
          <Button bg="primary.400" _hover={{ bg: 'primary.300' }} color="white">
            Crear Novedad
          </Button>
        </Link>
      </Box>
      <SimpleGrid columns={{ xl: 4, lg: 3, md: 2, base: 1 }} spacing={10} mb={24}>
        {news.map((n) => (
          <Card
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            {...n}
            key={n.id}
            description={sortDate(n.created_at)}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ComponentScreenListOfNews;
