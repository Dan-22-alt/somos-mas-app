import React, { useState, useEffect } from "react";
import EditForm from "../edit-page/components/EditForm";
import { Container, Text } from "@chakra-ui/react";
import { getData } from "../../../services/organizationService";
import ComponentSkeleton from "../../../layout/ComponentSkeleton";

const EditPage = () => {
	const getDatos = getData();
	const [data, setData] = useState({});

	useEffect(() => {
		if (getDatos.res?.data) setData(getDatos.res.data[0]);
	}, [getDatos]);
	return (
		<Container py={8}>
			<Text fontWeight="semibold" fontSize="3xl" color="teal" mb={10}>
				Actualizar datos de la organización
			</Text>
			{data.name ? <EditForm datos={data} /> : <ComponentSkeleton />}
		</Container>
	);
};

export default EditPage;
