'use client';

import './config-locales.js';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

interface Props {
  children: ReactNode;
}

export function I18nProvider({ children }: Props) {
  return <>{children}</>;
}
