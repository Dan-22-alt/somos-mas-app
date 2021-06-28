import React,{ useEffect, useState } from 'react'
import axios from 'axios'

import { Formik,Form , Field } from 'formik'
import { Container, Center, Button } from "@chakra-ui/react"

import Formulario from './test'

const ComponentFormCategories = (props) => {

    const [category, setCategory] = useState({ name: '', description: '', image: ''});
    const [isLoading, setIsLoading] = useState(true)
    const arrayX = []

    useEffect(() => {
        if (props.match.params.id) {
            loadData()
            encodeFileBase64(arrayX[0])
            setTimeout(() => {
                setIsLoading(false);
            }, 1100)
        }
        else{
            setTimeout(() => {
                setIsLoading(false)
            })
        }
    },[])

    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            var Base64 = reader.result;
            
            
            setCategory({
                ...category,
                image: Base64});                          
          };
          reader.onerror = (error) => {
            console.log("error: ", error);
          };
        }
      };

    const loadData = () => {
        const { id } = props.match.params;
        axios.get(`${process.env.REACT_APP_API_CATEGORY}/${id}`)
            .then((res) => {
                const newCategory = res.data.data;
                setCategory(newCategory);
                return category
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const validate = (values) => {
        const errors = {}

        if (!values.name) {
            errors.name = 'Empty title'
        }

        if (!values.description) {
            errors.description = 'Empty body'
        }

        if (values.name === category.name && values.description === category.description) {
            errors.edit = 'Change some data'
        }

        return errors

    }

    return (
        <div>
            <Container marginTop="1.5%">
                <Center d="flex" flexDirection="column">
                    {props.match.params.id 
                    ? <h1>Formulario de EDICION</h1>
                    : <h1>Formulario de CREACION</h1>}
                    {isLoading
                    ?<p>Cargando</p>
                :
                
                    <Formik
                    initialValues={category}
                    // initialValues={{name: '', description: '', image: 'stirng', deleted_at: 'stirng', parent_category_id:'stirng'}}
                    validate={validate}
                    onSubmit={(values, { setFieldError }) => {
                        if (!props.match.params.id) {
                            axios.post(`${process.env.REACT_APP_API_CATEGORY}`, values).then(
                                function (res) {
                                    console.log(values)
                                    console.log(res)
                                    console.log(res.data)
                                })
                                .catch(err => {
                                    setFieldError('title', 'prueba title')
                                    console.log(err)
                                })
                        } else {
                            const { id } = props.match.params;
                            axios.put(`${process.env.REACT_APP_API_CATEGORY}/${id}`, values).then(
                                function (res) {
                                    console.log(values)
                                    console.log(res)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }
                    }}
                >
                    {({ errors }) => (

                        <Form>
                                <label htmlFor="name">Name</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                />
                                <div>{errors.name}</div>
                                <label htmlFor="description">Description</label>
                                <Field
                                    id="description"
                                    name="description"
                                    type="text"
                                />
                                <div>{errors.description}</div>
                            {props.match.params.id ?
                                <div>
                                    <div>{errors.edit}</div>
                                    <Button colorScheme="red" type="submit">Edit</Button>
                                </div>
                                : <Button colorScheme="blue" type="submit">Post</Button>
                            }
                        </Form>
                    )}
                </Formik>}
                </Center>
                <Formulario />
            </Container>
        </div>
    )
}

export default ComponentFormCategories
