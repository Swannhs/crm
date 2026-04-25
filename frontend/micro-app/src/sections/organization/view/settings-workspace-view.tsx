'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { organizationService } from 'src/services/organization-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

type Props = {
  tab?: string;
};

export function SettingsWorkspaceView({ tab = 'general' }: Props) {
  const orgQuery = useQuery({
    queryKey: ['settings-org'],
    queryFn: () => organizationService.getOrganizationDetails(),
  });

  const locationsQuery = useQuery({
    queryKey: ['settings-locations'],
    queryFn: () => organizationService.getLocations(),
  });

  if (orgQuery.isLoading || locationsQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FeatureRouteShell
      title={`Settings: ${tab}`}
      description="Legacy settings tabs such as billing, progression, advance, deposit, and smart lists are now represented as route-aware tabs in the micro-app."
      links={[
        { href: paths.dashboard.settings, label: 'General' },
        { href: paths.dashboard.settingsTab('billing'), label: 'Billing' },
        { href: paths.dashboard.settingsTab('advance'), label: 'Advance' },
        { href: paths.dashboard.settingsTab('smartList'), label: 'Smart List' },
        { href: paths.public.magentoIntegration, label: 'Integrations -> Magento' },
      ]}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Organization</Typography>
              <Typography variant="body2">Name: {orgQuery.data?.name || orgQuery.data?.organizationName || 'Unknown'}</Typography>
              <Typography variant="body2">Email: {orgQuery.data?.email || 'N/A'}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Active tab: {tab}
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Locations</Typography>
            <Typography variant="h3">{(locationsQuery.data || []).length}</Typography>
          </Card>
        </Grid>
      </Grid>
    </FeatureRouteShell>
  );
}
