import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { SmartPicture } from './SmartPicture';
import { ButtonsCard } from './ButtonsCard';

export const Card = ({ name, id, image, description, handleEdit, handleDelete, children, activity, handleViews }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" p="1rem">
      <SmartPicture src={image} />
      <Box pt={4}>
        <Box fontWeight="semibold" fontSize="20px" as="h4" textAlign="center" mb={4} lineHeight="tight" isTruncated>
          {name}
        </Box>
        {description && (
          <Box fontSize="16px" as="p" textAlign="center" mb={7} lineHeight="tight" isTruncated>
            {description}
          </Box>
        )}
        {children}
        {handleDelete && handleEdit ? (
          <ButtonsCard id={id} handleDelete={handleDelete} handleEdit={handleEdit} />
        ) : null}
        {activity && (
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
            onClick={() => handleViews(activity)}
          >
            Detalles
          </Button>
        )}
      </Box>
    </Box>
  );
};
