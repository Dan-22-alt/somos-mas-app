import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleGrid, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../../../layout/Spinners';

import { Card } from '../../../components/Card';
import { ErrorMsg } from '../../../components/Error/ErrorMsg';

import { fetchActivities, activitiesSelectors, deleteActivity } from '../../../reducers/activitiesSlice';
import { obtenerActividadID } from './../../../services/activitiesService';

export const ListOfActivities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allActivities = useSelector(activitiesSelectors.selectAll);
  const actStatus = useSelector((state) => state.activities.status);

  const toast = useToast()
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
    toast({
        title: 'Actividad Eliminada',
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
    history.push('/backoffice/activities');
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const conditionalList = (state, allActivities) => {
    switch (state) {
      case 'idle':
        return '';
      case 'loading':
        return <Spinner />;
      case 'succeeded':
        return allActivities.map((activity) => (
          <Card key={'activity ' + activity.id} handleDelete={handleDelete} handleEdit={handleEdit} {...activity} />
        ));
      default:
        return <ErrorMsg text="Hubo un error al cargar el listado" />;
    }
  };

  return (
    <SimpleGrid my="50px" minChildWidth="350px" mt={20} justifyItems="center" spacing="40px" mx={[0, 5, 10, 30]}>
      {conditionalList(actStatus, allActivities)}
    </SimpleGrid>
  );
};
