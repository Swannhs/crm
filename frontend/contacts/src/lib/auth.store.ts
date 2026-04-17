import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  organizationId: string | null;
  setAuth: (user: User, token: string, organizationId?: string) => void;
  setOrganizationId: (id: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null,
  organizationId: typeof window !== 'undefined' ? localStorage.getItem('organizationId') : null,
  
  setAuth: (user, token, organizationId) => {
    localStorage.setItem('accessToken', token);
    if (organizationId) {
      localStorage.setItem('organizationId', organizationId);
    }
    set({ user, token, organizationId: organizationId || null });
  },
  
  setOrganizationId: (id) => {
    localStorage.setItem('organizationId', id);
    set({ organizationId: id });
  },
  
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('organizationId');
    set({ user: null, token: null, organizationId: null });
  }
}));

