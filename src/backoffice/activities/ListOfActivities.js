import React, { useEffect, useState } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { Activity } from "./Activity";
import { useHistory } from "react-router-dom";
import { createActivity, deleteActivity } from "../../services/activityService";

export const ListOfActivities = () => {
  const [activities, setActivities] = useState({
    loading: true,
    res: [],
    error: "",
  });
  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);
  const toast = useToast();
  let history = useHistory();

  const deleteItem = (id) => {
    setDeleteAlertIsOpen(true);
    deleteActivity(id)
      .then(() => {
        toast({
          title: "Actividad eliminada.",
          status: "success",
        });
        window.location.reload();
        history.push("/backoffice/activities");
      })
      .catch((e) => {
        toast({
          title: "Ocurrio un error al eliminar la actividad.",
          status: "error",
        });
      });
  };

  useEffect(() => {
    fetch("http://ongapi.alkemy.org/api/activities")
      .then((r) => r.json())
      .then((r) =>
        setActivities((prevState) => ({
          ...prevState,
          res: r.data,
          loading: false,
        }))
      )
      .catch((error) =>
        setActivities((prevState) => ({ ...prevState, error, loading: false }))
      );
  }, []);

  return (
    <SimpleGrid
      my="50px"
      minChildWidth="350px"
      mt="150px"
      justifyItems="center"
      spacing="40px"
      mx={[0, 5, 10, 30]}
    >
      {activities?.res.map((activity) => (
        <Activity
          key={"activity " + activity.id}
          deleteItem={deleteItem}
          {...activity}
        />
      ))}
    </SimpleGrid>
  );
};
