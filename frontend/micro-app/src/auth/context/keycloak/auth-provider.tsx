'use client';

import Keycloak from 'keycloak-js';
import { useMemo, useEffect, ReactNode, useCallback, useRef } from 'react';
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

  const keycloakRef = useRef<Keycloak | null>(null);
  const initializedRef = useRef(false);

  const initKeycloak = useCallback(async () => {
    try {
      const keycloak = new Keycloak({
        url: CONFIG.keycloak.url,
        realm: CONFIG.keycloak.realm,
        clientId: CONFIG.keycloak.clientId,
      });

      keycloakRef.current = keycloak;
      window.keycloak = keycloak;

      // onLoad: 'check-sso' is the standard SPA approach:
      //   - Automatically processes any ?code in the URL (authorization code exchange)
      //   - If no code, silently checks for an active SSO session via iframe
      //   - NEVER redirects to Keycloak login on its own — no redirect loops possible
      // silentCheckSsoFallback: false — if silent iframe check can't run, return false safely
      // checkLoginIframe: false — disable the periodic background session check via iframe
      const authenticated = await keycloak.init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        checkLoginIframe: false,
        silentCheckSsoFallback: false,
        responseMode: 'query',
      });

      if (authenticated) {
        // Remove OIDC callback params from the URL without triggering a re-render
        const url = new URL(window.location.href);
        ['code', 'state', 'session_state', 'iss'].forEach((p) => url.searchParams.delete(p));
        window.history.replaceState({}, '', url.toString());

        const profile = await keycloak.loadUserProfile();

        const user = {
          id: profile.id || keycloak.subject,
          email: profile.email,
          fullName: `${profile.firstName} ${profile.lastName}`,
          username: profile.username,
          accessToken: keycloak.token,
          refreshToken: keycloak.refreshToken,
          role: 'admin',
          org_id: keycloak.tokenParsed?.org_id,
        };

        sessionStorage.setItem('accessToken', keycloak.token || '');
        sessionStorage.setItem('organizationId', user.org_id || '');

        setState({ user, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error('Keycloak Init Error:', error);
      setState({ user: null, loading: false });
    }
  }, [setState]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    initKeycloak();
  }, [initKeycloak]);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      // Always redirect back to root — this matches the URL Keycloak is actually sending to.
      // Using a fixed URI avoids redirect_uri mismatches when login() is called from
      // different pathnames across the app.
      login: () => {
        keycloakRef.current?.login({
          redirectUri: window.location.origin + '/',
        });
      },
      logout: async () => {
        try {
          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('organizationId');
          await keycloakRef.current?.logout({
            redirectUri: window.location.origin + '/',
          });
        } catch (error) {
          console.error('Logout error:', error);
        }
      },
    }),
    [state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
