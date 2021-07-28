import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { SmartPicture } from './../../../components/Card/SmartPicture';
import Description from './../../nosotros/components/Description';
import {AiOutlineArrowRight } from "react-icons/ai";

const CardActivityPublic = ({ image, name, content }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" w={[350]} pb="10px" boxShadow="lg" p="1rem" m="2">
    <SmartPicture src={image} />
    <Box>
      <Box
        mt="1"
        fontWeight="semibold"
        fontSize="20px"
        color="primary.200"
        as="h4"
        textAlign="center"
        my="8px"
        lineHeight="tight"
        isTruncated
      >
        {name}
      </Box>
      <Box>
        <Description isTruncated text={content}></Description>  
      </Box>
      <Button colorScheme="teal" mt="5" size="sm" rightIcon={<AiOutlineArrowRight />}>
          Ver más
      </Button>
    </Box>
  </Box>

  );
};

export default CardActivityPublic;