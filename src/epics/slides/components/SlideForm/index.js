import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useToast, Container, Image } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { newSlide, updateSlide } from '../../../../reducers/slicesReducer'
import { slideSchema } from '../../validations/slideSchema';
import getBase64 from '../../../../utils/getBase64';
import { useDispatch } from 'react-redux';


export default function SlideForm({ data }) {

  const defaultSlide = {
    name: '',
    description: '',
    image: '',
    order: '',
    id: ''
  };

  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch()

  const toast = useToast();
  let history = useHistory();

  const submitText = data?.id ? 'Guardar' : 'Crear';
  const formTitle = data?.id ? 'Editar Slide' : 'Crear Slide';

  const onSubmit = (values) => {
    if (data?.id){
      dispatch(updateSlide(values))
      toast({
        title: 'Slide editada.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push('/backoffice/slides');
    }else{
      dispatch(newSlide(values))
      toast({
        title: 'Slide creada.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push('/backoffice/slides');
    }
  };

  const formik = useFormik({
    initialValues: defaultSlide,
    validationSchema: slideSchema,
    onSubmit,
  });

  useEffect(() => {
    if (formik.values.image) {
      setPreviewImage(formik.values.image);
    }
  }, [formik.values.image]);

  useEffect(() => {
    if (data) {
      for (const key in formik.values) {
        formik.setFieldValue(key, data[key]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      getBase64(image)
        .then((image64) => formik.setFieldValue('image', image64))
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <Container>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
          <Heading color="teal.400" my="6">
            {formTitle}
          </Heading>
          <Box>
            <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl mt={2}>
                <FormLabel>Título</FormLabel>
                <Input
                  name="name"
                  type="text"
                  autoFocus
                  placeholder=""
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />

                {formik.errors.name ? (
                  <Box mt={2} fontSize="sm" color="red.500">
                    {formik.errors.name}
                  </Box>
                ) : null}
              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Imagen</FormLabel>
                <Input name="image" type="file" onChange={handleImage} />

                <div>
                  <Image src={previewImage ? previewImage : ''} alt="" h={40}/>
                </div>
                {formik.errors.image ? (
                  <Box mt={2} fontSize="sm" color="red.500">
                    {formik.errors.image}
                  </Box>
                ) : null}
              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Descripción</FormLabel>
                <Input
                  name="description"
                  type="text"
                  placeholder=""
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />

                {formik.errors.description ? (
                  <Box mt={2} fontSize="sm" color="red.500">
                    {formik.errors.description}
                  </Box>
                ) : null}
              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Order</FormLabel>
                <Input type="number" name="order" placeholder="" value={formik.values.order} onChange={formik.handleChange} />

                {formik.errors.order ? (
                  <Box mt={2} fontSize="sm" color="red.500">
                    {formik.errors.order}
                  </Box>
                ) : null}
              </FormControl>
              <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                {submitText}
              </Button>
            </Stack>
    </form>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
