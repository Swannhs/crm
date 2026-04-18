'use client';

import { useMemo, useEffect, ReactNode, useCallback } from 'react';
import { useSetState } from 'src/hooks/use-set-state';
import { CONFIG } from 'src/config-global';
import { AuthContext } from '../auth-context';

// ----------------------------------------------------------------------

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { state, setState } = useSetState({
    user: null,
    loading: true,
  });

  const initKeycloak = useCallback(async () => {
    try {
      // Inject Keycloak script if not present
      if (!window.Keycloak) {
        const script = document.createElement('script');
        script.src = `${CONFIG.keycloak.url}/js/keycloak.js`;
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      const keycloak = new window.Keycloak({
        url: CONFIG.keycloak.url,
        realm: CONFIG.keycloak.realm,
        clientId: CONFIG.keycloak.clientId,
      });

      const authenticated = await keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        pkceMethod: 'S256',
      });

      if (authenticated) {
        const profile = await keycloak.loadUserProfile();
        
        const user = {
          id: profile.id || keycloak.subject,
          email: profile.email,
          fullName: `${profile.firstName} ${profile.lastName}`,
          username: profile.username,
          accessToken: keycloak.token,
          refreshToken: keycloak.refreshToken,
          role: 'admin', // Default to admin for demo
          org_id: keycloak.tokenParsed?.org_id,
        };

        // Sync with session storage for axios interceptors
        sessionStorage.setItem('accessToken', keycloak.token);
        sessionStorage.setItem('organizationId', user.org_id || '');

        setState({ user, loading: false });
      } else {
        setState({ user: null, loading: false });
      }

      // Store keycloak instance globally for logout/actions
      window.keycloak = keycloak;

    } catch (error) {
      console.error('Keycloak Init Error:', error);
      setState({ user: null, loading: false });
    }
  }, [setState]);

  useEffect(() => {
    initKeycloak();
  }, [initKeycloak]);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      login: () => window.keycloak?.login(),
      logout: () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('organizationId');
        window.keycloak?.logout();
      },
    }),
    [state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
