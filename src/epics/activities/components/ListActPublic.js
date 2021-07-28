import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';

// import { Link } from 'react-router-dom';

import CardActivityPublic from './CardActivityPublic';

import { fetchActivities, activitiesSelectors } from '../../../reducers/activitiesSlice';

const ListActPublic = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector(activitiesSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <SimpleGrid my="50px" minChildWidth="350px" mt="150px" justifyItems="center" spacing="40px" mx={[0, 5, 10, 30]}>
      {allActivities.map((activity) => (
        // <Link key={activity.id} to={`/actividades/${activity.id}`}>
            <CardActivityPublic {...activity} />
        // {/* </Link> */}
      ))}
    </SimpleGrid>
  );
};

export default ListActPublic;
