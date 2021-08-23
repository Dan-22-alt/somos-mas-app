import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SimpleGrid, useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../../../components/Card';

import { sortDate } from '../../../utils/sortDate';
import { ObtenerNovedades, borrarNewsAction, defaultOk } from '../../../reducers/newsBackofficeReducer';

export const ListOfNews = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const newsState = useSelector((state) => state.news);
  const { news, status } = newsState;
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') dispatch(ObtenerNovedades());
    if (status === 'succeeded-delete') {
      toast({
        title: 'Novedad eliminada.',
        status: 'success',
      });
      dispatch(defaultOk());
    }
    if (status === 'failed') {
      toast({
        title: 'Ocurrio un error al eliminar la novedad.',
        status: 'error',
      });
      dispatch(defaultOk());
    }
  }, [status, dispatch, toast]);

  const handleEdit = (id) => {
    history.push(`/backoffice/news/${id}/edit`);
  };

  const handleDelete = (id) => dispatch(borrarNewsAction(id));

  return (
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
  );
};
