import { useEffect, useState } from 'react';
import { getSlides } from '../../../../services/slidesService';

export const FetchSlicer = () => {
  const [slicers, setSlicers] = useState([]);
  const { res, error } = getSlides();

  useEffect(() => {
    if (res?.data) setSlicers(res.data.slice(0, 3));
    if (error) console.log(error);
  }, [res, error]);

  return slicers;
};
