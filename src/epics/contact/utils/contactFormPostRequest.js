import axios from 'axios';

export const contactFormPostRequest = async ({ ...body }) => {
  const response = await axios.post(process.env.REACT_APP_API_CONTACT, {
    ...body,
  });
  return response;
};
