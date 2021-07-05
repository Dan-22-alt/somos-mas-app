import { ApiService, ApiFetch } from './ApiService'

const endPoint = process.env.REACT_APP_API_CATEGORY

export const CategoriesService = {
  getList : () => ApiFetch({endPoint}),
  getCategory : id => ApiFetch({endPoint: endPoint + `/${id}`}),

  delete : () => {
    const [data, apiFetch] = ApiService()
    const deleteCategory = id => apiFetch({endPoint: endPoint + `/${id}`, method: 'delete'})
    return [data, deleteCategory]
  },

  post: () => {
    const [data, apiFetch] = ApiService()
    const createCategory = ({name, description, image, parent_category_id}) =>
      apiFetch({
        endPoint, method: 'post',
        body: { name, description, parent_category_id, /* image,*/},
      // checkear el tema de las imagenes
      })
    return [data, createCategory]
  },

  put: () => {
    const [data, apiFetch] = ApiService()
    const editCategory = ({id, name, description, parent_category_id, image}) =>
      apiFetch({
        endPoint: endPoint + `/${id}`,
        method: 'put',
        body: { name, description, parent_category_id, /*image*/ }
      // checkear el tema de las imagenes
      })
    return [data, editCategory]
  }
}
