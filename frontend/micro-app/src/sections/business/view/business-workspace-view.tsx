'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { businessService } from 'src/services/business-service';

import { Iconify } from 'src/components/iconify';

import { BusinessExpired } from '../business-expired';
import { BusinessBirthday } from '../business-birthday';
import { BusinessRetention } from '../business-retention';
import { BusinessProgression } from '../business-progression';

// ----------------------------------------------------------------------

export function BusinessWorkspaceView() {
  const [currentTab, setCurrentTab] = useState('retention');

  const { data: retention, isLoading } = useQuery({
    queryKey: ['business-retention'],
    queryFn: () => businessService.getRetentionStats(),
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">Business Intelligence</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Advanced analytics for retention, progression, and customer milestones.
          </Typography>
        </Box>
      </Stack>

      <Tabs
        value={currentTab}
        onChange={(e, val) => setCurrentTab(val)}
        sx={{ mb: 5 }}
      >
        <Tab icon={<Iconify icon="solar:user-check-bold-duotone" />} label="Retention" value="retention" />
        <Tab icon={<Iconify icon="solar:gift-bold-duotone" />} label="Birthdays" value="birthday" />
        <Tab icon={<Iconify icon="solar:clock-circle-bold-duotone" />} label="Expiring" value="expiring" />
        <Tab icon={<Iconify icon="solar:chart-bold-duotone" />} label="Progression" value="progression" />
      </Tabs>

      {currentTab === 'retention' && <BusinessRetention data={retention} />}
      {currentTab === 'birthday' && <BusinessBirthday />}
      {currentTab === 'expiring' && <BusinessExpired />}
      {currentTab === 'progression' && <BusinessProgression />}
    </DashboardContent>
  );
}
