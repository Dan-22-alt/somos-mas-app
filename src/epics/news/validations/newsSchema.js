import * as Yup from 'yup';

export const newsSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  content: Yup.string().required('El contenido es obligatorio'),
  image: Yup.mixed().required('La imagen es obligatoria'),
  category_id: Yup.string().required('La categoría es obligatoria'),
});
