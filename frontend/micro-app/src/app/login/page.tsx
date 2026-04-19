import { JwtSignInView } from 'src/sections/auth/jwt';
import { LegacyAuthPageShell } from 'src/sections/public/legacy-auth-page-shell';

export const metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <LegacyAuthPageShell>
      <JwtSignInView />
    </LegacyAuthPageShell>
  );
}
