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
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createSlide, updateSlide } from "../../services/slideService";
import { slideSchema } from "../../validations/slideSchema";
import getBase64 from "../../utils/getBase64";

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

  })

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

  const handleImage = async (e, setFieldValue) => {
    const image = e.target.files[0]
    if(image){
       getBase64(image)
        .then(image64 => setFieldValue('image', image64))
        .catch(error => console.log('Error', error))
    }
  };

  const formik = useFormik({initialValues: defaultSlide, validationSchema:
    slideSchema, onSubmit})

  return (
    <form onSubmit={formik.handleSubmit}>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />

                {formik.errors.name ?
                  <Box color="red.500">
                    {formik.errors.name}
                  </Box>
                  : null
                }

              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Imagen</FormLabel>
                <Input
                  name="image"
                  type="file"
                  onChange={(e) => handleImage(e, formik.setFieldValue)}
                />

                <div>
                  <img
                    src={previewImage? previewImage : ''}
                    alt=""
                  />
                </div>
                {formik.errors.image ?
                <Box color="red.500">
                  formik.errors.image}
                </Box>
                  : null
                }

              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Descripción</FormLabel>
                <Input
                  name="description"
                  type="text"
                  placeholder=""
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />

                {formik.errors.description?
                  <div>{formik.errors.description}</div> : null
                }
              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Order</FormLabel>
                <Input
                  name="order"
                  placeholder=""

                  value={formik.values.order}
                  onChange={formik.handleChange}
                />

                {formik.errors.order?
                  <Box color="red.500">
                    {formik.errors.order}
                  </Box>
                  : null
                }

              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                {submitText}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
