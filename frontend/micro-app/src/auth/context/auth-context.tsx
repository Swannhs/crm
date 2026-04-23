'use client';

import { createContext } from 'react';

// -----------------------------------------------------------------------

interface AuthContextType {
  user: any;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  currentRole?: string | null;
  currentRoles?: string[];
  checkUserSession?: () => Promise<void>;
  login?: () => void | Promise<void>;
  logout?: () => Promise<void>;
  hasPermission?: (permission: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthConsumer = AuthContext.Consumer;
