import React, { useState } from 'react';
import { Formik } from "formik";
import { useParams } from 'react-router-dom';
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    Image,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    Textarea,
} from '@chakra-ui/react';
import { BsFileText } from "react-icons/bs";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FormActivities = () => {

    const { id } = useParams()
    const [modeForm, setMode] = useState()
    const [description, setDescription] = useState('')

    const initialValues = {
        name: '',
        description: '',
        image: '',
    }

    const enviarData = (even) => {
        even.preventDefault()
        // console.log(({...values , description: description }))
        console.log("gsdfsd");

    }


    return (

        <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            setTimeout(() => {
                alert(JSON.stringify(({...values, description: description}), null, 2));
                actions.setSubmitting(false);
            }, 1000);
        }}>
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
                    >
                        <Heading color="teal.400">Formulario de Actividades</Heading>
                        <Box minW={{ base: "90%", md: "468px" }}>
                            <form onSubmit={props.handleSubmit}>
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
                                            name="name"
                                            id="name"
                                        />
                                    </FormControl>

                                    <FormControl mt={2}>
                                        <FormLabel>Descripción</FormLabel>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDescription(data)
                                                console.log(description)
                                                // console.log({ event, editor, data });
                                            }}
                                            onBlur={(event, editor) => {
                                                console.log('Blur.', editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                console.log('Focus.', editor);
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
                                            name="image"
                                            id="image"
                                        />
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
                                        Enviar
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>



                </Flex>
            )}
        </Formik>

    );
}

export default FormActivities;