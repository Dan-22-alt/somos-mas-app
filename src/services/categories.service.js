import httpClient from '../utils/httpClient';

export function getCategories() {
  return httpClient.get('/categories').then((response) => response.data);
}
