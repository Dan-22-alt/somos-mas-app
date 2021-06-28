import React from 'react';
import { Box, Button } from "@chakra-ui/react"

export const Activity = () => {
  return(
    <Box maxW='500px' bg="tomato" height="500px">
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Box>
  )
}
