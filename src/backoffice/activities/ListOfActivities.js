import React, { useEffect, useState } from 'react';
import { SimpleGrid } from "@chakra-ui/react"
import { Activity } from './Activity'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerActividadesAction } from '../../services/activitiesService';

export const ListOfActivities = () => {
  const dispatch = useDispatch();


  const [activities, setActivities] = useState({
    loading: true, res: [], error: ''
  })

  const deleteItem = id => setActivities(prevState =>
    ({...prevState, res: prevState.res.filter(item => item.id !== id)}))

  useEffect( ()=> {
      // Consultar la api
      const cargarActividades = () => dispatch( obtenerActividadesAction () );
      cargarActividades();
      // eslint-disable-next-line
  }, []);

  return(
    <SimpleGrid
      my='50px'
      minChildWidth="350px"
      mt='150px'
      justifyItems='center'
      spacing="40px"
      mx={[0, 5, 10, 30]}
    >
      {activities?.res.map( activity =>
        <Activity
          key={'activity ' + activity.id}
          deleteItem={deleteItem}
          {...activity}
        />
      )}
    </SimpleGrid>
  )
}
