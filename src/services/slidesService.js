import { ApiService, ApiGet } from './ApiService'

const endPoint = process.env.REACT_APP_API_SLIDE

export const getSlides= () => ApiGet(endPoint)
export const getSlideById = id => ApiGet(endPoint + `/${id}`)

export const deleteSlide = () => {
  const [data, apiFetch] = ApiService()
  const deleteSlide = id => apiFetch({endPoint: endPoint + `/${id}`, method: 'delete'})
  return [data, deleteSlide]
}

export const createSlide = () => {
  const [data, apiFetch] = ApiService()
  const createSlide = async ({name, description, image, order}) => {
    apiFetch({
      endPoint, method: 'post',
      body: { name, description, order, image},
    })
  }
  return [data, createSlide]
}


export const editSlide = () => {
  const [data, apiFetch] = ApiService()
  const editSlide = ({id, ...body}) =>{
    apiFetch({
      endPoint: endPoint + `/${id}`,
      method: 'put',
      // name, description, order, image
      body: body
    })
  }
  return [data, editSlide]
}
