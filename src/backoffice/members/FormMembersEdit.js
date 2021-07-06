import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Form } from "formik";
import { useParams } from 'react-router-dom';
import './stylesMembers.css'
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormLabel,
    useToast,
    Image,
    Avatar
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';


const FormMembersEdit = ({ data }) => {

    const toast = useToast();
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

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

    const initialValues = {
        name: data.name ? data.name : '',
        description: data.description ? data.description : '',
        image: data.image ? data.image : '',
        links: {
            facebookUrl: data.facebookUrl ? data.facebookUrl : '',
            linkedinUrl: data.linkedinUrl ? data.linkedinUrl : ''
        }
    }

    const enviarData = (values, actions) => {
        console.log({...values, description: description});
    }

    return (
        <div className="SeccFormMembers" >
            <Formik initialValues={initialValues}
                onSubmit={(values, actions) => { enviarData(values, actions) }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'Debe tener minimo 3 caracteres')
                        .required('Campo Requerido'),
                    image: Yup.string().required('Campo Requerido'),
                    links: Yup.object().shape({
                        facebookUrl: Yup.string().matches(
                            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                            'Ingresa una URL valida!'
                        ).required("Campo Requerido"),
                        linkedinUrl: Yup.string().matches(
                            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                            'Ingresa una URL valida!'
                        ).required('Campo Requerido'),
                    })
                })}
            >
                {props => (
                    <Flex
                        flexDirection="column"
                        backgroundColor="gray.200"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            flexDir="column"
                            mb="2"
                            mt="2"
                            justifyContent="center"
                            alignItems="center"
                            maxW="md"
                        >
                            <Avatar bg="teal.500" />
                            <Heading color="teal.400">{data ? "Editar miembro" : "Crea un nuevo miembro"}</Heading>
                            <Box minW={{ base: "90%", md: "468px" }}>
                                <Form onSubmit={props.handleSubmit} className="">
                                    <Stack
                                        spacing={4}
                                        p="1rem"
                                        backgroundColor="whiteAlpha.900"
                                        boxShadow="md"
                                    >
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
                                                data={data.description ? data.description : ''}
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.

                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDescription(data)
                                                    // console.log({ event, editor, data });
                                                }}

                                            />

                                        </FormControl>
                                        <FormControl className="formControl-image" mt={2}>
                                            <FormLabel>Imagen</FormLabel>
                                            <Input
                                                type="file"
                                                onChange={(e) => {
                                                    handleImage(e, props.handleChange);
                                                }}
                                                onBlur={props.handleBlur}
                                                value={props.values.file}
                                                variant="flushed"
                                                name="image"
                                                id="image">
                                            </Input>
                                            {previewImage && (
                                                <Box boxSize="" className="margin-auto">
                                                    <Image boxSize="40%"
                                                        objectFit="contain"
                                                        src={previewImage}
                                                        className="margin-auto"
                                                        alt="memberPhoto" />
                                                </Box>
                                            )}
                                            <Box color="red.500">
                                                <ErrorMessage name="image" component="small" />
                                            </Box>
                                        </FormControl>
                                        <FormControl mt={2}>
                                            <FormLabel>Links</FormLabel>
                                            <Input
                                                type="url"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.links.facebookUrl}
                                                variant="flushed"
                                                placeholder="Facebook"
                                                name="links.facebookUrl"
                                                id="facebookUrl"
                                            />
                                            <Box color="red.500">
                                                <ErrorMessage name="links.facebookUrl" component="small" />
                                            </Box>
                                            <Input
                                                type="url"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.links.linkedinUrl}
                                                variant="flushed"
                                                placeholder="Linkedin"
                                                name="links.linkedinUrl"
                                                id="linkedinUrl"
                                            />
                                            <Box color="red.500">
                                                <ErrorMessage name="links.linkedinUrl" component="small" />
                                            </Box>
                                        </FormControl>
                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="full"
                                        >
                                            {data ? "Editar" : "Crear"}
                                        </Button>
                                    </Stack>
                                </Form>
                            </Box>
                        </Stack>
                    </Flex>
                )}
            </Formik>
        </div>

    );
}

export default FormMembersEdit;