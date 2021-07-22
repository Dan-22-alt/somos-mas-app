import httpClient from "../utils/httpClient";

const endPoint = process.env.REACT_APP_API_ORGANIZATION

export const getData = async() => (
  await httpClient
   .get("/organization")
   .then(({data})=> data.data)
)

export const edit = async(data)=> (
  await httpClient
    .post(`/organization`, data)
    .then(res => res.data)
)
