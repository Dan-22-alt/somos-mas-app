import React from 'react';
import { SimpleGrid, Container, Stack, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CardTestimonialsPublic from './TestimonialCard';
import { ConditionalRender } from '../../../../components/Error/ErrorMsg';
import { testimonialSelectors } from '../../../../reducers/testimonialsReducer';

const ListTestimonialsPublic = () => {
  const allTestimonials = useSelector(testimonialSelectors.selectAll);
  const { testimonials } = useSelector(state => state)

  const List = () => (
    allTestimonials.map(data =>
      <CardTestimonialsPublic key={data.id} {...data} />
    )
  )

  return (
    <Container maxW="6xl">
      <Stack as={Box} textAlign="center">
        <SimpleGrid justifyItems="center" columns={{ base: 1, md: 3 }}>
          {ConditionalRender(testimonials.status, List, 'hola')}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default ListTestimonialsPublic;
