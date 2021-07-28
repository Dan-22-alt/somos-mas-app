import React from 'react';
import Dasboard from '../components/Dasboard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2PtsnvBGYSaCAebzkHyRVfpt94F9goJPOg&usqp=CAU',
      id: 3,
    },
    {
      Title: 'Testimonios',
      name: 'Testimonials',
      image:
        'data:image/png;base64,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',
      id: 4,
    },
    {
      Title: 'Organización',
      name: 'Organization',
      image:
        'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-organization-icon-png-image_4171233.jpg',
      id: 5,
    },
   
    {
      Title: 'Slides',
      name: 'Slides',
      image: 'https://www.clipartkey.com/mpngs/m/176-1765494_royalty-free-google-drawing-icon-google-slides-black.png',
      id: 6,
    },
    {
      Title: 'Usuarios',
      name: 'users',
      image:
        'data:image/png;base64,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',
      id: 7,
    },
    {
      Title: 'Miembros',
      name: 'Members',
      image: 'https://www.iconpacks.net/icons/1/free-users-icon-267-thumb.png',
      id: 8,
    },
  ],
};

const BackofficePage = () => {
  return (
    <Container>
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 8 }}>
        <div>
          <Header />
        </div>
        <Sidebar />
        <SimpleGrid justifyItems="center" mb="10rem" columns={{ base: 1, md: 3 }}>
          {Varios.data.map((vario) => (
            <Link key={vario.name} to={`/backoffice/${vario.name}`}>
              <Dasboard key={vario.id} name={vario.Title} image={vario.image} />
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default BackofficePage;
