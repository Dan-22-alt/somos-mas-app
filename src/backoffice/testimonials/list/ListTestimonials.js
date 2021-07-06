import React from "react";
import data from "./testimonialsMockData";
import { Container, SimpleGrid, Button } from "@chakra-ui/react";
import TestimonialCard from "./components/TestimonialCard";
import { Link } from "react-router-dom";
const ListTestimonials = () => {
	return (
		<Container maxWidth="1024px" my={10}>
			<Link to="/backoffice/testimonials/create">
				<Button colorScheme="teal">Crear testimonio</Button>
			</Link>
			<SimpleGrid columns={{ lg: 3, sm: 2, base: 1 }} spacing={4}>
				{data.map(testimonial => (
					<TestimonialCard key={testimonial.id} {...testimonial} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default ListTestimonials;
