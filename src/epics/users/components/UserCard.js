import React, { useState } from "react";
import { Stack, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { Alert } from "../../../components";

const UserCard = ({ name, email }) => {
	const [deleteIsOpen, setDeleteIsOpen] = useState(false);

	const handleDelete = () => {
		setDeleteIsOpen(true);
	};

	return (
		<SimpleGrid spacing={8} boxShadow="md" p={5}>
			<Stack spacing={1}>
				<Text fontSize="lg" fontWeight="semibold">
					{name}
				</Text>
				<Text>{email}</Text>
			</Stack>
			<Stack justify="flex-end" direction="row">
				<Button boxShadow="base">Editar</Button>
				<Button
					onClick={handleDelete}
					flex={1}
					fontSize="sm"
					rounded="md"
					bg="red.400"
					color="white"
					boxShadow="md"
					_hover={{
						bg: "red.500",
					}}
					_focus={{
						bg: "red.500",
					}}>
					Eliminar
				</Button>
				<Alert
					isOpen={deleteIsOpen}
					setIsOpen={setDeleteIsOpen}
					title="¿Desea eliminar el usuario?"
					type="error"
					confirmButtonText="Eliminar"
					hasFeedback={true}
					feedbackTitle="Usuario eliminado con exito!"
					feedbackDuration={3000}
					feedbackType="info"
				/>
			</Stack>
		</SimpleGrid>
	);
};

export default UserCard;
