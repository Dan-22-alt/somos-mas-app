import { ApiService } from './ApiService'

export const CategoriesService = () => {
  const endPoint = process.env.REACT_APP_API_CATEGORY

  return {
    getList: () =>
      ApiService({endPoint}),
    getCategory: id =>
      ApiService({endPoint: endPoint + `/${id}`}),
    createCategory: ({name, description, image, parent_category_id,}) =>
      ApiService({endPoint, method: 'post', body:{name, description, parent_category_id}})
    //editCategory: ({})
  }
}
