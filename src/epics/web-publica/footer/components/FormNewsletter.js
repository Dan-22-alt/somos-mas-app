import React, { Fragment, useEffect, useState } from 'react';
import { Stack, Text, Input, IconButton, useToast, Box, FormControl, Flex } from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

const FormNewsletter = () => {
  const toast = useToast();
  const [isSuscribed, setIsSuscribed] = useState(false);

  useEffect(() => {
    const emailSuscripto = localStorage.getItem('suscripto');
    setIsSuscribed(emailSuscripto !== null);
  }, []);

  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Email no valido').required('Email obligatorio'),
  });
  const onSubmit = (values, { resetForm }) => {
    localStorage.setItem('suscripto', values.email);
    toast({
      title: 'Suscripción Correcta',
      status: 'success',
      duration: 2000,
    });
    resetForm({});
    setIsSuscribed(true);
  };

  return (
    <Fragment>
      {!isSuscribed ? (
        <Stack>
          {/* <Text align="center" fontWeight={'500'} fontSize={'lg'} mb={2}>
            Suscribete al Newsletter
          </Text> */}

          <Text fontWeight="bold" textAlign="center" mt={{ base: '2rem', md: 0 }} fontSize={['md', 'lg', 'xl']} mb={2}>
            Suscribete al Newsletter
          </Text>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <Stack direction={'row'}>
                  <FormControl>
                    <Flex>
                      <Input
                        name="email"
                        type="email"
                        placeholder={'Ingresa tu email'}
                        bg={'white'}
                        color={'black'}
                        borderColor="gray.400"
                        border="1px"
                        _focus={{
                          bg: 'whiteAlpha.800',
                        }}
                        onChange={handleChange}
                        value={values?.email}
                      />
                      <IconButton
                        ml="2"
                        bg={'primary.800'}
                        color={'gray.50'}
                        _hover={{
                          bg: 'primary.800',
                        }}
                        aria-label="Subscribe"
                        icon={<BiMailSend />}
                        type="submit"
                      />
                    </Flex>
                    <Box color="red.500">
                      <ErrorMessage name="email" component="small" />
                    </Box>
                  </FormControl>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      ) : (
        <Stack align={'flex-center'}>
          <Text fontWeight="bold" textAlign="center" mt={{ base: '2rem', md: 0 }} fontSize={['md', 'lg', 'xl']} mb={2}>
            Gracias, ya estas suscripto a nuestro Newsletter.
          </Text>
        </Stack>
      )}
    </Fragment>
  );
};

export default FormNewsletter;
