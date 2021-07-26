import React, { useEffect, useState } from 'react'
import { SimpleGrid, Container, Stack, Box } from "@chakra-ui/react";
import { getTestimonials } from '../../../../services/testimonialsService';
import CardTestimonialsPublic from './CardTestimonialsPublic'
import { Spinner } from "../../../../layout/Spinners";

const ListTestimonialsPublic = () => {

    const [testimonials, setTestimonials] = useState(null)
    const { res, error } = getTestimonials()

    useEffect(() => {
        setTestimonials(res)
        console.log(testimonials)
    }, [testimonials, res])

    return (
        <Container maxW="6xl">
            <Stack
                as={Box}
                textAlign="center"
            >
                <SimpleGrid
                    justifyItems="center"
                    columns={{ base: 1, md: 3 }}
                >
                    {testimonials?.success ? (
                        <>
                            {testimonials.data.map(data => (
                                <CardTestimonialsPublic key={data.id} {...data} />
                            ))}
                        </>
                    )
                        : (                           
                            <Spinner />
                        )}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}

export default ListTestimonialsPublic
