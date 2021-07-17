import React, { useEffect, useState } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

const example = [
  {
    title: 'Esto es un ejemplo',
    description: 'Esto es una descripción',
    image: 'https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg'
  }, {
    title: '',
    description: 'esto es otro ejemplo',
    image: 'mmmmm'
  }
]

export const MainSlide = () => {
  const [data, setData] = useState(null)
  const color = 'gray.50'

  useEffect(() => {
    setTimeout(()=> {
      const response = example[0]
      setData(() => ({
        src: response.image,
        title: response.title,
        description: response.description
      }))
    }, 3000)
  }, [setData])

  return (
    <Box
      h={['10rem', '15rem', '17.5rem', '20rem']}
      mt='18'
      bg='cyan.100' // borrar
      objectFit="cover"
      backgroundImage={data?.src}
      backgroundSize='cover'
    >
      <Stack
        textAlign='center'
        direction="column"
        w='100%'
        h='100%'
        justifyContent='center'
      >
        <Text
          as='h2'
          fontSize={['1.5rem', '3rem']}
          color={color}
        >
          {data?.title}
        </Text>
        <Text
          as='h2'
          fontSize={['1.5rem', '2rem']}
          color={color}
        >
          {data?.description}
        </Text>
      </Stack>
    </Box>
  )
}
