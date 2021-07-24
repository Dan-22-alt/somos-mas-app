import * as Yup from 'yup';

export const memberSchema = Yup.object({
  name: Yup.string().min(3, 'Debe tener minimo 3 caracteres').required('Campo Requerido'),
  image: Yup.string().required('Campo requerido'),
  description: Yup.string().required('Campo Requerido'),
  facebookUrl: Yup.string().url('Ingresa una URL valida!').required('Campo Requerido'),
  linkedinUrl: Yup.string().url('Ingresa una URL valida!').required('Campo Requerido'),
});
