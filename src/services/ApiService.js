import { useState, useEffect } from 'react'
import axios from 'axios'

const Api_Alkemy = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

const init = {
  res: null,
  loading: true,
  error: ''
}

export const ApiGet = (endPoint='docs') => {
  const [data, setData] = useState(init)

  useEffect(() => {
    const token = localStorage.getItem('token')
      ? {Authentication: localStorage.getItem('token')}
      : {}

    Api_Alkemy(endPoint, null, token)
      .then(({data}) => setData(prevState =>
        ({...prevState , res: data, loading: false})
      ))
      .catch(error => setData(prevState =>
        ({...prevState, error, loading: false})
      ))

  }, [endPoint])

  return data
}

export const ApiService = () => {
  const [data, setData] = useState(init)

  const ApiFetch = ({endPoint='docs', method='get', body=null, headers=null}) => {
    const token = localStorage.getItem('token')
      ? {Authentication: localStorage.getItem('token')}
      : {}

    Api_Alkemy[method](endPoint, body, {...headers, ...token})
      .then(({data}) => setData(prevState =>
        ({...prevState , res: data, loading: false})
      ))
      .catch(error => setData(prevState =>
        ({...prevState, error, loading: false})
      ))
  }

  return [data, ApiFetch]
}
