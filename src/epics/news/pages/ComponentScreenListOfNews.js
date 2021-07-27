import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Center, Container, SimpleGrid, useToast } from '@chakra-ui/react';

import { Card } from '../../../components/Card';
import { deleteNews } from '../../../services/newsService';
import { sortDate } from '../../../utils/sortDate';

import { ObtenerNovedades } from '../../../reducers/newsBackofficeReducer';

const ComponentScreenListOfNews = () => {

  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle') dispatch(ObtenerNovedades())
  }, [status, dispatch])

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
    <Container maxW="container.xxl" marginTop="1%">
      <Center>
        <Link to="/backoffice/news/create">
          <Button colorScheme="blue">Crear Novedad</Button>
        </Link>
      </Center>
      <Center marginTop="1%">
        <h1>Ultimas novedades</h1>
      </Center>
      <SimpleGrid
        my="auto"
        minChildWidth="300px"
        mt="50px"
        justifyItems="center"
        spacing="40px"
        mx={[0, 5, 10, 30]}
        mb="10rem"
      >
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
