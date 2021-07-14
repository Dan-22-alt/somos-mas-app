import httpClient from "../utils/httpClient";

export function getUser() {
  return httpClient.get("/users").then((response) => response.data);
}

export function getUserById(id) {
  return httpClient.get(`/users/${id}`).then((response) => response.data);
}

export function createUser(data) {
  return httpClient.post("/users", data).then((response) => response.data);
}

export function updateUser(id, data) {
  return httpClient.put(`/users/${id}`, data).then((response) => response.data);
}

export function deleteUser(id) {
  return httpClient.delete(`/users/${id}`).then((response) => response.data);
}
