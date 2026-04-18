'use client';

import { CONFIG } from 'src/config-global';
import { AuthProvider as JwtAuthProvider } from './jwt';
import { AuthProvider as KeycloakAuthProvider } from './keycloak';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  if (CONFIG.auth.method === 'keycloak') {
    return <KeycloakAuthProvider>{children}</KeycloakAuthProvider>;
  }

  return <JwtAuthProvider>{children}</JwtAuthProvider>;
}
