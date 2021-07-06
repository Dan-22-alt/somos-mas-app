import { useEffect, useState } from "react";
import { ApiFetch } from '../../services/ApiService'

export const FetchSlicer = () => {
  const [slicers, setSlicers] = useState([])

  useEffect(() => {
    ApiFetch({endPoint:process.env.REACT_APP_API_SLIDE})
      .then(({res, error}) => {
        if(res) setSlicers(res.data.slice(0, 3))
        else console.log(error)
      })
  }, [])

  return slicers
}
