import axios from 'axios';

export const login = async (values) => {
  const response = await axios.post(`${process.env.REACT_APP_API_LOGIN}`, values);
  return response;
};

export const handleRequest = async ({ method = 'get', body = null, endpoint }) => {
  try {
    const response = await axios[method](endpoint, body);
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async (body) => {
  const response = await axios.post(process.env.REACT_APP_API_REGISTER, body);
  return response;
};
