import React, { useEffect, useState } from 'react';
import { SimpleGrid } from "@chakra-ui/react"
import { Activity } from './Activity'

export const ListOfActivities = () => {
  const [activities, setActivities] = useState({
    loading: true, res: [], error: ''
  })

useEffect(() => {
    fetch('http://ongapi.alkemy.org/api/activities')
      .then(r => r.json())
      .then(r => setActivities(prevState =>
        ({...prevState, res: r.data, loading: false})))
      .catch( error => setActivities(prevState =>
        ({...prevState, error, loading: false}) ))
  }, [])

  console.log(activities)
  return(
    <SimpleGrid
      my='50px'
      minChildWidth="400px"
      spacing="40px"
      mx={[2, 5, 10, 30]}
    >
      {activities?.res.map(
        activity => <Activity {...activity} />
      )}
      <Activity />
    </SimpleGrid>
  )
}
