import httpClient from '../utils/httpClient';

const endPoint = process.env.REACT_APP_API_TESTIMONIAL;

export const getTestimonials = () => (
  httpClient
    .get(endPoint)
    .then( response => response.data.data)
)
export const deleteTestimonials = id => (
  httpClient
    .delete(endPoint + `/${id}`)
)
export const createTestimonials = data => (
  httpClient
    .post(endPoint, data)
    .then(res => res.data.data)
)
export const editTestimonial = (id, values) => (
  httpClient
    .put(endPoint + `/${id}`, values)
    .then(res => res.data.data)
)
