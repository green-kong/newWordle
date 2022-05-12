import axios from 'axios';

export const loginAPI = async (payload) => {
  const url = 'http://localhost:4000/api/user/login';
  const response = await axios.post(url, payload);
  return response.data;
};

export const verifyAPI = async (payload) => {
  const url = 'http://localhost:4000/api/user/me';
  const option = {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  };
  const response = await axios.post(url, null, option);
  return response.data;
};

export const joinAPI = async (payload) => {
  const url = 'http://localhost:4000/api/user/join';
  const response = await axios.post(url, payload);
  return response.data;
};
