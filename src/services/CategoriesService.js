import { ApiService } from './ApiService'

export const CategoriesService = () => {
  const example1 = ApiService({ endPoint: process.env.REACT_APP_API_CATEGORY})
  return 'hi'
}
