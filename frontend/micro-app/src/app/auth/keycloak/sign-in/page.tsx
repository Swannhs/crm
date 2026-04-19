import { KeycloakSignInView } from 'src/sections/auth/keycloak/keycloak-sign-in-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Keycloak: Sign in',
};

export default function SignInPage() {
  return <KeycloakSignInView />;
}
