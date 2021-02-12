import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 400) {
        window.location.reload();
        alert('Usuário ou senha incorretos!');
      }
      
      if (error.response.status === 401) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();
        alert('Sessão expirada, faça login novamente');
      }
      return Promise.reject(error);
    },
  );

export default api;