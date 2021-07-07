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
  const createSlide = (/*{name, description, image, parent_category_id}*/) =>
    apiFetch({
      endPoint, method: 'post',
      //body: { name, description, parent_category_id, /* image,*/},
    })
  return [data, createSlide]
}


export const editSlide = () => {
  const [data, apiFetch] = ApiService()
  const editSlide = ({id}/*{id, name, description, parent_category_id, image}*/) =>
    apiFetch({
      endPoint: endPoint + `/${id}`,
      method: 'put',
      //body: { name, description, parent_category_id, /*image*/ }
    // checkear el tema de las imagenes
    })
  return [data, editSlide]
}
