import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.API_BASE_URL}&appid=${process.env.API_KEY}`,
});

export default api;
