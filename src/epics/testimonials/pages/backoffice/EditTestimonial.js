import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Grid, Box, Button, FormControl, FormLabel, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { useToast } from '../../components/backoffice/useToast';
import { editTestimonialByID, defaultOk } from '../../../../reducers/testimonialsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { CenterBox } from '../../../../components/CenterBox';
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

const FormTestimonials = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { ids, entities, status } = useSelector(state => state.testimonials)
  const defaultState = () => dispatch(defaultOk())
  const handleMsg = useToast(status, 'edited', 'Testimonio Editado exitosamente', 'Error al editar el testimonio', defaultState)

  console.log(handleMsg)

  const onSubmit = data => {
    let values = {
      name: data.name,
      description: data.description
    }
    if(entities[id].image !== data.image){
      values = {...values, image: data.image}
    }
    dispatch(editTestimonialByID({id, values}))
  }

  const formik = useFormik({
    initialValues, validationSchema, onSubmit
  })

  useEffect(()=> {
    if(ids.length !== 0){
      if(ids.some(testiID => testiID === ~~id)){
        for (const key in formik.values) {
          formik.setFieldValue(key, entities[id][key]);
        }
      }
      else {
        history.push('/backoffice/testimonials/create')
      }
    }
    // eslint-disable-next-line
  }, [ids, entities ])

  const onFileChange = handleImage(formik)

  return (
    <CenterBox>
      <Heading color="teal.400">Editar testimonio</Heading>
      <Box minW={{ base: '90%', md: '468px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
            <Text textAlign="center">{formik.values.name}</Text>
            <FormControl id="image">
              <FormLabel>Imagen</FormLabel>
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
            <InputForm name="description" label="Description" formik={formik} />
            <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
              Editar
            </Button>
          </Stack>
        </form>
      </Box>
    </CenterBox>
  );
};
export default FormTestimonials;
