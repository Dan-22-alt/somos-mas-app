import * as yup from 'yup';

export const initialValues = {
  sliderText1: '',
  sliderText2: '',
  sliderText3: '',
  sliderFile1: null,
  sliderFile2: null,
  sliderFile3: null,
  welcomeGreeting: '',
}
export const validationSchema = yup.object({
  welcomeGreeting:
    yup.string().min(20, 'La bienvenida debe tener al menos 20 caracteres')
})
export const onSubmit = values => {
  console.log(values)
}
