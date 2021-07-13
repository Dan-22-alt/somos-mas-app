import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import  Alert from "../alert/Alert";

export const ButtonsCard = ({id, handleDelete, handleEdit}) => {
	const [deleteIsOpen, setDeleteIsOpen] = useState(false);

	return (
		<Box display="flex" justifyContent="center">
			<Button
				colorScheme="cyan"
				color="white"
				onClick={()=>handleEdit(id)}
				m="2px">
				Edit
			</Button>
			<Button m="2px" onClick={() => setDeleteIsOpen(true)} colorScheme="red">
				Delete
			</Button>
			<Alert
				isOpen={deleteIsOpen}
				setIsOpen={setDeleteIsOpen}
				title="¿Desea eliminar esta actividad?"
				type="error"
				onConfirm={() => handleDelete(id)}
			/>
		</Box>
	);
}
