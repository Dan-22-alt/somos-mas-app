import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import ButtDeleteSlide from './ButtDeleteSlide';

const Slide = ({ name, image, order, id, handleDelete, handleEdit }) => {

  return (
    <Box borderWidth="1px" borderRadius="lg" w="400px" bg="purple.100" pb="10px" borderColor="teal">
      <Image
        borderRadius="lg"
        src={image}
        alt="imagen"
        objectFit="cover"
        h="350px"
        w="400px"
        p="3px"
      />
      <Box
        mt="1"
        fontWeight="semibold"
        fontSize="20px"
        as="h4"
        textAlign="center"
        my="8px"
        lineHeight="tight"
        isTruncated
      >
        {name}
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" textAlign="center" my="8px" lineHeight="tight" isTruncated>
        <p>Orden: {order}</p>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Button w="25vh" colorScheme="messenger" color="white" m="2px" onClick={() => {handleEdit(id)}}>
          Editar
        </Button>
        <ButtDeleteSlide handleDelete={handleDelete} id={id}/>
      </Box>
    </Box>
  );
};

export default Slide;
