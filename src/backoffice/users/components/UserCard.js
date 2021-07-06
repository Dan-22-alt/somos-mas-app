import React from "react";
import { Stack, Button, Text, SimpleGrid } from "@chakra-ui/react";

const UserCard = ({ name, email }) => {
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
				<Button boxShadow="base" colorScheme="red">
					Eliminar
				</Button>
			</Stack>
		</SimpleGrid>
	);
};

export default UserCard;
