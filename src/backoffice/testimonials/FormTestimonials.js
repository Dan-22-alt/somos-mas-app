import React, { useState, useEffect } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    Image,
    useToast
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormTestimonials = ({ test }) => {

    const toast = useToast();

    const [isLoading, setIsLoading] = useState(true)

    const [newTestimonial, setNewTestimonial] = useState({
        id: '',
        name: '',
        image: '',
        description: ''
    });

    const { image } = newTestimonial;

    const [selectetdFile, setSelectedFile] = useState([]);
    const [imagenes, setImage] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        encodeFileBase64(selectetdFile[0])

        if (imagenes) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(imagenes);
        } else if (test) {
            setPreview(test.image);
        } else {
            setPreview("/images/profileFace.svg")
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [selectetdFile, imagenes])

    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;

                setNewTestimonial({
                    ...test,
                    image: Base64,
                });
            };
            reader.onerror = (error) => {
                console.log("error: ", error);
            };
        }
    };

    const onFileChange = (e) => {

        setSelectedFile(e.target.files);
        setImage(e.target.files[0]);

    };

    const formik = useFormik({
        initialValues: {
            name: test ? test.name : "",
            description: test ? test.description : ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name requerido')
                .min(6, 'El nombre debe contener al menos 6 caracteres'),
            description: Yup.string()
                .required('Description requerido')
                .min(6, 'La descripcion debe contener al menos 6 caracteres')
        }),
        onSubmit: valores => {
            const values = {
                name: valores.name,
                description: valores.description,
                image: newTestimonial.image
            };
            console.log(values)
            if (test) {
                axios
                    .put(`${process.env.REACT_APP_API_TESTIMONIAL}/${test.id}`, values)
                    .then(res => {
                        console.log(res)
                        if (res.data.error) {
                            alert('Debes proporcionar una imagen')
                        } else {
                            toast({
                                title: "Testimonio editado",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            });
                        }
                    })
            } else {
                axios
                    .post(`${process.env.REACT_APP_API_TESTIMONIAL}`, values)
                    .then(res => {
                        console.log(res)
                        if (res.data.error) {
                            alert('Debes proporcionar una imagen')
                        } else {
                            toast({
                                title: "Testimonio creado",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            });
                        }
                    })

            }
        }
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
            {isLoading
                ? <></>
                : <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    {test
                        ? <Heading color="teal.400">Editar testimonio</Heading>
                        : <Heading color="teal.400">Nuevo testimonio</Heading>
                    }
                    <Box minW={{ base: "90%", md: "468px" }}>

                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl mt={2}>
                                    <FormLabel>Name</FormLabel>
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
                                        <input
                                            type="file"
                                            name={image}
                                            onChange={onFileChange}
                                        />
                                        <Image src={preview} alt="imagen" width="100px" borderRadius="10%" m="auto" />
                                    </Box>
                                </FormControl>

                                <FormControl mt={2}>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        type="text"
                                        id="description"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.description && formik.errors.description ? (
                                        <Alert justifyContent="center" status="error">
                                            <AlertIcon />
                                            {formik.errors.description}
                                        </Alert>
                                    ) : null}
                                </FormControl>
                                {test
                                    ? <Button
                                        borderRadius={0}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="full"
                                    >
                                        Editar
                                    </Button>
                                    : <Button
                                        borderRadius={0}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="full"
                                    >
                                        Crear
                                    </Button>
                                }
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            }
        </Flex>
    );
};
export default FormTestimonials;
