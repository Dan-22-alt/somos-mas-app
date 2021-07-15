import React from "react";
import {
	Flex,
	Heading,
	Input,
	Button,
	Stack,
	Box,
	Avatar,
	FormControl,
	FormLabel,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApiFetch } from "../../services/ApiService";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../reducers/authReducer";

const FormRegister = () => {
	const dispatch = useDispatch();
	// Formulario y validación con formik y Yup
	const formik = useFormik({
		initialValues: {
			nombre: "",
			apellido: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			nombre: Yup.string().required("El nombre es Obligatorio"),
			apellido: Yup.string().required("el Apellido es Obligatorio"),
			email: Yup.string()
				.email("El email no es válido")
				.required("El Email es Obligatorio"),
			password: Yup.string()
				.required("Ingrese su contraseña")
				.min(6, "El password debe contener al menos 6 caracteres"),
		}),
		onSubmit: valores => {
			const values = {
				name: valores.nombre,
				email: valores.email,
				password: valores.password,
			};
			dispatch(signUpUser(values));
		},
	});

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			backgroundColor="gray.200"
			justifyContent="center"
			alignItems="center">
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center">
				<Avatar bg="teal.500" />
				<Heading color="teal.400">Registro</Heading>
				<Box minW={{ base: "90%", md: "468px" }}>
					<form onSubmit={formik.handleSubmit}>
						<Stack
							spacing={4}
							p="1rem"
							backgroundColor="whiteAlpha.900"
							boxShadow="md">
							<FormControl>
								{formik.touched.nombre && formik.errors.nombre ? (
									<Alert justifyContent="center" status="error">
										<AlertIcon />
										{formik.errors.nombre}
									</Alert>
								) : null}
								<FormLabel>Nombre</FormLabel>
								<Input
									type="text"
									placeholder="Maquinola"
									id="nombre"
									value={formik.values.nombre}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</FormControl>
							<FormControl mt={2}>
								{formik.touched.apellido && formik.errors.apellido ? (
									<Alert justifyContent="center" status="error">
										<AlertIcon />
										{formik.errors.apellido}
									</Alert>
								) : null}
								<FormLabel>Apellido</FormLabel>
								<Input
									type="text"
									placeholder="Prueba"
									id="apellido"
									value={formik.values.apellido}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</FormControl>
							<FormControl mt={2}>
								{formik.touched.email && formik.errors.email ? (
									<Alert justifyContent="center" status="error">
										<AlertIcon />
										{formik.errors.email}
									</Alert>
								) : null}
								<FormLabel>Email</FormLabel>
								<Input
									type="email"
									placeholder="Mquinola@maquinola.com"
									id="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</FormControl>
							<FormControl mt={2}>
								{formik.touched.password && formik.errors.password ? (
									<Alert justifyContent="center" status="error">
										<AlertIcon />
										{formik.errors.password}
									</Alert>
								) : null}
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									placeholder="*******"
									id="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</FormControl>
							<Button
								borderRadius={0}
								type="submit"
								variant="solid"
								colorScheme="teal"
								width="full">
								Registro
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
};

export default FormRegister;
