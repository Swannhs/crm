'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function DeviceDashboardTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {/* Fleet Stats */}
      <Grid item xs={12} md={4}>
        <DeviceStatWidget
          title="Online Devices"
          total="42"
          percent={95}
          color="success"
          icon="solar:check-circle-bold"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <DeviceStatWidget
          title="Sync Status"
          total="128"
          percent={100}
          color="info"
          icon="solar:refresh-bold"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <DeviceStatWidget
          title="Alerts"
          total="3"
          percent={-2}
          color="error"
          icon="solar:danger-bold"
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3, height: '100%' }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Fleet Activity (Last 24h)</Typography>
          <Chart
            type="area"
            series={[
              { name: 'Data Sync', data: [31, 40, 28, 51, 42, 109, 100] },
              { name: 'App Launches', data: [11, 32, 45, 32, 34, 52, 41] },
            ]}
            options={useChart({
              colors: [theme.palette.primary.main, theme.palette.info.main],
              xaxis: { categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'] },
            })}
            height={300}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Device Health</Typography>
          <Stack spacing={3}>
            {[
              { label: 'CPU Usage', value: 24, color: 'success' },
              { label: 'Memory', value: 68, color: 'warning' },
              { label: 'Storage', value: 45, color: 'primary' },
              { label: 'Battery Health', value: 92, color: 'success' },
            ].map((stat) => (
              <Box key={stat.label}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">{stat.label}</Typography>
                  <Typography variant="body2">{stat.value}%</Typography>
                </Stack>
                <LinearProgress 
                  variant="determinate" 
                  value={stat.value} 
                  color={stat.color as any} 
                  sx={{ height: 6, borderRadius: 1 }}
                />
              </Box>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export function DeviceListTab() {
  return (
    <Card sx={{ p: 0 }}>
      <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Managed Devices</Typography>
        <Button variant="soft" startIcon={<Iconify icon="solar:filter-bold" />}>Filters</Button>
      </Box>
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Device Name</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Sync</TableCell>
              <TableCell>Version</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { name: 'POS-Front-Desk-01', sn: 'SN98234723948', status: 'Online', version: 'v2.4.1' },
              { name: 'Mobile-Sales-04', sn: 'SN12390842304', status: 'Online', version: 'v2.4.0' },
              { name: 'Kitchen-Display-02', sn: 'SN45903482309', status: 'Offline', version: 'v2.3.9' },
            ].map((device) => (
              <TableRow key={device.sn}>
                <TableCell>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ p: 1, borderRadius: 1, bgcolor: 'background.neutral' }}>
                      <Iconify icon="solar:smartphone-device-bold" />
                    </Box>
                    <Typography variant="subtitle2">{device.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{device.sn}</TableCell>
                <TableCell>
                   <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1, py: 0.5, borderRadius: 1, bgcolor: device.status === 'Online' ? 'success.lighter' : 'error.lighter', color: device.status === 'Online' ? 'success.darker' : 'error.darker', fontSize: 12, fontWeight: 700 }}>
                      {device.status.toUpperCase()}
                   </Box>
                </TableCell>
                <TableCell>15 mins ago</TableCell>
                <TableCell>{device.version}</TableCell>
                <TableCell align="right">
                   <Button size="small" variant="soft" color="primary">Manage</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}

export function DeviceAppManagementTab() {
  return (
    <Grid container spacing={3}>
      {[
        { name: 'MyManager POS', version: 'v2.5.0', size: '48MB', icon: 'solar:shop-bold', color: 'primary' },
        { name: 'Inventory Scanner', version: 'v1.2.4', size: '22MB', icon: 'solar:box-bold', color: 'info' },
        { name: 'Customer Kiosk', version: 'v3.0.1', size: '124MB', icon: 'solar:users-group-rounded-bold', color: 'success' },
      ].map((app) => (
        <Grid item xs={12} md={4} key={app.name}>
          <Card sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <Box sx={{ p: 2, borderRadius: 2, bgcolor: `${app.color}.lighter`, color: `${app.color}.main`, display: 'flex' }}>
                 <Iconify icon={app.icon} width={32} />
              </Box>
              <Box>
                <Typography variant="h6">{app.name}</Typography>
                <Typography variant="caption" color="text.secondary">Current: {app.version} • {app.size}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button fullWidth variant="contained" color="primary">Push Update</Button>
              <Button variant="soft" color="inherit">Config</Button>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export function DeviceRemoteControlTab() {
  return (
    <Card sx={{ p: 3, textAlign: 'center', py: 10 }}>
       <Iconify icon="solar:monitor-video-bold-duotone" width={64} sx={{ mb: 2, opacity: 0.48 }} />
       <Typography variant="h5" sx={{ mb: 1 }}>Remote Control Hub</Typography>
       <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto', mb: 3 }}>
          Remotely access device screens for troubleshooting, configuration, and support. 
          Establish secure P2P connections to your entire fleet.
       </Typography>
       <Button variant="contained" size="large" startIcon={<Iconify icon="solar:play-bold" />}>
          Initiate New Session
       </Button>
    </Card>
  );
}

export function DeviceFirmwareTab() {
  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>OTA Firmware Management</Typography>
       <Stack spacing={3}>
          {[
            { version: 'v2.6.0 (Latest)', date: 'Oct 24, 2023', devices: 42, status: 'Released' },
            { version: 'v2.5.9', date: 'Oct 10, 2023', devices: 0, status: 'Deprecated' },
          ].map((fw) => (
            <Box key={fw.version} sx={{ p: 2.5, borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <Box>
                  <Typography variant="subtitle1">{fw.version}</Typography>
                  <Typography variant="caption" color="text.secondary">Released on {fw.date} • Deployed to {fw.devices} devices</Typography>
               </Box>
               <Button variant="soft" color={fw.status === 'Released' ? 'success' : 'inherit'}>
                  {fw.status}
               </Button>
            </Box>
          ))}
       </Stack>
    </Card>
  );
}

// --- Internal Components ---

function DeviceStatWidget({ title, total, percent, color, icon }: any) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>{title}</Typography>
          <Typography variant="h3">{total}</Typography>
        </Box>
        <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: `${color}.lighter`, color: `${color}.main`, display: 'flex' }}>
           <Iconify icon={icon} />
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 2 }}>
        <Iconify 
          icon={percent < 0 ? 'solar:double-alt-arrow-down-bold-duotone' : 'solar:double-alt-arrow-up-bold-duotone'} 
          sx={{ color: percent < 0 ? 'error.main' : 'success.main' }}
        />
        <Typography variant="subtitle2" sx={{ color: percent < 0 ? 'error.main' : 'success.main' }}>
          {percent > 0 && '+'}
          {percent}%
        </Typography>
        <Typography variant="caption" color="text.secondary">from baseline</Typography>
      </Stack>
    </Card>
  );
}
