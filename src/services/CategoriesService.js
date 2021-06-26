import { ApiService } from './ApiService'

const endPoint = process.env.REACT_APP_API_CATEGORY

export const CategoriesService = {
  getList : () => ApiService({endPoint}),

  getCategory : id =>  ApiService({endPoint: endPoint + `/${id}`}),

  deleteCategory : id =>
    ApiService({endPoint: endPoint + `/${id}`, method: 'delete'}),

  createCategory : ({name, description, image, parent_category_id,}) =>
    ApiService({
      endPoint,
      method: 'post',
      body: { name, description, parent_category_id }
    }),

  editCategory : ({id, name, description, parent_category_id, image}) =>
    ApiService({
      endPoint: endPoint + `/${id}`,
      method: 'put',
      body: { name, description, parent_category_id }
    })
}
