import * as Yup from "yup";

export const slideSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  description: Yup.string().required("La descripción es obligatorio"),
  image: Yup.mixed().required("La imagen es obligatoria"),
  order: Yup.string().required("El orden es obligatoria"),
});
