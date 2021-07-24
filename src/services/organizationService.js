import httpClient from '../utils/httpClient';
import { ApiGet } from './ApiService';

const endPoint = process.env.REACT_APP_API_ORGANIZATION;

export const getData = () => ApiGet(endPoint);

export function getOrganization() {
  return httpClient.get('/organization').then((response) => response.data.data[0]);
}

export function edit(data) {
  return httpClient
    .post(`/organization`, data)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
}
