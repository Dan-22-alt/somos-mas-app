import axios from 'axios';
import { useEffect, useState } from 'react';

const init = {
  res: null,
  loading: true,
  error: '',
};

const documentation = process.env.REACT_APP_API_BASE_URL + 'docs';

export const ApiFetch = ({ endPoint = documentation, method = 'get', body = null, headers = null }) => {
  const token = localStorage.getItem('token') ? { Authentication: localStorage.getItem('token') } : {};

  return axios[method](endPoint, body, { ...headers, ...token })
    .then(({ data }) => ({ res: data, error: null }))
    .catch((error) => ({ error, data: null }));
};

export const ApiGet = (endPoint = documentation) => {
  const [data, setData] = useState(init);

  useEffect(() => {
    const token = localStorage.getItem('token') ? { Authentication: localStorage.getItem('token') } : {};

    axios
      .get(endPoint, null, token)
      .then(({ data }) => setData((prevState) => ({ ...prevState, res: data, loading: false })))
      .catch((error) => setData((prevState) => ({ ...prevState, error, loading: false })));
  }, [endPoint]);

  return data;
};

export const ApiService = () => {
  const [data, setData] = useState(init);

  const ApiFetch = ({ endPoint = documentation, method = 'get', body = null, headers = null }) => {
    const token = localStorage.getItem('token') ? { Authentication: localStorage.getItem('token') } : {};

    axios[method](endPoint, body, { ...headers, ...token })
      .then(({ data }) => setData((prevState) => ({ ...prevState, res: data, loading: false })))
      .catch((error) => setData((prevState) => ({ ...prevState, error, loading: false })));
  };

  return [data, ApiFetch];
};
