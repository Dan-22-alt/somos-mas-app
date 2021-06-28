import React from 'react';
import { Button } from "@chakra-ui/react"

export const CategoryButtons = ({id, deleteItem}) => {
  const handleEdit = () => console.log(id, 'editing')
  const handleDelete = () => deleteItem(id)
  return(
    <>
      <Button
        colorScheme='cyan'
        m='1'
        onClick={handleEdit}
      >
        Edit
      </Button>
      <Button
        colorScheme='red'
        m='1'
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  )
}
