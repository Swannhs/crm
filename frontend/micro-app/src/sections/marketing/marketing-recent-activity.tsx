import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingRecentActivity() {
  const activities = [
    { id: 1, type: 'Email Sent', campaign: 'Holiday Special', time: '10 mins ago', icon: 'solar:letter-bold', color: 'info' },
    { id: 2, type: 'Automation Triggered', campaign: 'Welcome Flow', time: '2 hours ago', icon: 'solar:magic-stick-3-bold', color: 'success' },
    { id: 3, type: 'Link Clicked', campaign: 'Flash Sale', time: '5 hours ago', icon: 'solar:cursor-bold', color: 'warning' },
    { id: 4, type: 'New Lead', campaign: 'Referral Program', time: '1 day ago', icon: 'solar:user-plus-bold', color: 'primary' },
  ];

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Recent Activity</Typography>
      <Stack spacing={3}>
        {activities.map((item) => (
          <Stack key={item.id} direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: `${item.color}.lighter`, color: `${item.color}.main` }}>
              <Iconify icon={item.icon} width={20} />
            </Avatar>
            <Box>
              <Typography variant="subtitle2">{item.type}</Typography>
              <Typography variant="caption" color="text.secondary">
                {item.campaign} • {item.time}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
