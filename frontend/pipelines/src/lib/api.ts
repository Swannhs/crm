import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  const orgId = typeof window !== 'undefined' ? localStorage.getItem('organizationId') : null;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  if (orgId) {
    config.headers['X-Org-Id'] = orgId;
  }
  
  return config;
});

export { api };
export default api;
