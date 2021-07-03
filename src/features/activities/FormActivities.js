import React, { useState } from 'react';
import { Formik } from "formik";
import "./stylesForm.css";
import { useParams } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'


const FormActivities = ({ data }) => {

    // Posible mejora: que tome la data por medio del parametro
    // const { id } = useParams()

    const toast = useToast();
    const [description, setDescription] = useState('')

    // si recibe data por medio props toma los valores que vienen alli, si no es un formulario vacio
    // los titulos, notificaciones, botones y Acciones se adaptan segun la funcion que vaya a cumplir
    const initialValues = {
        name: data ? data.name : '',
        description: data ? data.description : '',
        image: data ? data.image : '',
    }

    const enviarData = (values, actions) => {
            axios({ method: data ? 'PUT' : 'POST' ,  
                    url: data ? `${process.env.REACT_APP_API_ACTIVITY}/` + data.id : `${process.env.REACT_APP_API_ACTIVITY}` ,
                    data: { ...values, description: description } })
                .then(res => {
                    console.log(res)
                    toast({
                        description: data ? "Editado!" : "Actividad creada!",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    });
                    actions.resetForm()
                })
                .catch(err => {
                    console.log(err)
                    toast({
                        description: "Error del servidor!",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });

                })
    }


    return (

        <div  className="SeccFormActivities" >

            <Formik initialValues={initialValues} onSubmit={(values, actions) => { enviarData(values, actions) }} >
                {props => (
                    <Flex
                        flexDirection="column"
                        width="100wh"
                        height="100vh"
                        backgroundColor="gray.200"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Stack
                            flexDir="column"
                            mb="2"
                            justifyContent="center"
                            alignItems="center"
                            maxW="md"
                        >
                            <Heading color="teal.400">{data ? "Edita la actividad" : "Crea una actividad"}</Heading>
                            <Box minW={{ base: "90%", md: "468px" }}>
                                <form onSubmit={props.handleSubmit} className="formActivities">
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
                                        </FormControl>

                                        <FormControl mt={2}>
                                            <FormLabel>Descripción</FormLabel>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={data ? data.description : ''}
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    
                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDescription(data)
                                                    // console.log({ event, editor, data });
                                                }}
                                                onBlur={(event, editor) => {
                                                    // console.log('Blur.', editor);
                                                }}
                                                onFocus={(event, editor) => {
                                                    // console.log('Focus.', editor);
                                                }}
                                            /> 

                                        </FormControl>
                                        <FormControl mt={2}>
                                            <FormLabel>Imagen</FormLabel>
                                            <Input
                                                type="file"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.file}
                                                variant="flushed"
                                                name="image"
                                                id="image">
                                                
                                            </Input>

                                        </FormControl>
                                        {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                                    <button type="submit">Submit</button> */}

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
                                </form>
                            </Box>
                        </Stack>



                    </Flex>
                )}
            </Formik>
        </div>

    );
}

export default FormActivities;