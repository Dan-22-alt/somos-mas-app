import getBase64 from './getBase64';

export const handleImage = formik => e => {
  const image = e.target.files[0];
  if (image) {
    getBase64(image)
      .then( image64 => formik.setFieldValue('image', image64))
      .catch( error => console.log('Error', error));
  }
};
