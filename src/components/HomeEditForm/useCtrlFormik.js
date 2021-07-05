import * as yup from 'yup';

export const initialValues = {
  welcomeGreeting: '',
  sliderText1: '',
  sliderFile1: null,
  sliderText2: '',
  sliderFile2: null,
  sliderText3: '',
  sliderFile3: null,
}
export const validationSchema = yup.object({
  welcomeGreeting:
    yup.string().min(20, 'La bienvenida debe tener al menos 20 caracteres')
})
export const onSubmit = values => {
  console.log(values)
}
