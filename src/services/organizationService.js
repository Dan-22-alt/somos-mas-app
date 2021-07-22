import httpClient from "../utils/httpClient";

const endPoint = process.env.REACT_APP_API_ORGANIZATION

export const getOng = async() => (
  await httpClient
   .get(endPoint)
   .then(({data})=> data.data)
)

export const editOng = async(data)=> {
  return await httpClient
    .post(endPoint, data)
    .then(res => res.data)
}



/*
export const edit = async(data)=> (
  await httpClient
    .post(endPoint, data)
    .then(res => res.data)
)
*/
