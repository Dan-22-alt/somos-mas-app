import { useState } from "react"
import axios from "axios"

const Api_Alkemy = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://ongapi.alkemy.org/docs'
})

export const ApiService = () => {
  const [data, setData] = useState({
    data: null,
    loading: false,
    error: ''
  })

  Api_Alkemy
    .get('')
    .then(res => setData(res.data))
    .catch()

  return data
}
