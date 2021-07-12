import React, { useRef, useState, useEffect } from "react";
import {
	Input,
	Button,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Text,
	useToast,
	Image,
} from "@chakra-ui/react"; // form imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useFormik } from "formik";
import getBase64 from "../../../../utils/getBase64";
import InputErrorAlert from "../../../../components/input-error-alert/InputErrorAlert";
import { BsUpload } from "react-icons/bs"; // logo upload icon
import { edit } from "../../../../services/organizationService";
import { formEditOrgSchema } from "../../validations/formEditOrg";

const EditOrgForm = ({ datos }) => {
	const logoRef = useRef();
	const [logoName, setLogoName] = useState("");
	const [image, setImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	const toast = useToast();

	const initialValues = {
		name: datos.name ? datos.name : "",
		shortDescription: datos ? datos.short_description : "",
		longDescription: datos ? datos.long_description : "",
		logo: datos ? datos.logo : "",
		facebookLink: datos ? datos.facebookLink : "",
		instagramLink: datos ? datos.instagramLink : "",
	};

	const handleSubmit = async values => {
		// console.log(values);
		edit(values)
			.then(res => {
				// console.log(res);
				toast({
					description: "Datos Atualizados!",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
			})
			.catch(e => {
				console.log(e);
			});
	};

	const handleImage = async (e, handleChange) => {
		handleChange(e);
		if (e.target.files.length === 0) {
			setPreviewImage(null);
			return;
		}
		const logo = e.target.files[0];
		setPreviewImage(URL.createObjectURL(logo));
		if (logo) {
			getBase64(logo)
				.then(image64 => {
					setImage(image64);
					formik.setFieldValue("logo", image64);
				})
				.catch(error => console.log("Error", error));
		}
	};
	useEffect(() => {
		if (datos?.logo) {
			if (previewImage === null) {
				setPreviewImage(datos.logo);
			}
			if (image === null) {
				setImage(datos.logo);
			}
		}
	}, [datos, image, previewImage]);

	// Formulario y validación con formik y Yup
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => handleSubmit(values),
		validationSchema: formEditOrgSchema,
	});

	return (
		<Stack
			flexDir="column"
			mb="2"
			justifyContent="center"
			alignItems="center">
			<Box width="100%" maxWidth="100%">
				<Box
					boxShadow="md"
					borderRadius="md"
					as="form"
					onSubmit={formik.handleSubmit}>
					<Stack spacing={4} p="1rem" boxShadow="md">
						<FormControl>
							{formik.touched.name && formik.errors.name ? (
								<InputErrorAlert text={formik.errors.name} />
							) : null}
							{/* name */}
							<FormLabel>Nombre</FormLabel>
							<Input
								type="text"
								placeholder="Miguel"
								id="name"
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</FormControl>
						{/* short description */}
						<FormControl>
							{formik.touched.shortDescription &&
							formik.errors.shortDescription ? (
								<InputErrorAlert text={formik.errors.shortDescription} />
							) : null}
							<FormLabel>Descripción corta</FormLabel>
							<CKEditor
								editor={ClassicEditor}
								data={formik.values.shortDescription}
								id="shortDescription"
								name="shortDescription"
								onChange={(event, editor) => {
									const text = editor.getData();
									formik.values.shortDescription = text;
								}}
							/>
						</FormControl>
						{/* long description */}
						<FormControl>
							{formik.touched.longDescription &&
							formik.errors.longDescription ? (
								<InputErrorAlert text={formik.errors.longDescription} />
							) : null}
							<FormLabel>Descripción larga</FormLabel>
							<CKEditor
								isFullWidth
								editor={ClassicEditor}
								data={formik.values.longDescription}
								id="longDescription"
								name="longDescription"
								onChange={(event, editor) => {
									const text = editor.getData();
									formik.values.longDescription = text;
								}}
							/>
						</FormControl>
						{/* logo */}
						<FormControl>
							{formik.touched.logo && formik.errors.logo ? (
								<InputErrorAlert text={formik.errors.logo} />
							) : null}
							<FormLabel>Logo</FormLabel>
							<Stack
								direction={["column", "row"]}
								align={{ base: "start", sm: "center" }}>
								<Input
									ref={logoRef}
									display="none"
									type="file"
									id="logo"
									name="logo"
									accept="image/png, image/jpeg"
									onChange={e => {
										handleImage(e, formik.handleChange);
									}}
								/>
								<Stack style={{ margin: 0 }} direction="row" spacing={4}>
									<Button
										size="sm"
										leftIcon={<BsUpload />}
										colorScheme="teal"
										onClick={() => {
											logoRef.current.click();
										}}
										variant="outline">
										Upload
									</Button>
								</Stack>
								<Text>{logoName && logoName}</Text>
								{previewImage && (
									<Box
										boxSize=""
										className="margin-auto"
										justifyContent="center">
										<Image
											boxSize="40%"
											objectFit="contain"
											src={previewImage}
											className="margin-auto"
											alt="logo"
										/>
									</Box>
								)}
							</Stack>
						</FormControl>
						{/* facebook link */}
						<FormControl>
							{formik.touched.facebookLink &&
							formik.errors.facebookLink ? (
								<InputErrorAlert text={formik.errors.facebookLink} />
							) : null}

							<FormLabel>Facebook link</FormLabel>
							<Input
								type="text"
								placeholder="https://www.facebook.com/user/"
								id="facebookLink"
								name="facebookLink"
								value={formik.values.facebookLink}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</FormControl>
						{/* instagram link */}
						<FormControl>
							{formik.touched.instagramLink &&
							formik.errors.instagramLink ? (
								<InputErrorAlert text={formik.errors.instagramLink} />
							) : null}

							<FormLabel>Instagram link</FormLabel>
							<Input
								type="text"
								placeholder="https://www.instagram.com/user/"
								id="instagramLink"
								name="instagramLink"
								value={formik.values.instagramLink}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</FormControl>
						{/* submit button */}
						<Box>
							<Button
								type="submit"
								variant="solid"
								colorScheme="teal"
								mt={6}
								isFullWidth>
								Editar
							</Button>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
};

export default EditOrgForm;
