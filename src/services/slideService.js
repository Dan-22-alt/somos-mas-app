import httpClient from '../utils/httpClient';

export function getSlide() {
  return httpClient.get('/slides').then((response) => response.data);
}

export function getSlideById(id) {
  return httpClient.get(`/slides/${id}`).then((response) => response.data);
}

export function createSlide(data) {
  return httpClient.post('/slides', data).then((response) => response.data);
}

export function updateSlide(id, data) {
  return httpClient.put(`/slides/${id}`, data).then((response) => response.data);
}

export function deleteSlide(id) {
  return httpClient.delete(`/slides/${id}`).then((response) => response.data);
}
