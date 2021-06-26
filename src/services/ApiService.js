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
      .then(res => setData(prevState =>
        ({...prevState , res: res.data})
      ))
      .catch(error => setData(prevState =>
        ({...prevState, error})
      ))
      .then(() => setData(prevState =>
        ({...prevState, loading: false})
      ))

  }, [/*body, endPoint, method, headers*/])

  return data
}
