import React, { useEffect, Fragment } from 'react';
import { Box, Container, SimpleGrid, Stack } from '@chakra-ui/react';
import Title from '../../components/Title';
import { useSelector, useDispatch } from 'react-redux';
import { ObtenerNovedades } from '../../reducers/newsBackofficeReducer';
import { Spinner } from '../../layout/Spinners';
import NewsCardPublic from './components/NewsCardPublic';
import { Link } from 'react-router-dom';
import NewsSearchBar from './components/NewsSearchBar';

const Index = () => {
  const dispatch = useDispatch();
  const imagen = 'https://image.shutterstock.com/image-photo/text-sign-showing-update-motivational-600w-1326093911.jpg';
  const { news: newsData, status: newsStatus } = useSelector((state) => state.news);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(ObtenerNovedades());
    }
  }, [newsStatus, dispatch]);

  return (
    <Container>
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 8 }}>
        <Title title="Novedades" image={imagen} />
        <NewsSearchBar />
        <SimpleGrid justifyItems="center" mb="10rem" columns={{ base: 1, md: 3 }}>
          {newsStatus === 'succeeded' ? (
            newsData.map((ne) => (
              <Link key={ne.id} to={`/novedades/${ne.id}`}>
                <NewsCardPublic data={ne} />
              </Link>
            ))
          ) : (
            <Fragment>
              <Spinner /> <Spinner />
              <Spinner /> <Spinner />
            </Fragment>
          )}
          {newsStatus === 'failed' ? <span>Error al cargar las novedades</span> : <span></span>}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Index;
