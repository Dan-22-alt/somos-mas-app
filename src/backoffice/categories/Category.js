import React from 'react';
import { Tr, Td } from "@chakra-ui/react"
import { CategoryButtons } from './CategoryButtons'

export const Category = ({name, created_at, id, deleteItem}) => {
  return(
    <Tr>
      <Td>{name}</Td>
      <Td>{created_at.replace(/T.*/, '')}</Td>
      <Td
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
