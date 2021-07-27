import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import ButtDeleteSlide from './ButtDeleteSlide';

const Slide = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" w="400px" bg="purple.100" pb="10px" borderColor="teal">
      <Image
        borderRadius="lg"
        src="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
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
        Titulo
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" textAlign="center" my="8px" lineHeight="tight" isTruncated>
        Orden
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Button w="25vh" colorScheme="messenger" color="white" m="2px">
          Editar
        </Button>
        <ButtDeleteSlide />
      </Box>
    </Box>
  );
};

export default Slide;
