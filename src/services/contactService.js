import { ApiService, ApiGet } from './ApiService'

const endPoint = process.env.REACT_APP_API_CONTACT

export const getContact = () => ApiGet(endPoint)