import * as yup from 'yup';

export const initialValues = {
  welcomeGreeting: '',
  sliderText1: '',
  sliderText2: '',
  sliderText3: '',
  sliderFile1: null,
  sliderFile2: null,
  sliderFile3: null,
}
export const validationSchema = yup.object({
  welcomeGreeting:
    yup.string().min(20, 'La bienvenida debe tener al menos 20 caracteres')
})

const handleSlider = (dataFromApi, values, keys, apiEdit) => {

  for(let i = 0, j = 3; j < keys.length; i++, j++){
    const newDescription = values[keys[i]]
    const image = values[keys[j]]
    const {description, id, name} = dataFromApi[i]

    if(image || newDescription !== description){
      const body = {
        ...(image ? {image, name} : {}),
        ...(newDescription !== description ? {description: newDescription, name} : {})
      }
      apiEdit({...body, id})
    }
  }
}

const handleWelcomeGreeting = welcomeGreeting =>{
  if(welcomeGreeting) {
    console.log('editar welcome')
  /*
    To do
    Como no se de donde sacar el welcome no lo puse
  */
  }
}

export const onSubmit = (slidersFromApi, apiEdit) => values => {
  const [welcomeKey, ...slidersKeys] = Object.keys(initialValues)
  handleSlider(slidersFromApi, values, slidersKeys, apiEdit)
  handleWelcomeGreeting(values[welcomeKey])
}
