import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { Iconify } from 'src/components/iconify';

export function SalesKpiCard({
  title,
  value,
  subtitle,
  icon,
  loading,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  loading?: boolean;
}) {
  return (
    <Card sx={{ p: 2.5, height: '100%' }}>
      {loading ? <LinearProgress sx={{ mb: 2 }} /> : null}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{title}</Typography>
          <Typography variant="h5">{value}</Typography>
        </Box>
        <Iconify icon={icon} width={24} />
      </Stack>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.25 }}>{subtitle}</Typography>
    </Card>
  );
}
