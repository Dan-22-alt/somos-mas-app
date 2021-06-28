import React, { useEffect, useState } from 'react';
import { SimpleGrid } from "@chakra-ui/react"
import { Activity } from './Activity'

export const ListOfActivities = () => {
  const [activities, setActivities] = useState({
    loading: true, res: [], error: ''
  })
  useEffect(() => {
    setActivities(prevState => ({...prevState, res: [1, 2, 3, 4, 5, 6]}))
  }, [])

  return(
    <SimpleGrid
      my='50px'
      minChildWidth="400px"
      spacing="40px"
      mx={[2, 5, 10, 30]}
    >
      { activities?.res.map( activity => <Activity {...activity} /> ) }
      <Activity />
    </SimpleGrid>
  )
}
