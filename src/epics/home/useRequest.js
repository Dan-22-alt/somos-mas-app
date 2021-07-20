import { useEffect, useState } from 'react'

const init = {
  res: [],
  loading: true,
  error: null
}

export const useRequest = () => {
  const [news, setNews] = useState(init)
  const [testimonials, setTestimonials] = useState(init)


  useEffect(()=>{
    setTimeout(()=> {

      // success
      setTestimonials({res: [1, 2, 3, 4], loading: false, error: null})
    }, 5000)
  }, [])


  useEffect(()=>{

  }, [])


  return{news, testimonials}
}
