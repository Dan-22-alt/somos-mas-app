import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

import  Alert from "../alert/Alert";

export const ButtonsCard = ({id, deleteItem}) => {
	const handleEdit = () => console.log(id, "editing");

	const [deleteIsOpen, setDeleteIsOpen] = useState(false);

	const handleDelete = () => { setDeleteIsOpen(true) }

	return (
		<Box display="flex" justifyContent="center">
			<Button
				colorScheme="cyan"
				color="white"
				onClick={handleEdit}
				m="2px">
				Edit
			</Button>
			<Button m="2px" onClick={handleDelete} colorScheme="red">
				Delete
			</Button>
			<Alert
				isOpen={deleteIsOpen}
				setIsOpen={setDeleteIsOpen}
				title="¿Desea eliminar esta actividad?"
				type="error"
				onConfirm={() => deleteItem(id)}
			/>
		</Box>
	);
}
