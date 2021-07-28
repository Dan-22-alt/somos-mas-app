import React from 'react';
import Dasboard from '../components/Dasboard';
import Header from '../components/Header';
import { Box, Container, SimpleGrid, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Varios = {
  Title: 'BackOffice',
  data: [
    {
      Title: 'Novedades',
      name: 'News',
      image: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-newspaper-11.png',
      id: 1,
    },
    {
      Title: 'Actividades',
      name: 'Activities',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RfhBTn8WTI4sC78OZjEKuttNxyFbOyl-r64bRIalKTuYV2DNd1RRB5Un_7w3SPwJLfo&usqp=CAU',
      id: 2,
    },
    {
      Title: 'Categorias',
      name: 'Categories',
      image: 'https://icon-library.com/images/icon-category/icon-category-5.jpg',
      id: 3,
    },
    {
      Title: 'Contacto',
      name: 'Contact',
      image:
        'data:image/png;base64,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',
      id: 4,
    },
    {
      Title: 'Miembros',
      name: 'Members',
      image: 'http://simpleicon.com/wp-content/uploads/multy-user.svg',
      id: 5,
    },
    {
      Title: 'Organización',
      name: 'Organization',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Organization_icon.svg/1024px-Organization_icon.svg.png',
      id: 6,
    },
    {
      Title: 'Testimonios',
      name: 'Testimonials',
      image:
        'data:image/png;base64,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',
      id: 7,
    },
    {
      Title: 'Slides',
      name: 'Slides',
      image: 'https://image.flaticon.com/icons/png/512/104/104120.png',
      id: 8,
    },
  ],
};

const BackofficePage = () => {
  return (
    <>
      <Header />
      <Container>
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 8 }}>
          <SimpleGrid justifyItems="center" mb="10rem" columns={{ base: 1, md: 3 }}>
            {Varios.data.map((vario) => (
              <Link key={vario.name} to={`/backoffice/${vario.name}`}>
                <Dasboard key={vario.id} name={vario.Title} image={vario.image} />
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
  </>
  );
};

export default BackofficePage;
