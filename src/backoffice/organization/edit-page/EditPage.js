import React from "react";
import EditForm from "./components/EditForm";
import { Container, Text } from "@chakra-ui/react";

const EditPage = () => {
	return (
		<Container py={8}>
			<Text fontWeight="semibold" fontSize="3xl" color="teal" mb={10}>
				Actualizar datos de la organización
			</Text>
			<EditForm />
		</Container>
	);
};

export default EditPage;
