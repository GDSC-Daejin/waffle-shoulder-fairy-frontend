import axios from 'axios';

export const Instance = axios.create({
  //임시 url -> 나중에 서버 url로 변경
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});
