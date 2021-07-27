import React, { useEffect, useState } from 'react';
import { getSlides } from '../../../../services/slideService';
import Slider from './Slider';

export const MainSlide = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    getSlides().then((response) => {
      setSlides(response.data);
    });
  }, []);

  if (slides.length === 0) {
    return null;
  }

  return <Slider slides={slides} />;
};
