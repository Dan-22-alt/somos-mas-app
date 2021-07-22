import httpClient from "../utils/httpClient";

const endPoint = process.env.REACT_APP_API_ORGANIZATION

export const getData = async() => (
  await httpClient
   .get("/organization")
   .then(({data})=> data.data)
)

export function edit(data) {
    return httpClient
      .post(`/organization`, data)
      .then((response) => response.data)
      .catch(e => {console.log(e)
         return e});
  }
