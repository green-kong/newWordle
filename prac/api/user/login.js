import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://43.200.15.189'
    : 'http://localhost:4000';

export const loginAPI = async (payload) => {
  const url = 'api/user/login';
  const response = await axios.post(url, payload);
  return response.data;
};

export const verifyAPI = async (payload) => {
  const url = 'api/user/me';
  const option = {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  };
  const response = await axios.post(url, null, option);
  return response.data;
};

export const joinAPI = async (payload) => {
  const url = 'api/user/join';
  const response = await axios.post(url, payload);
  return response.data;
};
