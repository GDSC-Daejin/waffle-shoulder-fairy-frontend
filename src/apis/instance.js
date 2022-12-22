import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'http://34.64.114.243:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});
