import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'https://waffle-shoulder.kro.kr',
  headers: {
    'Content-Type': 'application/json',
  },
});
