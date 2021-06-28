import React, { useState } from "react";

import { Box, Button, Container } from "@chakra-ui/react";
import { Alert } from "../components";

const ComponentNewsBox = () => {
	const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);

	const handleDelete = () => {
		setDeleteAlertIsOpen(true);
	};

	return (
		<>
			<Box
				bmaxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				borderColor="blue.300"
				overflow="hidden"
				w="58%"
				h="26vh"
				d="flex"
				flexDirection="row"
				marginBottom="2.5%">
				<Box
					h="100%"
					w="26%"
					d="flex"
					alignItems="center"
					borderWidth="1px">
					Imagen de la novedad
				</Box>
				<Container>
					<Box
						d="flex"
						flexDirection="column"
						w="78%"
						h="100%"
						justifyContent="space-around">
						<Box
							mt="1"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated>
							Nombre de la novedad
						</Box>
						<Box as="span" color="gray.600" fontSize="sm">
							Fecha de creacion: 24/06/2021
						</Box>
						<Box>
							<Box d="flex" justifyContent="space-between" w="50%">
								<Button colorScheme="blue">Editar</Button>
								<Button onClick={handleDelete} colorScheme="red">
									Eliminar
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
			<Alert
				isOpen={deleteAlertIsOpen}
				setIsOpen={setDeleteAlertIsOpen}
				type="error"
				title="¿Está seguro que desea eliminar esta novedad?"
				confirmButtonText="Eliminar"
			/>
		</>
	);
};

export default ComponentNewsBox;
