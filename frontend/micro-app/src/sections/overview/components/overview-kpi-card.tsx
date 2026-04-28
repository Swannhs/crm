import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber, fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  value?: number | null;
  icon: string;
  type?: 'number' | 'currency';
  loading?: boolean;
  error?: boolean;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  description?: string;
  trend?: {
    label: string;
    variant: 'success' | 'error' | 'warning' | 'info';
  };
};

export function OverviewKpiCard({
  title,
  value,
  icon,
  type = 'number',
  loading,
  error,
  color = 'primary',
  description,
  trend,
}: Props) {
  const theme = useTheme();

  const renderValue = () => {
    if (loading) return <Skeleton width={64} height={32} />;
    if (error || value === undefined || value === null) return 'Unavailable';
    return type === 'currency' ? fCurrency(value) : fNumber(value);
  };

  return (
    <Card
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: theme.transitions.create(['box-shadow', 'transform']),
        '&:hover': {
          boxShadow: theme.customShadows.z12,
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>

        <Box
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette[color].main,
            bgcolor: alpha(theme.palette[color].main, 0.08),
          }}
        >
          <Iconify icon={icon} width={24} />
        </Box>
      </Stack>

      <Stack spacing={0.5}>
        <Typography variant="h4">{renderValue()}</Typography>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          {trend && !loading && !error && (
            <Box
              component="span"
              sx={{
                typography: 'caption',
                fontWeight: 'bold',
                color: theme.palette[trend.variant].main,
                bgcolor: alpha(theme.palette[trend.variant].main, 0.08),
                borderRadius: 0.5,
                px: 0.75,
                py: 0.25,
              }}
            >
              {trend.label}
            </Box>
          )}
          {description && (
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              {description}
            </Typography>
          )}
        </Stack>
      </Stack>

      {error && (
        <Box
          sx={{
            mt: 1,
            typography: 'caption',
            color: 'error.main',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Iconify icon="solar:danger-bold" width={14} sx={{ mr: 0.5 }} />
          Service unavailable
        </Box>
      )}
    </Card>
  );
}
