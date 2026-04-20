import axios from 'axios';

import { CONFIG } from 'src/config-global';
import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.site.serverUrl });

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;

      try {
        // Decode JWT to extract user and org IDs
        const payload = JSON.parse(atob(accessToken.split('.')[1]));
        if (payload.sub) {
          config.headers['X-User-Id'] = payload.sub;
        }
        if (payload.org_id) {
          config.headers['X-Org-Id'] = payload.org_id;
        }
      } catch (e) {
        console.error('Failed to decode JWT:', e);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('accessToken');
        showToast({
          message: 'Your session has expired. Please sign in again.',
          severity: 'warning',
        });
        window.dispatchEvent(new CustomEvent('auth-unauthorized'));
      }
    } else if (typeof window !== 'undefined') {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        'Something went wrong!';

      showToast({
        message,
        severity: 'error',
      });
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong!');
  }
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
