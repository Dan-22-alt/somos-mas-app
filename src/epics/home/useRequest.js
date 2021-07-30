import { useEffect, useState } from 'react';
import { getTestimonials } from '../../services/testimonialsService';

const init = {
  res: [],
  loading: true,
  error: null,
};

export const UseRequest = () => {
  const [testimonials, setTestimonials] = useState(init);
  const { res, error } = getTestimonials();

  useEffect(() => {
    if (res) {
      setTestimonials((prev) => ({
        ...prev,
        loading: false,
        res: [...res.data].slice(0, 4).reverse(),
      }));
    }
    if (error) {
      setTestimonials({ res: [1, 2, 3, 4], loading: false, error });
      console.log(error);
    }
  }, [res, error]);

  return testimonials;
};
