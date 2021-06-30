import React from 'react';
import { Box, Button } from "@chakra-ui/react"

export const ActivityButtons = ({id, deleteItem}) => {
  const handleEdit = () => console.log(id, 'editing')
  const handleDelete = () => deleteItem(id)

  return(
    <Box
      display='flex'
      justifyContent='center'
    >
      <Button
        colorScheme='cyan'
        color='white'
        onClick={handleEdit}
        m='2px'
      >
        Edit
      </Button>
      <Button
        m='2px'
        onClick={handleDelete}
        colorScheme='red'
      >
        Delete
      </Button>
    </Box>
  )
}
