import axios from 'axios';

const myJsonAPI = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default myJsonAPI;