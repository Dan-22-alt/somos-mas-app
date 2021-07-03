import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../../services/categories.service";
import { createNews, updateNews } from "../../../services/newsService";

const defaultNew = {
  name: "",
  content: "",
  category_id: "",
  image: "",
};

export default function NewsForm({ data = defaultNew }) {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(data);
  const toast = useToast();
  let history = useHistory();

  const submitText = data?.id ? "Guardar" : "Crear";
  const formTitle = data?.id ? "Editar Novedad" : "Crear Novedad";

  useEffect(() => {
    setValues(data);
  }, [data]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualizar
    if (data?.id) {
      updateNews(data?.id, values)
        .then(() => {
          toast({
            title: "Novedad actualizada.",
            status: "success",
          });
          history.push("/backoffice/news");
        })
        .catch((e) => {
          toast({
            title: "Ocurrio un error al crear la novedad.",
            status: "error",
          });
        });
    } else {
      // Crear
      createNews(values)
        .then(() => {
          toast({
            title: "Novedad creada.",
            status: "success",
          });
          history.push("/backoffice/news");
        })
        .catch((e) => {
          toast({
            title: "Ocurrio un error al actualizar la novedad.",
            status: "error",
          });
        });
    }
  };

  const [previewImage, setPreviewImage] = useState(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleImage = async (e) => {
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

    setValues({
      ...values,
      image: result,
    });
  };

  return (
    <div>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
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
            <form onSubmit={handleSubmit}>
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
                    placeholder=""
                    value={values?.name}
                    onChange={handleChangeInput}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel>Imagen</FormLabel>
                  <Input
                    name="image"
                    type="file"
                    id="content"
                    onChange={handleImage}
                  />

                  {previewImage && (
                    <div>
                      <img src={previewImage} alt="" />
                    </div>
                  )}
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel>Contenido</FormLabel>
                  <Input
                    name="content"
                    type="text"
                    placeholder=""
                    value={values?.content}
                    onChange={handleChangeInput}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    name="category_id"
                    placeholder="-- Seleccione --"
                    onChange={handleChangeInput}
                  >
                    {categories.map((c) => {
                      return (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      );
                    })}
                  </Select>
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
            </form>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
/*const validation = (values) => {
  var errors = {};
  if (!values.name) {
    errors.name = "Name is required!";
  } else if (values.name.length <= 1) {
    errors.name = "Name has to be 1 character at less!";
  }
  return errors;
};
const Basic = () => (
  <Formik
    initialValues={{
      name: "",
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        console.log(values);
        console.log(actions);
        actions.setSubmitting(false);
      }, 2000);
    }}
    validate={validation}
  ></Formik>
);*/
