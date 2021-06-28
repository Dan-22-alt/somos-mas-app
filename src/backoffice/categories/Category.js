import React from 'react';
import { Tr, Td } from "@chakra-ui/react"
import { CategoryButtons } from './CategoryButtons'

export const Category = ({name, created_at, id, deleteItem}) => {
  return(
    <Tr>
      <Td px={[1, 5, 10, 10]}>{name}</Td>
      <Td textAlign='center' px={[1, 5, 10, 10]}>{created_at.replace(/T.*/, '')}</Td>
      <Td px={[1, 5, 10, 10]}
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
      >
        <CategoryButtons id={id} deleteItem={deleteItem}/>
      </Td>
    </Tr>
  )
}
