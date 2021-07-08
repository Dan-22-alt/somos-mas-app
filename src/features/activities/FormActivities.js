import React, { useState, useEffect } from "react";
import "./stylesForm.css";
import {
	Flex,
	Heading,
	Input,
	Button,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Alert,
	AlertIcon,
	Image,
	useToast,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import {
	crearNuevaActividadAction,
	editarActividadAction,
} from "../../services/activitiesService";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormActivities = ({ data }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	//llamar la funcion desde el services
	const agregarActividad = actividad =>
		dispatch(crearNuevaActividadAction(actividad));
	const editarActividad = actividad =>
		dispatch(editarActividadAction(actividad));

	const toast = useToast();
	const [isLoading, setIsLoading] = useState(true);

	const [newActividad, setNewActividad] = useState({
		id: "",
		name: "",
		image: "",
		description: "",
	});

	const { image } = newActividad;

	const [selectetdFile, setSelectedFile] = useState([]);
	const [imagenes, setImage] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		encodeFileBase64(selectetdFile[0]);

		if (imagenes) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(imagenes);
		} else if (data) {
			setPreview(data.image);
		} else {
			setPreview("/images/profileFace.svg");
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
// eslint-disable-next-line
	}, [data, selectetdFile, imagenes]);

	const encodeFileBase64 = file => {
		var reader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onload = () => {
				var Base64 = reader.result;

				setNewActividad({
					...data,
					image: Base64,
				});
			};
			reader.onerror = error => {
				console.log("error: ", error);
			};
		}
	};

	const onFileChange = e => {
		setSelectedFile(e.target.files);
		setImage(e.target.files[0]);
	};

	const formik = useFormik({
		initialValues: {
			name: data ? data.name : "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Name requerido")
				.min(6, "El nombre debe contener al menos 6 caracteres"),
		}),
		onSubmit: valores => {
			const values = {
				name: valores.name,
				description: newActividad.description,
				image: newActividad.image,
			};
			console.log(values);

			if (data) {
				editarActividad(values);
				toast({
					title: "actividad Editada",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
				// redireccionar
				history.push("/backoffice/activities");
			} else {
				agregarActividad(values);
				toast({
					title: "actividad creada",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
				// redireccionar
				history.push("/backoffice/activities");
			}
		},
	});

	return (
		<div className="SeccFormActivities">
			<Flex
				flexDirection="column"
				width="100wh"
				height="100vh"
				backgroundColor="gray.200"
				justifyContent="center"
				alignItems="center">
				{isLoading ? (
					<></>
				) : (
					<Stack
						flexDir="column"
						mb="2"
						justifyContent="center"
						alignItems="center"
						maxW="md">
						{data ? (
							<Heading color="teal.400">Editar categoria</Heading>
						) : (
							<Heading color="teal.400">Nueva categoria</Heading>
						)}
						<Box minW={{ base: "90%", md: "468px" }}>
							<form
								onSubmit={formik.handleSubmit}
								className="formActivities">
								<Stack
									spacing={4}
									p="1rem"
									backgroundColor="whiteAlpha.900"
									boxShadow="md">
									<FormControl mt={2}>
										<FormLabel>Name</FormLabel>
										<Input
											type="text"
											id="name"
											value={formik.values.name}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik.touched.name && formik.errors.name ? (
											<Alert justifyContent="center" status="error">
												<AlertIcon />
												{formik.errors.name}
											</Alert>
										) : null}
									</FormControl>

									<FormControl mt={2}>
										<FormLabel>Descripción</FormLabel>
										<CKEditor
											editor={ClassicEditor}
											data={data ? data.description : ""}
											onChange={(event, editor) => {
												const data = editor.getData();

												setNewActividad({
													...newActividad,
													description: data,
												});
											}}
										/>
										{formik.touched.description &&
										formik.errors.description ? (
											<Alert justifyContent="center" status="error">
												<AlertIcon />
												{formik.errors.description}
											</Alert>
										) : null}
									</FormControl>
									<FormControl id="image">
										<FormLabel>Imagen</FormLabel>
										<Box d="flex">
											<input
												type="file"
												name={image}
												onChange={onFileChange}
											/>
											<Image
												src={preview}
												alt="imagen"
												width="100px"
												borderRadius="10%"
												m="auto"
											/>
										</Box>
									</FormControl>
									{/* {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                                    <button type="submit">Submit</button> */}
									{data ? (
										<Button
											borderRadius={0}
											type="submit"
											variant="solid"
											colorScheme="teal"
											width="full">
											Editar
										</Button>
									) : (
										<Button
											borderRadius={0}
											type="submit"
											variant="solid"
											colorScheme="teal"
											width="full">
											Crear
										</Button>
									)}
								</Stack>
							</form>
						</Box>
					</Stack>
				)}
			</Flex>
		</div>
	);
};

export default FormActivities;
