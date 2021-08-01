import { Box, Button, FormControl, FormLabel, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { CenterBox } from '../../../../components/CenterBox';
import { InputForm } from '../../../../components/InputForm';
import Spinners from '../../../../layout/Spinners';
import { getTestimonialsById } from '../../../../services/testimonialsService';
import { bodyGenerateWithName } from '../../../../utils/generateBody';
import getBase64 from '../../../../utils/getBase64';
import { AlertTestimonials } from './alertsTestimonioals';

const initialValues = {
  name: '',
  description: '',
  image: '',
};
const validationSchema = Yup.object({
  name: Yup.string().required('Name requerido').min(6, 'El nombre debe contener al menos 6 caracteres'),
  description: Yup.string()
    .required('Description requerido')
    .min(6, 'La descripcion debe contener al menos 6 caracteres'),
});

const FormTestimonials = () => {
  const { res, loading } = getTestimonialsById(111);
  const { fetchEdit, fetchCreate } = AlertTestimonials();

  const apiRes = res?.data;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (apiRes) {
        const body = bodyGenerateWithName(apiRes, values);
        fetchEdit(body);
      } else {
        fetchCreate(values);
      }
    },
  });

  useEffect(() => {
    if (res) {
      for (const key in formik.values) {
        formik.setFieldValue(key, apiRes[key]);
      }
    }
  }, [apiRes, formik, res]);

  const onFileChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      getBase64(image)
        .then((image64) => formik.setFieldValue('image', image64))
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <CenterBox>
      {loading ? (
        <Spinners />
      ) : (
        <>
          <Heading color="teal.400">{res ? 'Editar' : 'Nuevo'} testimonio</Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                {res ? (
                  <Text textAlign="center">{formik.values.name}</Text>
                ) : (
                  <InputForm name="name" label="example" formik={formik} />
                )}
                <FormControl id="image">
                  <FormLabel>Imagen</FormLabel>
                  <Box d="flex">
                    <input type="file" onChange={onFileChange} />
                    {formik.values.image && (
                      <Image src={formik.values.image} alt="imagen" width="100px" borderRadius="10%" m="auto" />
                    )}
                  </Box>
                </FormControl>
                <InputForm name="description" label="Description" formik={formik} />
                <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                  {res ? 'Editar' : 'Crear'}
                </Button>
              </Stack>
            </form>
          </Box>
        </>
      )}
    </CenterBox>
  );
};
export default FormTestimonials;
