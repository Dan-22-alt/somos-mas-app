import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Parallax } from 'react-parallax';

// aca va una imagen por defecto
const imageDefault = 'imagen';

//este componente recibe el titulo y la imagen
const Title = ({ title = 'Título', image = imageDefault }) => {
  return (
    <>
      <Parallax
        blur={4}
        bgImage={image}
        bgImageAlt={image}
        //profundidad del efecto parallax
        strength={400}
        bgImageStyle={{ width: '100%' }}
        bgImageSize={{ width: '100px', height: '100px' }}
        x={[-20, 20]}
        y={[-20, 20]}
        tagOuter="figure"
        style={{ height: '110px' }}
      >
        <Heading align="center" as="h1" mx={'auto'} my={6} size="3xl">
          {title}
        </Heading>
      </Parallax>
    </>
  );
};

export default Title;
