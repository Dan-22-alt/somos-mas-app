import React from 'react'
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

const FormCategory = () => {
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
                 <></>
                 <Stack
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
                                    />
                                </FormControl>

                                <FormControl id="image">
                                    <FormLabel>Imagen</FormLabel>
                                    <Box d="flex">
                                        <input
                                            type="file"
                                        />
                                    </Box>
                                </FormControl>

                                <FormControl mt={2}>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        type="text"
                                        id="description"
                                    />
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
        </Flex>
    );
};

export default FormCategory
