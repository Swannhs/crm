import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fToNow } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

import { OverviewEmptyState } from './overview-empty-state';

// ----------------------------------------------------------------------

type ActivityItem = {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  type: string;
};

type Props = {
  activities: ActivityItem[];
  loading?: boolean;
};

export function OverviewActivityFeed({ activities, loading }: Props) {
  const theme = useTheme();

  if (!loading && activities.length === 0) {
    return (
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>Recent Activity</Typography>
        <OverviewEmptyState
          title="No recent activity"
          description="Your business events will appear here as they happen."
          icon="solar:history-bold"
          sx={{ py: 4 }}
        />
      </Card>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'contact': return 'solar:user-plus-bold';
      case 'invoice': return 'solar:bill-list-bold';
      case 'order': return 'solar:bag-4-bold';
      case 'booking': return 'solar:calendar-mark-bold';
      default: return 'solar:bell-bing-bold';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'contact': return 'primary';
      case 'invoice': return 'warning';
      case 'order': return 'success';
      case 'booking': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Recent Activity</Typography>

      <Stack spacing={3}>
        {activities.map((item) => (
          <Stack key={item.id} direction="row" spacing={2}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: alpha(theme.palette[getColor(item.type) as any].main, 0.08),
                color: theme.palette[getColor(item.type) as any].main,
              }}
            >
              <Iconify icon={getIcon(item.type)} width={20} />
            </Avatar>

            <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2">{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.subtitle}
              </Typography>
            </Stack>

            <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap' }}>
              {fToNow(item.timestamp)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}


