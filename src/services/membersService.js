import httpClient from '../utils/httpClient';

export function getAll() {
  return httpClient
    .get(`/members`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
}

export function getMember(id) {
  return httpClient
    .get(`/members/` + id)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
}

export function edit(id, data) {
  return httpClient
    .put(`/members/` + id, data)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
}

export function deleteMember(id) {
  return httpClient
    .delete(`/members/` + id)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
}

export function create(data) {
  return httpClient
    .post(`/members`, data)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
}
