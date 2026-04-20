'use client';

import Keycloak from 'keycloak-js';
import { useRef, useMemo, useEffect, ReactNode, useCallback } from 'react';

import { useSetState } from 'src/hooks/use-set-state';

import { CONFIG } from 'src/config-global';
import { paths } from 'src/routes/paths';

import { AuthContext } from '../auth-context';

// ----------------------------------------------------------------------

interface AuthProviderProps {
  children: ReactNode;
}

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const ORG_ID_KEY = 'organizationId';
const USER_ID_KEY = 'userId';
const KEYCLOAK_SIGN_IN_PATH = paths.auth.keycloak.signIn;

export function AuthProvider({ children }: AuthProviderProps) {
  const { state, setState } = useSetState({
    user: null,
    loading: true,
  });

  const keycloakRef = useRef<Keycloak | null>(null);
  const initializedRef = useRef(false);
  const refreshPromiseRef = useRef<Promise<boolean> | null>(null);

  const clearSession = useCallback(() => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(ORG_ID_KEY);
    sessionStorage.removeItem(USER_ID_KEY);
  }, []);

  const syncAuthenticatedUser = useCallback(
    async (keycloak: Keycloak) => {
      const profile = await keycloak.loadUserProfile();

      const user = {
        id: profile.id || keycloak.subject,
        email: profile.email,
        fullName: `${profile.firstName} ${profile.lastName}`.trim(),
        username: profile.username,
        accessToken: keycloak.token,
        refreshToken: keycloak.refreshToken,
        role: 'admin',
        org_id: keycloak.tokenParsed?.org_id,
      };

      sessionStorage.setItem(ACCESS_TOKEN_KEY, keycloak.token || '');
      sessionStorage.setItem(REFRESH_TOKEN_KEY, keycloak.refreshToken || '');
      sessionStorage.setItem(ORG_ID_KEY, user.org_id || '');
      sessionStorage.setItem(USER_ID_KEY, user.id || '');

      setState({ user, loading: false });

      return user;
    },
    [setState]
  );

  const redirectToLogin = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentPath = `${window.location.pathname}${window.location.search}`;
    const alreadyOnLogin = window.location.pathname === KEYCLOAK_SIGN_IN_PATH;

    if (alreadyOnLogin) return;

    const loginUrl = new URL(KEYCLOAK_SIGN_IN_PATH, window.location.origin);
    loginUrl.searchParams.set('returnTo', currentPath);
    window.location.replace(loginUrl.toString());
  }, []);

  const handleRefreshFailure = useCallback(() => {
    clearSession();
    setState({ user: null, loading: false });
    keycloakRef.current = null;
    initializedRef.current = false;
    refreshPromiseRef.current = null;
    redirectToLogin();
  }, [clearSession, redirectToLogin, setState]);

  const refreshSession = useCallback(
    async (minValidity: number = 60) => {
      const keycloak = keycloakRef.current;

      if (!keycloak?.authenticated) {
        return false;
      }

      if (refreshPromiseRef.current) {
        return refreshPromiseRef.current;
      }

      refreshPromiseRef.current = (async () => {
        try {
          const refreshed = await keycloak.updateToken(minValidity);
          await syncAuthenticatedUser(keycloak);
          return refreshed;
        } catch (error) {
          console.error('Token refresh failed:', error);
          handleRefreshFailure();
          return false;
        } finally {
          refreshPromiseRef.current = null;
        }
      })();

      return refreshPromiseRef.current;
    },
    [handleRefreshFailure, syncAuthenticatedUser]
  );

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
        refreshSession(0);
      };

      keycloak.onAuthRefreshSuccess = () => {
        if (keycloakRef.current) {
          syncAuthenticatedUser(keycloakRef.current).catch((error) => {
            console.error('Failed to sync refreshed Keycloak session:', error);
          });
        }
      };

      keycloak.onAuthRefreshError = () => {
        console.error('Keycloak reported refresh error');
        handleRefreshFailure();
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

        await syncAuthenticatedUser(keycloak);
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error('Keycloak Init Error:', error);
      setState({ user: null, loading: false });
    }
  }, [handleRefreshFailure, refreshSession, setState, syncAuthenticatedUser]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    initKeycloak();

    // Set up an interval to refresh the token periodically
    const interval = setInterval(async () => {
      if (keycloakRef.current?.authenticated) {
        await refreshSession(60);
      }
    }, 30000); // Check every 30 seconds

    const handleUnauthorized = () => {
      console.warn('Unauthorized access detected via event');
      refreshSession(0).catch(() => {
        handleRefreshFailure();
      });
    };

    window.addEventListener('auth-unauthorized', handleUnauthorized);

    return () => {
      clearInterval(interval);
      window.removeEventListener('auth-unauthorized', handleUnauthorized);
    };
  }, [handleRefreshFailure, initKeycloak, refreshSession]);

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
          clearSession();
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
            await syncAuthenticatedUser(keycloak);
            return;
          }

          setState({ user: null, loading: false });
        } catch (error) {
          console.error('Check session error:', error);
          setState({ user: null, loading: false });
        }
      },
    }),
    [clearSession, setState, state.user, status, syncAuthenticatedUser]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
