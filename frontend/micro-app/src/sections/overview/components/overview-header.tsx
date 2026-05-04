import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

type Props = {
  rangeMode: string;
  onRangeChange: (range: any) => void;
  onRefresh: () => void;
  loading?: boolean;
};

export function OverviewHeader({ rangeMode, onRangeChange, onRefresh, loading }: Props) {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useAuthContext();

  const displayName = user?.fullName || user?.username || user?.email || 'Operator';

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      sx={{
        mb: { xs: 3, md: 5 },
      }}
      spacing={3}
    >
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Welcome back, {displayName} 👋
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Unified overview of CRM, billing, commerce, and bookings.
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
        <Select
          size="small"
          value={rangeMode}
          onChange={(e) => onRangeChange(e.target.value)}
          sx={{
            typography: 'subtitle2',
            bgcolor: 'background.neutral',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          }}
        >
          <MenuItem value="7d">Last 7 days</MenuItem>
          <MenuItem value="30d">Last 30 days</MenuItem>
          <MenuItem value="90d">Last 90 days</MenuItem>
          <MenuItem value="180d">Last 6 months</MenuItem>
        </Select>

        <LoadingButton
          color="inherit"
          variant="soft"
          onClick={onRefresh}
          loading={loading}
          startIcon={<Iconify icon="solar:refresh-bold" />}
        >
          Refresh
        </LoadingButton>

        <Box sx={{ flexGrow: 1, display: { md: 'none' } }} />

        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push(paths.dashboard.contacts)}
            startIcon={<Iconify icon="solar:user-plus-bold" />}
          >
            Add contact
          </Button>

          <Button
            variant="soft"
            color="info"
            onClick={() => router.push(paths.dashboard.invoiceNew)}
            startIcon={<Iconify icon="solar:bill-list-bold" />}
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Invoice
          </Button>

          <Button
            variant="soft"
            color="success"
            onClick={() => router.push(paths.dashboard.shopSection('orders'))}
            startIcon={<Iconify icon="solar:bag-4-bold" />}
            sx={{ display: { xs: 'none', lg: 'inline-flex' } }}
          >
            Orders
          </Button>

          <Button
            variant="soft"
            color="secondary"
            onClick={() => router.push(paths.dashboard.calendar)}
            startIcon={<Iconify icon="solar:calendar-mark-bold" />}
          >
            Calendar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
