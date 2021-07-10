import httpClient from "../utils/httpClient";

export function getData(id) {
  return httpClient
    .get(`/members/` + id)
    .then((response) => response.data)
    .catch(e => {
      console.log(e)
      return e
    });
}

export function edit(id, data) {
  return httpClient
    .put(`/members/`+id, data)
    .then((response) => response.data)
    .catch(e => {
      console.log(e)
      return e
    });
}


export function deleteMember(id) {
  return httpClient
    .post(`/members/`+id)
    .then((response) => response.data)
    .catch(e => {
      console.log(e)
      return e
    });
}

export function create(data) {
  return httpClient
    .post(`/members`, data)
    .then((response) => response.data)
    .catch(e => {
      console.log(e)
      return e
    });
}

