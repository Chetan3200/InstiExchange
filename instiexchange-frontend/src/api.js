import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export const getItems = (searchTerm = '') => {
  return api.get(`/items/?title=${searchTerm}`).then((response) => response.data);
};

export const getItem = (id) => {
  return api.get(`/items/${id}/`).then((response) => response.data);
};

// export const addItem = (item) => {
//   return api