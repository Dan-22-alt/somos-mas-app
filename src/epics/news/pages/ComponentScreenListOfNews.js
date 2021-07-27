import { Box, Button, Center, Container, SimpleGrid, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { deleteNews, getNews } from '../../../services/newsService';
import { sortDate } from '../../../utils/sortDate';

const ComponentScreenListOfNews = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const toast = useToast();

  const handleEdit = (id) => {
    history.push(`/backoffice/news/${id}/edit`);
  };

  useEffect(() => {
    getNews().then((r) => setData(r.data));
  }, []);

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

  // const sortData = (date) => date.replace(/(\d{4})-(\d{2})-(\d{2})(.*)/, '$3-$2-$1');

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
        {data.map((n) => (
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
