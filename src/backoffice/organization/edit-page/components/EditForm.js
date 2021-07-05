import React, { useRef, useState } from "react";
import {
	Input,
	Button,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Text,
} from "@chakra-ui/react";
// form imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useFormik } from "formik";
import * as Yup from "yup";
import getBase64 from "../../../../utils/getBase64";
import InputErrorAlert from "../../../../components/input-error-alert/InputErrorAlert";
import { BsUpload } from "react-icons/bs"; // logo upload icon

const UserForm = ({ user }) => {
	const logoRef = useRef();
	const [logoName, setLogoName] = useState("");

	const initialValues = {
		name: "",
		shortDescription: "",
		longDescription: "",
		logo: "",
		facebookLink: "",
		instagramLink: "",
	};

	const handleSubmit = async values => {
		console.log(values);
	};

	// Formulario y validación con formik y Yup
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => handleSubmit(values),
		validationSchema: Yup.object({
			name: Yup.string().required("El nombre es obligatorio"),
			shortDescription: Yup.string().required(
				"La descripción corta es obligatorio"
			),
			longDescription: Yup.string().required(
				"La descripción larga es obligatorio"
			),
			logo: Yup.string().required("El logo es obligatorio"),
			facebookLink: Yup.string()
				.url("Url invalida")
				.required("Este campo es obligatorio"),
			instagramLink: Yup.string()
				.url("Url invalida")
				.required("Este campo es obligatorio"),
		}),
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
								data=""
								id="shortDescription"
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
								data=""
								id="longDescription"
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
									onChange={async event => {
										const logo = await event.target.files[0];
										setLogoName(logo ? logo.name : "");
										const logoBase64 = await getBase64(logo);
										formik.setFieldValue("logo", logoBase64);
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
								Login
							</Button>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
};

export default UserForm;
