import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { Card } from "../../../components/Card";

import {
  fetchActivities,
  activitiesSelectors,
} from "../../../reducers/activitiesSlice"

import {obtenerActividadID} from "../../../services/activitiesService"
import { sortDate } from "../../../utils/sortDate";

const ListActPublic = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allActivities = useSelector(activitiesSelectors.selectAll)

    useEffect(() => {
        dispatch(fetchActivities());

    }, [dispatch])

    const handleViews = activity => {
        console.log(activity)
        history.push(`/actividades/${activity.id}`, activity)
    }
 
    return ( 
        <SimpleGrid
            my="50px"
            minChildWidth="350px"
            mt="150px"
            justifyItems="center"
            spacing="40px"
            mx={[0, 5, 10, 30]}
        >
            {allActivities.map(activity => (
                <Card
                    key={activity.id}
                    activity={activity}
                    handleViews={handleViews}
                    {...activity}

                />
            ))}
        </SimpleGrid>
     );
}
 
export default ListActPublic;