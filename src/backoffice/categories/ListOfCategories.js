import React, { useState, useEffect } from 'react';
import { Center,  Table, Thead, Tfoot, Tbody, Tr, Th } from "@chakra-ui/react"
import { Category } from './Category'
import { CategoriesService } from '../../services/CategoriesService'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState({res: null, error: null})

  useEffect(() => {
    CategoriesService
      .getList()
      .then(r => setCategories(r))
  }, [])

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
          {categories?.res?.data.map( category =>
            <Category key={category.name} {...category}/>
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
