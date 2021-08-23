import React from 'react';
import { Box, Button, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { testimonialSelectors } from '../../../../reducers/testimonialsReducer';
import Card from './TestimoniesCard';
import { ConditionalRender } from '../../../../components/Error/ErrorMsg';

const TestimoniesCardsList = ({ title }) => {
  const { testimonials } = useSelector(state => state)
  const allTestimonials = useSelector(testimonialSelectors.selectAll);

  const List = () => (
   <SimpleGrid
     mb={10}
     spacing={10}
     columns={[1, 2, 2, 4]}
   >
     {allTestimonials.slice(0, 4).map((data, i) =>
       <Card key={data.name + i} {...data} />
     )}
   </SimpleGrid>
  )

  return (
    <Box
      mb={['5rem', '10.625rem']}
    >
      <Text
        as="h2"
        fontSize="4xl"
        textAlign="center"
        fontWeight="bold"
        color="primary.400"
        mb={12}
      >
        {title}
      </Text>
      {ConditionalRender(testimonials.status, List, 'No se pudieron cargar los testimonios')}
      <Box mt="3rem" mx="auto" width="fit-content">
        <Link to="/testimonios">
          <Button
            bg="primary.400"
            color="white"
            _hover={{ bg: 'primary.500' }}
          >
            Ver todos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TestimoniesCardsList;
