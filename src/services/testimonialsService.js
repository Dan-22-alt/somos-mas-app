import { ApiGet, ApiService } from './ApiService';
import httpClient from '../utils/httpClient';

const endPoint = process.env.REACT_APP_API_TESTIMONIAL;

export const getTestimonials = () => (
  httpClient
    .get('/testimonials')
    .then( response => response.data.data)
)

export const deleteTestimonials = id => (
  httpClient
    .delete('/testimonials/' + id)
    .then( response => response.data )
)

export const getTestimonialsById = (id) => ApiGet(endPoint + `/${id}`);

export const createTestimonials = () => {
  const [data, apiFetch] = ApiService();
  const post = ({ name, image, description }) =>
    apiFetch({
      endPoint,
      method: 'post',
      body: { name, image, description },
    });
  return [data, post];
};

export const editTestimonials = () => {
  const [data, apiFetch] = ApiService();
  const put = ({ id, ...rest }) =>
    apiFetch({
      endPoint: endPoint + `/${id}`,
      method: 'put',
      body: rest,
    });
  return [data, put];
};
