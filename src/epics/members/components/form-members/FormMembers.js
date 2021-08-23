import {
  Avatar,
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
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { newMember, updateMember } from '../../../../reducers/membersReducer'
import getBase64 from '../../../../utils/getBase64';
import { memberSchema } from '../../validations/memberSchema';
import './stylesMembers.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const FormMembers = ({ data, mode }) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const toast = useToast();
  const [foto, setFoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [editado, setEditado] = useState(null);
  const buttonImg = useRef();

  const initialValues = {
    id: data.id ? data.id : '',
    name: data.name ? data.name : '',
    description: data.description ? data.description : '',
    image: data.image ? data.image : '',
    facebookUrl: data.facebookUrl ? data.facebookUrl : '',
    linkedinUrl: data.linkedinUrl ? data.linkedinUrl : '',
  };
  // previsualizacion de imagen
  useEffect(() => {
    if (data?.image) {
      if (previewImage === null) {
        setPreviewImage(data.image);
      }
      if (foto === null) {
        setFoto(data.image);
      }
    }
  }, [data, foto, previewImage]);

  const handleImage = async (e, handleChange, setFieldValue) => {
    handleChange(e);
    setEditado(true);
    setError(false);
    if (e.target.files.length === 0) {
      setPreviewImage(null);
      return;
    }
    const file = e.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
    if (file) {
      getBase64(file)
        .then((image64) => {
          setFoto(image64);
          setFieldValue('image', image64);
        })
        .catch((error) => console.log('Error', error));
    }
  };

  const enviarData = (values, actions) => {
    // CREAR
    if (mode === 'create') {
      dispatch(newMember(values))
      toast({
        title: 'Miembro creado!',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
      history.push('/backoffice/members')
    }
    // EDITAR
    else if (mode === 'edit') {
      dispatch(updateMember(values))
      toast({
        title: 'Miembro editado!',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
      history.push('/backoffice/members')
    }
  };

  return (
    // <div className="SeccFormMembers">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          enviarData(values, actions);
        }}
        validationSchema={memberSchema}
      >
        {(props) => (
          <Flex
            flexDirection="column"
            justifyContent="center"
            minH="110vh"
            alignItems="center"
          >
            <Stack flexDir="column" mb="2" mt="2" justifyContent="center" alignItems="center" maxW="md">
              <Avatar bg="teal.500" />
              <Heading color="teal.400">{data.name ? 'Editar Miembro' : 'Crear Miembro'}</Heading>
              <Box minW={{ base: '90%', md: '468px' }}>
                <Form onSubmit={props.handleSubmit} className="">
                  <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                    <FormControl mt={2}>
                      <FormLabel>Nombre</FormLabel>
                      <Input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        variant="flushed"
                        name="name"
                        id="name"
                      />
                      <Box color="red.500">
                        <ErrorMessage name="name" component="small" />
                      </Box>
                    </FormControl>

                    <FormControl mt={2}>
                      <FormLabel>Descripción</FormLabel>
                      <CKEditor
                        editor={ClassicEditor}
                        data={props.values.description}
                        name="description"
                        id="description"
                        onChange={(event, editor) => {
                          const text = editor.getData();
                          props.values.description = text;
                        }}
                      />
                      <Box color="red.500">
                        <ErrorMessage name="description" component="small" />
                      </Box>
                    </FormControl>
                    <FormControl className="formControl-image" mt={2}>
                      <FormLabel>Imagen</FormLabel>
                      <Input
                        type="file"
                        ref={buttonImg}
                        onChange={async (e) => {
                          handleImage(e, props.handleChange, props.setFieldValue);
                        }}
                        onBlur={props.handleBlur}
                        value={props.values.file}
                        variant="flushed"
                        name="image"
                        id="image"
                      ></Input>
                      <Stack style={{ margin: 0 }} direction="row" spacing={4}>
                        <Button
                          size="sm"
                          leftIcon={<BsUpload />}
                          colorScheme="teal"
                          onClick={() => {
                            buttonImg.current.click();
                          }}
                          variant="outline"
                        >
                          Upload
                        </Button>
                      </Stack>
                      {previewImage && (
                        <Box boxSize="" className="margin-auto">
                          <Image
                            boxSize="40%"
                            objectFit="contain"
                            src={previewImage}
                            className="margin-auto"
                            alt="memberPhoto"
                          />
                        </Box>
                      )}
                      <Box color="red.500">
                        <ErrorMessage name="image" component="small" />
                      </Box>
                      {error ? (
                        <Box color="red.500">
                          <small>Debe actualizar la imagen</small>
                        </Box>
                      ) : null}
                    </FormControl>
                    <FormControl mt={2}>
                      <FormLabel>Links</FormLabel>
                      <Input
                        type="url"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.facebookUrl}
                        variant="flushed"
                        placeholder="Facebook"
                        name="facebookUrl"
                        id="facebookUrl"
                      />
                      <Box color="red.500">
                        <ErrorMessage name="facebookUrl" component="small" />
                      </Box>
                      <Input
                        type="url"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.linkedinUrl}
                        variant="flushed"
                        placeholder="Linkedin"
                        name="linkedinUrl"
                        id="linkedinUrl"
                      />
                      <Box color="red.500">
                        <ErrorMessage name="linkedinUrl" component="small" />
                      </Box>
                    </FormControl>
                    <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                      {data.name ? 'Editar' : 'Crear'}
                    </Button>
                  </Stack>
                </Form>
              </Box>
            </Stack>
          </Flex>
        )}
      </Formik>
    // </div>
  );
};

export default FormMembers;
