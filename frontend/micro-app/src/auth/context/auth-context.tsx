'use client';

import { createContext } from 'react';

// -----------------------------------------------------------------------

interface AuthContextType {
  user: any;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  checkUserSession?: () => Promise<void>;
  login?: () => void | Promise<void>;
  logout?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthConsumer = AuthContext.Consumer;
