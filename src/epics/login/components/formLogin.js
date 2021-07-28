import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
 Image, Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInUser } from '../../../reducers/authReducer';

const FormLogin = () => {
  const dispatch = useDispatch();

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
      password: Yup.string()
        .required('Ingrese su contraseña')
        .min(6, 'la contraseña debe contener al menos 6 caracteres'),
    }),
    onSubmit: (valores) => {
      const values = {
        email: valores.email,
        password: valores.password,
      };
      dispatch(signInUser(values));
    },
  });

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Iniciar sesión
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, teal.400,teal.400)"
                  bgClip="text">
                  .
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Ingresa tus datos para comenzar!
              </Text>
            </Stack>
          </Stack>
          <form onSubmit={formik.handleSubmit}>
            <FormControl mt={4}  id="email">
              {formik.touched.email && formik.errors.email ? (
                <Alert justifyContent="center" status="error">
                  <AlertIcon />
                  {formik.errors.email}
                </Alert>
              ) : null}
              <FormLabel>Correo Electrónico</FormLabel>
              <Input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Correo@correo.com"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }} />
            </FormControl>
            <FormControl mt={4}  id="password">
              {formik.touched.password && formik.errors.password ? (
                <Alert justifyContent="center" status="error">
                  <AlertIcon />
                  {formik.errors.password}
                </Alert>
              ) : null}
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }} />
            </FormControl>
            <Stack spacing={6}>
              <Button mt={4} type="submit" colorScheme={'teal'} variant={'solid'}>
                Ingresar
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
};

export default FormLogin;
