import httpClient from '../utils/httpClient';

export function getContact() {
  return httpClient
    .get('/contacts')
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      alert('Error del servidor al recuperar datos de contacto');
      window.location.assign('/');
    });
}
