'use client';

import Keycloak from 'keycloak-js';
import { useRef, useMemo, useEffect, ReactNode, useCallback } from 'react';

import { useSetState } from 'src/hooks/use-set-state';

import { CONFIG } from 'src/config-global';

import { AuthContext } from '../auth-context';

// ----------------------------------------------------------------------

interface AuthProviderProps {
  children: ReactNode;
}

const ACCESS_TOKEN_KEY = 'accessToken';
const ORG_ID_KEY = 'organizationId';
const USER_ID_KEY = 'userId';

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
      (window as any).keycloak = keycloak;

      keycloak.onTokenExpired = () => {
        console.warn('Token expired, attempting refresh...');
        keycloak.updateToken(30).catch(() => {
          console.error('Immediate refresh failed after expiration');
          // The interval will also catch this and clear the state, 
          // but we can be proactive here if needed.
        });
      };

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

        sessionStorage.setItem(ACCESS_TOKEN_KEY, keycloak.token || '');
        sessionStorage.setItem(ORG_ID_KEY, user.org_id || '');
        sessionStorage.setItem(USER_ID_KEY, user.id || '');

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

    // Set up an interval to refresh the token periodically
    const interval = setInterval(async () => {
      try {
        if (keycloakRef.current?.authenticated) {
          // updateToken(60) means refresh the token if it expires in less than 60 seconds
          const refreshed = await keycloakRef.current.updateToken(60);
          if (refreshed) {
            console.log('Token refreshed successfully');
            const keycloak = keycloakRef.current;
            
            // Update session storage
            sessionStorage.setItem(ACCESS_TOKEN_KEY, keycloak.token || '');
            
            // Update local state to ensure the new token is available to the rest of the app
            setState((prev) => ({
              ...prev,
              user: prev.user ? { ...prev.user, accessToken: keycloak.token } : null
            }));
          }
        }
      } catch (error) {
        console.error('Token refresh failed:', error);
        
        // If refresh fails, it means the session is likely invalid or expired on the server
        // We should clear the local state to prevent the app from using an expired token
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(ORG_ID_KEY);
        sessionStorage.removeItem(USER_ID_KEY);
        
        setState({ user: null, loading: false });
        keycloakRef.current = null;
        initializedRef.current = false;
      }
    }, 30000); // Check every 30 seconds

    const handleUnauthorized = () => {
      console.warn('Unauthorized access detected via event');
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      sessionStorage.removeItem(ORG_ID_KEY);
      sessionStorage.removeItem(USER_ID_KEY);
      setState({ user: null, loading: false });
      keycloakRef.current = null;
      initializedRef.current = false;
    };

    window.addEventListener('auth-unauthorized', handleUnauthorized);

    return () => {
      clearInterval(interval);
      window.removeEventListener('auth-unauthorized', handleUnauthorized);
    };
  }, [initKeycloak, setState]);

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
          redirectUri: `${window.location.origin}/`,
        });
      },
      logout: async () => {
        const redirectUri = `${window.location.origin}/`;

        try {
          const keycloak = keycloakRef.current;
          if (!keycloak) {
            window.location.replace(redirectUri);
            return;
          }

          // Clear local storage/state
          sessionStorage.removeItem(ACCESS_TOKEN_KEY);
          sessionStorage.removeItem(ORG_ID_KEY);
          sessionStorage.removeItem(USER_ID_KEY);
          setState({ user: null, loading: false });

          // Reset refs
          keycloakRef.current = null;
          initializedRef.current = false;

          // Initiate Keycloak logout (this will redirect the browser)
          await keycloak.logout({ redirectUri });
        } catch (error) {
          console.error('Logout error:', error);
          window.location.replace(redirectUri);
        }
      },
      checkUserSession: async () => {
        try {
          if (keycloakRef.current?.authenticated && keycloakRef.current.token) {
            const keycloak = keycloakRef.current;
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

            sessionStorage.setItem(ACCESS_TOKEN_KEY, keycloak.token || '');
            sessionStorage.setItem(ORG_ID_KEY, user.org_id || '');
            sessionStorage.setItem(USER_ID_KEY, user.id || '');
            setState({ user, loading: false });
            return;
          }

          setState({ user: null, loading: false });
        } catch (error) {
          console.error('Check session error:', error);
          setState({ user: null, loading: false });
        }
      },
    }),
    [setState, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
