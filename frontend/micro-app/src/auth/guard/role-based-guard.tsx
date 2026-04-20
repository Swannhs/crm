'use client';

import { ReactNode } from 'react';
import { m } from 'framer-motion';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ForbiddenIllustration } from 'src/assets/illustrations';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export interface RoleBasedGuardProps {
  sx?: any;
  children?: ReactNode;
  hasContent?: boolean;
  currentRole?: string | null;
  currentRoles?: string[];
  acceptRoles: string[];
}

export function RoleBasedGuard({
  sx,
  children,
  hasContent,
  currentRole,
  currentRoles,
  acceptRoles,
}: RoleBasedGuardProps) {
  const activeRoles = currentRoles?.length ? currentRoles : currentRole ? [currentRole] : [];

  if (typeof acceptRoles !== 'undefined' && !acceptRoles.some((role) => activeRoles.includes(role))) {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: 'center', ...sx }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Permission denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not have permission to access this page.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    ) : null;
  }

  return <> {children} </>;
}
