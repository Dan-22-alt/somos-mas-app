import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    Avatar,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

const FormRegistro = () => {
    return ( 
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
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Registro</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form
            >
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                  <FormControl >
                
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type="text"
                                placeholder="Maquinola"
                                id="nombre"
                            />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Apellido</FormLabel>
                            <Input
                                type="text"
                                placeholder="Prueba"
                                id="apellido"
                            />
                        </FormControl>

                <FormControl mt={2}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Mquinola@maquinola.com"
                            id="email"
                        />
                    </FormControl>

                    <FormControl mt={2}>


                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            id="password"
                        />

                    </FormControl>

                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Registro

                </Button>

              </Stack>

            </form>

          </Box>

        </Stack>

      </Flex>
     );
}
 
export default FormRegistro;