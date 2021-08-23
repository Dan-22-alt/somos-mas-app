import { Box, Spinner as SpinnerChakra } from '@chakra-ui/react';
import React from 'react';

const Spinners = () => {
  return (
    <SpinnerChakra label="Cargando" thickness="5px" speed="0.55s" emptyColor="gray.200" color="primary.400" size="xl" />
  );
};

export const Spinner = ({ ...rest }) => (
  <Box w="100%" {...rest} display="flex" alignItems="center" justifyContent="center">
    <Spinners />
  </Box>
);

export default Spinners;
