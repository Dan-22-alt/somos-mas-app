import axios from 'axios';

export const fetchOrganizationData = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_ORGANIZATION);
    const data = await response.data.data[0];
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setOrganizationData = async ({ ...body }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_ORGANIZATION, { ...body });
    const { data, success, message } = await response.data;
    return { data, success, message };
  } catch (error) {
    console.log(error);
    return error;
  }
};

/*
USAGE:{
  const body = {
    name: "new name",
    address: "new address"
  }

  setOrganizationData(body)
}
*/
