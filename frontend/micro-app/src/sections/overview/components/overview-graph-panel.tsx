import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Chart, useChart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';
import { CustomTabs } from 'src/components/custom-tabs/custom-tabs';
import { OverviewEmptyState } from './overview-empty-state';

// ----------------------------------------------------------------------

type Props = {
  data: {
    categories: string[];
    series: Array<{ name: string; data: number[] }>;
  };
  loading?: boolean;
  error?: boolean;
  activeMode: string;
  onModeChange: (mode: any) => void;
};

const MODES = [
  { value: 'revenue', label: 'Revenue', icon: 'solar:wallet-money-bold' },
  { value: 'contacts', label: 'Contacts', icon: 'solar:users-group-rounded-bold' },
  { value: 'orders', label: 'Orders', icon: 'solar:bag-4-bold' },
  { value: 'pipeline', label: 'Pipeline', icon: 'solar:chart-2-bold' },
  { value: 'bookings', label: 'Bookings', icon: 'solar:calendar-mark-bold' },
];

export function OverviewGraphPanel({ data, loading, error, activeMode, onModeChange }: Props) {
  const theme = useTheme();

  const chartOptions = useChart({
    xaxis: {
      categories: data.categories,
    },
    tooltip: {
      x: { show: true },
      marker: { show: true },
    },
  });

  const renderContent = () => {
    if (loading) {
      return <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />;
    }

    if (error) {
      return (
        <OverviewEmptyState
          title="Analytics unavailable"
          description="We couldn't load the trend data right now. Please try again later."
          icon="solar:danger-bold"
          sx={{ py: 10 }}
        />
      );
    }

    if (data.series.length === 0 || data.categories.length === 0) {
      return (
        <OverviewEmptyState
          title="No trend data available"
          description="Not enough data to generate an analytics view for this range."
          icon="solar:chart-square-bold"
          sx={{ py: 10 }}
        />
      );
    }

    return (
      <Chart
        type={activeMode === 'revenue' ? 'area' : 'bar'}
        series={data.series}
        options={chartOptions}
        height={320}
      />
    );
  };

  const getTitle = () => {
    const mode = MODES.find((m) => m.value === activeMode);
    return `${mode?.label ?? ''} trend`;
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        sx={{ mb: 3 }}
        spacing={2}
      >
        <Box>
          <Typography variant="h6">{getTitle()}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Multi-source business movement
          </Typography>
        </Box>

        <CustomTabs
          value={activeMode}
          onChange={(_, value) => onModeChange(value)}
          sx={{
            borderRadius: 1,
            bgcolor: 'background.neutral',
          }}
        >
          {MODES.map((mode) => (
            <Tab
              key={mode.value}
              value={mode.value}
              label={mode.label}
              icon={<Iconify icon={mode.icon} width={18} />}
              iconPosition="start"
              sx={{
                minHeight: 38,
                typography: 'caption',
                fontWeight: 'bold',
                '&.Mui-selected': {
                  color: 'text.primary',
                },
              }}
            />
          ))}
        </CustomTabs>
      </Stack>

      {renderContent()}
    </Card>
  );
}
