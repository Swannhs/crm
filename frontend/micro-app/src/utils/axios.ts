import axios from 'axios';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.site.serverUrl });

const decodeJwtSub = (token: string | null) => {
  if (!token) return null;

  try {
    const [, payload] = token.split('.');
    if (!payload) return null;

    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(normalized));
    return decoded?.sub || null;
  } catch {
    return null;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;
    const orgId = typeof window !== 'undefined' ? sessionStorage.getItem('organizationId') : null;
    const userId =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('userId') || decodeJwtSub(accessToken)
        : null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (orgId) {
      config.headers['X-Org-Id'] = orgId;
    }

    if (userId) {
      config.headers['X-User-Id'] = userId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    signIn: '/api/auth/sign-in',
    signUp: '/api/auth/sign-up',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
};
