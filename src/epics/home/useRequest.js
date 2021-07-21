import { useEffect, useState } from 'react'
import { getNews } from '../../services/newsService'
import { getTestimonials } from '../../services/testimonialsService'

const init = {
  res: [],
  loading: true,
  error: null
}

const set = async (request, set) => {
  try {
    const { data } = await request()
    set({res: [...data].slice(0, 4), loading: false, error: null})
  } catch(error){
    set({res: [1, 2, 3, 4], loading: false, error})
  }
}

export const UseRequest = () => {
  const [news, setNews] = useState(init)
  const [testimonials, setTestimonials] = useState(init)
  const {res, error} = getTestimonials()

  useEffect( () => {
    set(getNews, setNews)
  }, [])


  useEffect(()=>{
    if(res) {
      setTestimonials( prev => ({
        ...prev,
       loading: false,
        res: [...res.data].slice(0, 4)
      }))
    }
    if(error){
      setTestimonials({res: [1, 2, 3, 4], loading: false, error})
      console.log(error)
    }
  }, [res, error])


  return{news, testimonials}
}
