import React, { useEffect, useState } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { Activity } from "./Activity";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import {
	borrarActividadAction,
	obtenerActividadesAction,
} from "../../../services/activitiesService";

export const ListOfActivities = () => {
	const [activities, setActivities] = useState({
		loading: true,
		res: [],
		error: "",
	});
	const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);
	const toast = useToast();
	let history = useHistory();

	const deleteItem = id => {
		setDeleteAlertIsOpen(true);
		borrarActividadAction(id)
			.then(() => {
				toast({
					title: "Actividad eliminada.",
					status: "success",
				});
				window.location.reload();
				history.push("/backoffice/activities");
			})
			.catch(e => {
				toast({
					title: "Ocurrio un error al eliminar la actividad.",
					status: "error",
				});
			});
	};

	const dispatch = useDispatch();

	useEffect(() => {
		// Consultar la api
		const cargarActividades = () => dispatch(obtenerActividadesAction());
		cargarActividades();
		// eslint-disable-next-line
	}, []);

	return (
		<SimpleGrid
			my="50px"
			minChildWidth="350px"
			mt="150px"
			justifyItems="center"
			spacing="40px"
			mx={[0, 5, 10, 30]}>
			{activities?.res.map(activity => (
				<Activity
					key={"activity " + activity.id}
					deleteItem={deleteItem}
					{...activity}
				/>
			))}
		</SimpleGrid>
	);
};
