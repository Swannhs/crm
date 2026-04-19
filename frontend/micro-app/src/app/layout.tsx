import 'src/global.css';

// ----------------------------------------------------------------------

import { ReactNode } from 'react';

import { CONFIG } from 'src/config-global';
import { primary } from 'src/theme/core/palette';
import { ThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { ProgressBar } from 'src/components/progress-bar';
import QueryProvider from 'src/components/query-provider';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { ToastProvider } from 'src/components/toast';
import { detectSettings } from 'src/components/settings/server';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/auth-provider';

// ----------------------------------------------------------------------

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {getInitColorSchemeScript}

        <AuthProvider>
          <QueryProvider>
            <SettingsProvider
              settings={settings}
              caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
            >
              <ThemeProvider>
                <MotionLazy>
                  <ProgressBar />
                  <ToastProvider />
                  <SettingsDrawer />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
