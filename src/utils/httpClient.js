import axios from "axios";

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}api`,
  responseType: "json",
});

export default httpClient;
