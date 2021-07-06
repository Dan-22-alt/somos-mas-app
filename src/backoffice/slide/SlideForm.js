import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createSlide, updateSlide } from "../../services/slideService";
import { slideSchema } from "../../validations/slideSchema";

const defaultSlide = {
  name: "",
  description: "",
  image: "",
  order: "",
};

export default function SlideForm({ data = defaultSlide }) {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const toast = useToast();
  let history = useHistory();

  const submitText = data?.id ? "Guardar" : "Crear";
  const formTitle = data?.id ? "Editar Slide" : "Crear Slide";

  useEffect(() => {
    if (data?.image) {
      if (previewImage === null) {
        setPreviewImage(data.image);
      }

      if (image === null) {
        setImage(data.image);
      }
    }
  }, [data, image, previewImage]);

  const onSubmit = (values, { setSubmitting }) => {
    // Actualizar
    const payload = {
      ...values,
      image,
    };
    if (data?.id) {
      updateSlide(data?.id, payload)
        .then(() => {
          toast({
            title: "Slide actualizada.",
            status: "success",
          });

          history.push("/backoffice/slides");
        })
        .catch((e) => {
          toast({
            title: "Ocurrio un error al actualizar el slide.",
            status: "error",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    } else {
      // Crear
      createSlide(payload)
        .then(() => {
          toast({
            title: "Slide creada.",
            status: "success",
          });
          history.push("/backoffice/slides");
        })
        .catch((e) => {
          toast({
            title: "Ocurrio un error al crear el slide.",
            status: "error",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleImage = async (e, handleChange) => {
    handleChange(e);

    if (e.target.files.length === 0) {
      setPreviewImage(null);
      return;
    }
    const file = e.target.files[0];
    setPreviewImage(URL.createObjectURL(file));

    const result = await toBase64(file).catch((e) => Error(e));
    if (result instanceof Error) {
      console.log("Error: ", result.message);
      return;
    }
    setImage(result);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={slideSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form className="form-new-post" onSubmit={handleSubmit} noValidate>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Heading color="teal.400" my="6">
                {formTitle}
              </Heading>
              <Box>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl mt={2}>
                    <FormLabel>Título</FormLabel>
                    <Input
                      name="name"
                      type="text"
                      autoFocus
                      placeholder=""
                      value={values?.name}
                      onChange={handleChange}
                    />

                    <Box color="red.500">
                      <ErrorMessage name="name" component="small" />
                    </Box>
                  </FormControl>

                  <FormControl mt={2}>
                    <FormLabel>Imagen</FormLabel>
                    <Input
                      name="image"
                      type="file"
                      onChange={(e) => {
                        handleImage(e, handleChange);
                      }}
                    />

                    {previewImage && (
                      <div>
                        <img src={previewImage} alt="" />
                      </div>
                    )}

                    <Box color="red.500">
                      <ErrorMessage name="image" component="small" />
                    </Box>
                  </FormControl>

                  <FormControl mt={2}>
                    <FormLabel>Descripción</FormLabel>
                    <Input
                      name="description"
                      type="text"
                      placeholder=""
                      value={values?.description}
                      onChange={handleChange}
                    />
                    <Box color="red.500">
                      <ErrorMessage name="description" component="small" />
                    </Box>
                  </FormControl>

                  <FormControl mt={2}>
                    <FormLabel>Order</FormLabel>
                    <Input
                      name="order"
                      placeholder=""
                      onChange={handleChange}
                      value={values?.order}
                    ></Input>

                    <Box color="red.500">
                      <ErrorMessage name="order" component="small" />
                    </Box>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="full"
                    disabled={isSubmitting}
                  >
                    {submitText}
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
