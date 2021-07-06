import * as yup from 'yup';
import { ApiFetch } from '../../services/ApiService';

export const initialValues = {
  sliderText1: '',
  sliderText2: '',
  sliderText3: '',
  welcomeGreeting: '',
  sliderFile1: null,
  sliderFile2: null,
  sliderFile3: null,
}
export const validationSchema = yup.object({
  welcomeGreeting:
    yup.string().min(20, 'La bienvenida debe tener al menos 20 caracteres')
})

const isSameStr = (sliders, values, index, keys) =>
  sliders[index].description !== values[keys[index]]

const handleSliderText = (sliders, values) => {
  const path = process.env.REACT_APP_API_SLIDE + '/'
  const keys = Object.keys(initialValues).slice(0, 3)
  let endPoint

  for(let i = 0; i < keys.length; i++){
    if(isSameStr(sliders, values, i, keys)){
      const {id, name} = sliders[i]
      const body = {name, description: values[keys[i]]}
      endPoint = path + id
      ApiFetch({endPoint, body, method:'put'}).then(r => console.log(r))
    }
  }
}

const handleWelcomeGreeting = welcomeGreeting =>{
  if(welcomeGreeting) console.log('editar welcome')
}

const handleFiles = (values) => {
  const keys = Object.keys(initialValues).slice(4)
  for(const key of keys){
    if(values[key]){
      console.log(values[key], 'file')
    }
  }
}

export const onSubmit = sliders => values => {
  handleSliderText(sliders, values)
  handleWelcomeGreeting(values.welcomeGreeting)
  handleFiles(values)
}
