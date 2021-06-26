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

export const ApiService = ({endPoint='docs', method='get', body=null, headers=null}) => {
  const [data, setData] = useState(init)

  useEffect(() => {
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

  }, [/*body, endPoint, method, headers*/])

  return data
}
