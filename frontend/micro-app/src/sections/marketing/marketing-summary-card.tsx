'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingSummaryCard({ title, value, icon, color }: any) {
  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: `${color}.lighter`,
        color: `${color}.darker`,
      }}
    >
      <Box>
        <Typography variant="subtitle2" sx={{ opacity: 0.64, mb: 1 }}>{title}</Typography>
        <Typography variant="h3">{value}</Typography>
      </Box>
      <Iconify icon={icon} width={64} sx={{ opacity: 0.24 }} />
    </Card>
  );
}

// ----------------------------------------------------------------------

export function MarketingRecentActivity() {
  const activities = [
    { id: 1, type: 'Email Sent', campaign: 'Spring Promotion', time: '10 min ago', status: 'Success' },
    { id: 2, type: 'Automation Triggered', campaign: 'Welcome Flow', time: '1 hr ago', status: 'Active' },
    { id: 3, type: 'SMS Broadcast', campaign: 'Flash Sale', time: '2 hrs ago', status: 'Pending' },
    { id: 4, type: 'Ad Report Sync', campaign: 'Google Ads', time: '5 hrs ago', status: 'Success' },
  ];

  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>Recent Activity</Typography>
       <Stack spacing={3}>
          {activities.map((activity) => (
             <Stack key={activity.id} direction="row" spacing={2}>
                <Box
                   sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.neutral',
                      flexShrink: 0
                   }}
                >
                   <Iconify
                      icon={
                         activity.type.includes('Email') ? 'solar:letter-bold' :
                         activity.type.includes('SMS') ? 'solar:phone-bold' :
                         activity.type.includes('Ad') ? 'solar:chart-bold' : 'solar:magic-stick-3-bold'
                      }
                      width={20}
                      sx={{ color: 'text.secondary' }}
                   />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{activity.type}</Typography>
                   <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      {activity.campaign} • {activity.time}
                   </Typography>
                </Box>
                <Box
                   sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 0.75,
                      typography: 'caption',
                      fontWeight: 'bold',
                      bgcolor: activity.status === 'Success' ? 'success.lighter' : activity.status === 'Active' ? 'info.lighter' : 'warning.lighter',
                      color: activity.status === 'Success' ? 'success.darker' : activity.status === 'Active' ? 'info.darker' : 'warning.darker',
                   }}
                >
                   {activity.status}
                </Box>
             </Stack>
          ))}
       </Stack>
       <Button fullWidth variant="soft" sx={{ mt: 3 }}>View All Activity</Button>
    </Card>
  );
}

import { Button } from '@mui/material';
