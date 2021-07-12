import { ApiService, ApiGet } from './ApiService'

const endPoint = process.env.REACT_APP_API_TESTIMONIAL

export const getTestimonials = () => ApiGet(endPoint)

export const getTestimonialsById = id => ApiGet(endPoint + `/${id}`)

export const createTestimonials = () => {
  const [data, apiFetch] = ApiService()
  const post = ({name, image, description}) => (
    apiFetch({
      endPoint,
      method: 'post',
      body: {name, image, description}
    })
  )
  return [data, post]
}

export const editTestimonials = () => {
  const [data, apiFetch] = ApiService()
  const put = ({id, ...rest}) => (
    apiFetch({
      endPoint: endPoint + `/${id}`,
      method: 'put',
      body: rest
    })
  )
  return [data, put]
}


export const deleteTestimonials = () => {
  const [data, apiFetch] = ApiService()
  const deleteFetch = id => (
    apiFetch({
      endPoint: endPoint + `/${id}`,
      method: 'delete',
    })
  )
  return [data, deleteFetch]
}
