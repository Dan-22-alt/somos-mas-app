import React from 'react';
import { Box } from '@chakra-ui/react';
import { SmartPicture } from '../../../../components/Card/SmartPicture';
import Description from '../../../nosotros/components/Description';

const CardTestimonialsPublic = ({ name, image, description }) => {
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
          <Description text={description}></Description>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTestimonialsPublic;
