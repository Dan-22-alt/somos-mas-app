import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { agregarNews } from '../../../reducers/newsBackofficeReducer';
import { getCategories } from '../../../services/categories.service';
import { editarNewsAction } from '../../../services/newServices';
import { newsSchema } from '../validations/newsSchema';

const defaultNew = {
  name: '',
  content: '',
  category_id: '',
  image: '',
};

export default function NewsForm({ data = defaultNew }) {
  const dispatch = useDispatch();

  //llamar la funcion desde el services
  const crearNews = (news) => dispatch(agregarNews(news));
  const editarNews = (news) => dispatch(editarNewsAction(news));

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const toast = useToast();
  let history = useHistory();

  const submitText = data?.id ? 'Guardar' : 'Crear';
  const formTitle = data?.id ? 'Editar Novedad' : 'Crear Novedad';

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

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (values, { setSubmitting }) => {
    // Actualizar
    const payload = {
      ...values,
      image,
    };

    console.log({ payload });

    if (data?.id) {
      editarNews(payload);
      toast({
        title: 'Novedad Actualizada con exito',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      // redireccionar
      history.push('/backoffice/news');
    } else {
      // Crear
      crearNews(payload);
      toast({
        title: 'Novedad creada con exito',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      // redireccionar
      history.push('/backoffice/news');
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
      console.log('Error: ', result.message);
      return;
    }

    setImage(result);
  };

  return (
    <Formik initialValues={data} validationSchema={newsSchema} onSubmit={onSubmit} enableReinitialize>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form className="form-new-post" onSubmit={handleSubmit} noValidate>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
              <Heading color="teal.400" my="6">
                {formTitle}
              </Heading>
              <Box>
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
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

                    {previewImage && <Image src={previewImage} alt="preview" h={40} />}

                    <Box color="red.500">
                      <ErrorMessage name="image" component="small" />
                    </Box>
                  </FormControl>

                  <FormControl mt={2}>
                    <FormLabel>Contenido</FormLabel>
                    <Input name="content" type="text" placeholder="" value={values?.content} onChange={handleChange} />
                    <Box color="red.500">
                      <ErrorMessage name="content" component="small" />
                    </Box>
                  </FormControl>

                  <FormControl mt={2}>
                    <FormLabel>Categoría</FormLabel>
                    <Select
                      name="category_id"
                      placeholder="-- Seleccione --"
                      onChange={handleChange}
                      value={values?.category_id}
                    >
                      {categories.map((c) => {
                        return (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        );
                      })}
                    </Select>

                    <Box color="red.500">
                      <ErrorMessage name="category_id" component="small" />
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
