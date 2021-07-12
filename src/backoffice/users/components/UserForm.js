import React, { useRef, useState } from "react";
import {
  Input,
  Button,
  Stack,
  Box,
  Select,
  FormControl,
  FormLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsUpload } from "react-icons/bs";
import { useFormik } from "formik";
import InputErrorAlert from "../../../components/input-error-alert/InputErrorAlert";
import { handleRequest } from "../../../services/authService";
import getBase64 from "../../../utils/getBase64";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import { createUser, updateUser } from "../../../services/userService";

const UserForm = ({ user }) => {
  const profilePhotoRef = useRef();
  const [profilePhotoName, setProfilePhotoName] = useState("");
  let history = useHistory();
  const toast = useToast();

  const initialValues = {
    name: user ? user.name : "",
    password: user ? user.password : "",
    email: user ? user.email : "",
    role: user ? user.role : "",
    profilePhoto: user ? user.profilePhoto : "",
  };

  const handleSubmit = async (values) => {
    const putBody = {
      ...user,
      values,
    };

    if (user) {
      updateUser(user?.id)
        .then(() => {
          toast({
            title: "Usuario actualizado.",
            status: "success",
          });

          history.push("/backoffice/users");
        })
        .catch((e) => {
          toast({
            title: "Ocurrio un error al crear el usuario.",
            status: "error",
          });
        })
        .finally(() => {
          window.location.reload();
        });
    } else {
      // Crear
      createUser(values)
        .then(() => {
          toast({
            title: "Novedad creada.",
            status: "success",
          });
          history.push("/backoffice/users");
        })
        .catch((e) => {
          console.log("eeroe", e);
          toast({
            title: "Ocurrio un error al actualizar el usuario.",
            status: "error",
          });
        })
        .finally(() => {
          window.location.reload();
        });
    }
  };

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      password: Yup.string().required("La contraseña es obligatorio"),
      role: Yup.string().required("El rol es obligatorio"),
      email: Yup.string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es obligatorio"),
      profilePhoto: Yup.string().required("La foto de perfil es obligatoria"),
    }),
  });

  return (
    <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
      <Box
        as="form"
        onSubmit={formik.handleSubmit}
        width="100%"
        maxWidth="100%"
        boxShadow="md"
        p="1rem"
        borderRadius="md"
      >
        <Stack spacing={4}>
          {/* Name input */}
          <FormControl>
            {formik.touched.name && formik.errors.name ? (
              <InputErrorAlert text={formik.errors.name} />
            ) : null}
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
          {/* Password input */}
          <FormControl>
            {formik.touched.password && formik.errors.password ? (
              <InputErrorAlert text={formik.errors.password} />
            ) : null}
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Contraseña"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>
          {/* Email input  */}
          <FormControl mt={2}>
            {formik.touched.email && formik.errors.email ? (
              <InputErrorAlert text={formik.errors.email} />
            ) : null}
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="miguel@correo.com"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>
          {/* Role input */}
          <FormControl>
            {formik.touched.role && formik.errors.role ? (
              <InputErrorAlert text={formik.errors.role} />
            ) : null}
            <FormLabel>Rol</FormLabel>
            <Select
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Seleccione un rol"
            >
              <option value="user" label="usuario">
                Usuario
              </option>
              <option value="admin" label="admin">
                Admin
              </option>
            </Select>
          </FormControl>
          {/* Profile photo input */}
          <FormControl>
            {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
              <InputErrorAlert text={formik.errors.profilePhoto} />
            ) : null}
            <FormLabel>Foto de perfil</FormLabel>
            <Stack
              direction={["column", "row"]}
              align={{ base: "start", sm: "center" }}
            >
              <Input
                ref={profilePhotoRef}
                display="none"
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                onChange={async (event) => {
                  const profilePhoto = await event.target.files[0];
                  setProfilePhotoName(profilePhoto ? profilePhoto.name : "");
                  const profilePhotoBase64 = await getBase64(profilePhoto);
                  formik.setFieldValue("profilePhoto", profilePhotoBase64);
                }}
              />
              <Stack style={{ margin: 0 }} direction="row" spacing={4}>
                <Button
                  size="sm"
                  leftIcon={<BsUpload />}
                  colorScheme="teal"
                  onClick={() => {
                    profilePhotoRef.current.click();
                  }}
                  variant="outline"
                >
                  Upload
                </Button>
              </Stack>
              <Text>{profilePhotoName && profilePhotoName}</Text>
            </Stack>
          </FormControl>
          {/* Submit button */}
          <Box>
            <Button
              type="submit"
              variant="solid"
              colorScheme="teal"
              mt={6}
              isFullWidth
            >
              Login
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default UserForm;
