import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.MITM_PUBLIC_API_URL,
});