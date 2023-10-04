import axios from 'axios';
import api from '@/services/TokenService';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

client.interceptors.request.use((config) => {
  if (api.getToken() !== undefined && api.getId() !== undefined) {
    config.headers.authorization = `Bearer ${api.getToken()}`;
  }
  return config;
});
export default client;
