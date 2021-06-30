import React, { useEffect, useState } from 'react';
import { SimpleGrid } from "@chakra-ui/react"
import { Activity } from './Activity'

export const ListOfActivities = () => {
  const [activities, setActivities] = useState({
    loading: true, res: [], error: ''
  })

  const deleteItem = id => setActivities(prevState =>
    ({...prevState, res: prevState.res.filter(item => item.id !== id)}))

  useEffect(() => {
    fetch('http://ongapi.alkemy.org/api/activities')
      .then(r => r.json())
      .then(r => setActivities(prevState =>
        ({...prevState, res: r.data, loading: false})))
      .catch( error => setActivities(prevState =>
        ({...prevState, error, loading: false})))
  }, [])

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
