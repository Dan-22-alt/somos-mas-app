import { useState, useEffect } from 'react'
import axios from 'axios'

const Api_Alkemy = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://ongapi.alkemy.org/docs'
})

const init = {
  res: null,
  error: ''
}

export const ApiService = () => {
  const [data, setData] = useState(init)

  useEffect(() => {

    Api_Alkemy
      .get('')
      .then(res => setData({...init, res: res.data}))
      .catch(error => setData({...init, error}))

  }, [])

  return data
}
