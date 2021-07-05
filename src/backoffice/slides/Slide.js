import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react"

const Slide = () => {
    return (
        <Box
        borderWidth="1px"
        borderRadius="lg"
        minW='400px'
        maxW='450px'
        bg="purple.100"
        pb='10px'
      >
        <Image
          borderRadius="lg"
        //   src={image}
        //   alt={name}
          objectFit='cover'
          h='350px'
          p='3px'
        />
        <Box
          mt="1"
          fontWeight="semibold"
          fontSize='20px'
          as="h4"
          textAlign='center'
          my='8px'
          lineHeight="tight"
          isTruncated
        >
          Titulo
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          textAlign='center'
          my='8px'
          lineHeight="tight"
          isTruncated
        >
      Orden
        </Box>
        <Button>Delete</Button>
        <Button>Edit</Button>
      </Box>
    )
}

export default Slide
