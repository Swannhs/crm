import { CONFIG } from 'src/config-global';

import { JwtSignInView } from 'src/sections/auth/jwt';
import { KeycloakSignInView } from 'src/sections/auth/keycloak';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Auth - ${CONFIG.site.name}` };

export default function Page() {
  if (CONFIG.auth.method === 'keycloak') {
    return <KeycloakSignInView />;
  }
  return <JwtSignInView />;
}
