import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, WrapItem, Center, Wrap } from "@chakra-ui/react"



export const CategoriesPage = () => {
  const [categories, setCategories] = useState({
    loading: true,
    res: null,
    error: ''
  })

  useEffect(() => {
    fetch('http://ongapi.alkemy.org/api/categories')
      .then(r => r.json())
      .then(r => setCategories(prevState =>
        ({...prevState, res: r.data, loading: false})))
      .catch( error => setCategories(prevState =>
        ({...prevState, error, loading: false}) ))
  }, [])

  console.log()
  return (
    <Wrap>
    </Wrap>
  )
}

//      {categories.map( category => <Category />)}
