import axios from 'axios';
import TokenService from '@/services/TokenService';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

client.interceptors.request.use((config) => {
  if (
    TokenService.getToken() !== undefined &&
    TokenService.getId() !== undefined
  ) {
    config.headers.authorization = `Bearer ${TokenService.getToken()}`;
  }
  return config;
});
export default client;
