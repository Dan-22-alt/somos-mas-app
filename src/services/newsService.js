import httpClient from '../utils/httpClient';

export function getNews() {
  return httpClient.get('/news').then((response) => response.data);
}

export function getNewsById(id) {
  return httpClient.get(`/news/${id}`).then((response) => response.data);
}

export function createNews(data) {
  return httpClient.post('/news', data).then((response) => response.data);
}

export function updateNews(id, data) {
  return httpClient.put(`/news/${id}`, data).then((response) => response.data);
}

export function deleteNews(id) {
  return httpClient.delete(`/news/${id}`).then((response) => response);
}
