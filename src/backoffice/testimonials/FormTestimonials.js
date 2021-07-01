import React, { useState } from 'react'
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
} from '@chakra-ui/react';

const FormTestimonials = ({ testimonial }) => {
    

    return(
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
                <Heading color="teal.400">Nuevo testimonio</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form
                        // onSubmit={formik.handleSubmit}
                    >
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl mt={2}>
                                {/* {formik.touched.email && formik.errors.email ? (
                                    <Alert justifyContent="center" status="error">
                                        <AlertIcon />
                                        {formik.errors.email}
                                    </Alert>
                                ) : null} */}
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    id="name"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                />
                            </FormControl>

                            <FormControl id="image">
                            <FormLabel>Imagen</FormLabel>                    
                                <input type="file"
                                // name={image}
                                // onChange={onFileChange}
                                />      
                            </FormControl>

                            <FormControl mt={2}>
                                {/* {formik.touched.password && formik.errors.password ? (
                                    <Alert justifyContent="center" status="error">
                                        <AlertIcon />
                                        {formik.errors.password}
                                    </Alert>
                                ) : null} */}
                                <FormLabel>Description</FormLabel>
                                <Input
                                    type="text"
                                    id="description"
                                    // value={formik.values.password}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                />

                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Crear
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )   
}
export default FormTestimonials