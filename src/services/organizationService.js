import httpClient from "../utils/httpClient";
import { ApiGet } from './ApiService';


export function getDataOrganization() {
    return httpClient.get("/organization").then(result => result.data)
}

const endPoint = process.env.REACT_APP_API_ORGANIZATION

export const getData = () => ApiGet(endPoint)

export function edit(data) {
    return httpClient
      .post(`/organization`, data)
      .then((response) => response.data)
      .catch(e => {console.log(e)
         return e});
  }