import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "./stylesForm.css";
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormLabel,
    Image,
    useToast,
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch } from "react-redux";
import {crearNuevaActividadAction} from "../../services/activitiesService";
import { useHistory } from "react-router-dom";

const FormActivities = ({data}) => {
    const history = useHistory(); 
    const dispatch = useDispatch()

     //llamar la funcion desde el services
    const agregarActividad = (actividad) => dispatch(crearNuevaActividadAction(actividad));

    // Posible mejora: que tome la data por medio del parametro
    // const { id } = useParams()

    const toast = useToast();
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const [newActividad, setNewActividad] = useState({
        id: '',
        name: '',
        image: '',
        description: ''
    });

    const { image } = newActividad;

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
        } else if (data) {
            setPreview(data.image);
        } else {
            setPreview("/images/profileFace.svg")
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [data, selectetdFile, imagenes])

    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;

                setNewActividad({
                    ...data,
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



    // si recibe data por medio props toma los valores que vienen alli, si no es un formulario vacio
    // los titulos, notificaciones, botones y Acciones se adaptan segun la funcion que vaya a cumplir
    const initialValues = {
        name: data ? data.name : '',
        description: data ? data.description : '',
        image: newActividad.image
    }

    const enviarData = (values) => {
        agregarActividad({ ...values, description: description, image: newActividad.image })
        toast({
            title: "actividad creada",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
          // redireccionar
        history.push('/backoffice/activities');
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
                {isLoading
                    ? <></>

                        :<Stack
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
                                                onChange={onFileChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.file}
                                                variant="flushed"
                                                name="image"
                                                id="image">
                                                
                                            </Input>
                                            <Image src={preview} alt="imagen" width="100px" borderRadius="10%" m="auto" />
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

                    }

                    </Flex>
                                
                )}
            </Formik>
        </div>

    );
}

export default FormActivities;