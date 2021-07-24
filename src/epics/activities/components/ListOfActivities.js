import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { activitiesSelectors, deleteActivity, fetchActivities } from '../../../reducers/activitiesSlice';

export const ListOfActivities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allActivities = useSelector(activitiesSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
    history.push('/backoffice/activities');
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <SimpleGrid my="50px" minChildWidth="350px" mt="150px" justifyItems="center" spacing="40px" mx={[0, 5, 10, 30]}>
      {allActivities.map((activity) => (
        <Card key={'activity ' + activity.id} handleDelete={handleDelete} handleEdit={handleEdit} {...activity} />
      ))}
    </SimpleGrid>
  );
};
