import httpClient from "../utils/httpClient";
import { ApiGet } from './ApiService';

const endPoint = process.env.REACT_APP_API_MEMBER
// export const getData = () => ApiGet(endPoint)

export function getData(id) {
    return httpClient
      .get(`/members/`+id)
      .then((response) => response.data)
      .catch(e => {console.log(e)
         return e});
  }