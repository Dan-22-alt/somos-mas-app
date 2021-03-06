import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const FormCategory = ({ cate }) => {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(true);

  const [newCategory, setNewCategory] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
  });

  const { image } = newCategory;

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
    } else if (cate) {
      setPreview(cate.image);
    } else {
      setPreview('/images/profileFace.svg');
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, [selectetdFile, imagenes]);

  const encodeFileBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;

        setNewCategory({
          ...cate,
          image: Base64,
        });
      };
      reader.onerror = (error) => {
        console.log('error: ', error);
      };
    }
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
    setImage(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      name: cate ? cate.name : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido').min(6, 'El nombre debe contener al menos 6 caracteres'),
    }),
    onSubmit: (valores) => {
      const values = {
        name: valores.name,
        description: newCategory.description,
        image: newCategory.image,
      };
      console.log(values);
      if (cate) {
        axios.put(`${process.env.REACT_APP_API_CATEGORY}/${cate.id}`, values).then((res) => {
          console.log(res);
          if (res.data.error) {
            alert('Debes proporcionar una imagen');
          } else {
            toast({
              title: 'Categoria editada',
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
          }
        });
      } else {
        axios.post(`${process.env.REACT_APP_API_CATEGORY}`, values).then((res) => {
          console.log(res);
          if (res.data.error) {
            alert('Debes proporcionar una imagen');
          } else {
            toast({
              title: 'Categoria creada',
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
          }
        });
      }
    },
  });

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <></>
      ) : (
        <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
          {cate ? (
            <Heading color="teal.400">Editar categoria</Heading>
          ) : (
            <Heading color="teal.400">Nueva categoria</Heading>
          )}
          <Box minW={{ base: '90%', md: '468px' }}>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                <FormControl mt={2}>
                  <FormLabel>Nombre</FormLabel>
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

                <FormControl id="image">
                  <FormLabel>Imagen</FormLabel>
                  <Box d="flex">
                    <input type="file" name={image} onChange={onFileChange} />
                    <Image src={preview} alt="imagen" width="100px" borderRadius="10%" m="auto" />
                  </Box>
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel>Descripcion</FormLabel>
                  <CKEditor
                    editor={ClassicEditor}
                    data={cate ? cate.description : ''}
                    onChange={(event, editor) => {
                      const data = editor.getData();

                      setNewCategory({
                        ...newCategory,
                        description: data,
                      });

                      console.log(newCategory.description);
                    }}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <Alert justifyContent="center" status="error">
                      <AlertIcon />
                      {formik.errors.description}
                    </Alert>
                  ) : null}
                </FormControl>
                {cate ? (
                  <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                    Editar
                  </Button>
                ) : (
                  <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                    Crear
                  </Button>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
      )}
    </Flex>
  );
};

export default FormCategory;
