'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { DashboardRange } from 'src/services/dashboard-service';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

import { 
  DashboardAnalyticsTab,
  DashboardEcommerceTab,
  DashboardSettingsDialog
} from './dashboard-workspace-sections';

// ----------------------------------------------------------------------

type Props = {
  mode?: 'analytics' | 'ecommerce';
};

export function DashboardWorkspaceView({ mode = 'analytics' }: Props) {
  const theme = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [range, setRange] = useState<DashboardRange>('30d');

  const title = mode === 'ecommerce' ? 'Shop Performance' : 'Executive Analytics';
  const description = mode === 'ecommerce' 
    ? 'Real-time sales, product performance, and customer metrics for your organization shops.'
    : 'Comprehensive business intelligence hub with customizable KPI widgets and operational tracking.';

  return (
    <FeatureRouteShell
      title={title}
      description={description}
      links={[
        { href: paths.dashboard.root, label: 'Analytics' },
        { href: paths.dashboard.general.ecommerce, label: 'E-commerce' },
      ]}
      action={
        mode === 'analytics' && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {(['7d', '30d', '90d'] as DashboardRange[]).map((item) => (
              <Button
                key={item}
                size="small"
                variant={range === item ? 'contained' : 'outlined'}
                onClick={() => setRange(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="soft"
              color="primary"
              startIcon={<Iconify icon="solar:settings-bold" />}
              onClick={() => setIsSettingsOpen(true)}
            >
              Customize Dashboard
            </Button>
          </Box>
        )
      }
    >
      <Box sx={{ mt: 3 }}>
        {mode === 'ecommerce' ? (
          <DashboardEcommerceTab />
        ) : (
          <DashboardAnalyticsTab range={range} />
        )}
      </Box>

      <DashboardSettingsDialog 
        open={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </FeatureRouteShell>
  );
}
