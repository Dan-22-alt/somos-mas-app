import React, { useEffect, useState } from 'react';
import { Center,  Table, Thead, Tfoot, Tbody, Tr, Th } from "@chakra-ui/react"
import { Category } from './Category'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState({
    loading: true, res: [], error: ''
  })

  useEffect(() => {
    fetch('http://ongapi.alkemy.org/api/categories')
      .then(r => r.json())
      .then(r => setCategories(prevState =>
        ({...prevState, res: r.data, loading: false})))
      .catch( error => setCategories(prevState =>
        ({...prevState, error, loading: false}) ))
  }, [])

  const deleteItem = id => setCategories(prevState =>
    ({...prevState, res: prevState.res.filter(item => item.id !== id)}))

  return (
    <Center
      m='auto'
      mt='150px'
      mb='30px'
      w={["100%", "85%", "80%", "50%"]}
      bg="gray.400"
    >
      <Table variant='simple'>

        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Created at</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {categories?.res.map( category =>
            <Category key={category.name} {...category} deleteItem={deleteItem}/>
          )}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Created at</Th>
            <Th>Actions</Th>
          </Tr>
        </Tfoot>

      </Table>
    </Center>
  )
}
