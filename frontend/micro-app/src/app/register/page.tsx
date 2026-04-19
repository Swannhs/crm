import { JwtSignUpView } from 'src/sections/auth/jwt';
import { LegacyAuthPageShell } from 'src/sections/public/legacy-auth-page-shell';

export const metadata = {
  title: 'Register',
};

export default function Page() {
  return (
    <LegacyAuthPageShell>
      <JwtSignUpView />
    </LegacyAuthPageShell>
  );
}
