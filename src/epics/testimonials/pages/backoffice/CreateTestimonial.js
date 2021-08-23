import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Button, FormControl, FormLabel, Heading, Image, Stack } from '@chakra-ui/react';

import { useToast } from '../../components/backoffice/useToast';
import { CenterBox } from '../../../../components/CenterBox';
import { createTestimonial, defaultOk } from '../../../../reducers/testimonialsReducer';
import { InputForm } from '../../../../components/InputForm';
import { handleImage }from '../../../../utils/handleImagen';

const initialValues = {
  name: '',
  description: '',
  image: '',
};

const validationSchema = Yup.object({
  name: Yup
    .string()
    .required('Name requerido')
    .min(6, 'El nombre debe contener al menos 6 caracteres'),
  description: Yup
    .string()
    .required('Description requerido')
    .min(6, 'La descripcion debe contener al menos 6 caracteres'),
});

const onSubmit = dispatch => values => dispatch(createTestimonial(values))

const FormTestimonials = () => {
  const dispatch = useDispatch()
  const testimonialStatus = useSelector(state => state.testimonials.status)
  const formik = useFormik({
    initialValues, validationSchema, onSubmit: onSubmit(dispatch)
  });

  const defaultState = () => dispatch(defaultOk())
  const onFileChange = handleImage(formik)
  const handleMsg = useToast(testimonialStatus, 'created', 'Testimonio Creado', 'Error al crear el testimonio', defaultState)
  // puse esto por que no retorna nada solo controla las alertas
  console.log(handleMsg)

  return (
    <CenterBox>
      <Heading color="teal.400">Nuevo testimonio</Heading>
      <Box minW={{ base: '90%', md: '468px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
            <InputForm name="name" label="Nombre" formik={formik} />
            <FormControl id="imagen">
              <FormLabel>Foto</FormLabel>
              <Grid
                templateColumns="repeat(1, 1fr)"
                gap='10px'
              >
                <input
                  type="file"
                  onChange={onFileChange}
                />
                {formik.values.image && (
                  <Image
                    src={formik.values.image}
                    alt="imagen"
                    w="100%"
                    maxH={{ base: '90%', md: '458px' }}
                    objectFit='cover'
                    borderRadius="10px"
                    m="auto"
                  />
                )}
              </Grid>
            </FormControl>
            <InputForm name="description" label="Descripción" formik={formik} />
            <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
              Crear
            </Button>
          </Stack>
        </form>
      </Box>
    </CenterBox>
  );
};
export default FormTestimonials;
