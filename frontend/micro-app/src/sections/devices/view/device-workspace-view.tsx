'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

import { 
  DeviceListTab,
  DeviceFirmwareTab,
  DeviceDashboardTab,
  DeviceAppManagementTab,
  DeviceRemoteControlTab
} from './device-workspace-sections';

// ----------------------------------------------------------------------

type Props = {
  mode?: 'dashboard' | 'list' | 'apps' | 'remote' | 'firmware';
};

export function DeviceWorkspaceView({ mode = 'dashboard' }: Props) {
  const [activeTab, setActiveTab] = useState(mode);

  const title = activeTab === 'dashboard' ? 'Device Fleet Dashboard' : 'Hardware Orchestration';
  const description = 'Monitor, manage, and remotely configure your Sunmi POS and Android device ecosystem in real-time.';

  return (
    <FeatureRouteShell
      title={title}
      description={description}
      links={[
        { href: paths.dashboard.devices.root, label: 'Dashboard' },
        { href: paths.dashboard.devices.list, label: 'Devices' },
        { href: paths.dashboard.devices.apps, label: 'App Management' },
        { href: paths.dashboard.devices.remote, label: 'Remote Access' },
        { href: paths.dashboard.devices.firmware, label: 'Firmware (OTA)' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Provision Device
        </Button>
      }
    >
      <Box sx={{ mt: 3 }}>
        {activeTab === 'dashboard' && <DeviceDashboardTab />}
        {activeTab === 'list' && <DeviceListTab />}
        {activeTab === 'apps' && <DeviceAppManagementTab />}
        {activeTab === 'remote' && <DeviceRemoteControlTab />}
        {activeTab === 'firmware' && <DeviceFirmwareTab />}
      </Box>
    </FeatureRouteShell>
  );
}
