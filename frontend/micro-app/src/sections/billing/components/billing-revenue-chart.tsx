import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { fCurrency } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';

type Props = {
  data: Array<{ key: string; value: number }>;
  title?: string;
  subheader?: string;
};

export function BillingRevenueChart({ data, title, subheader }: Props) {
  const theme = useTheme();
  const [seriesData, setSeriesData] = useState('Total Revenue');

  const chartOptions = useChart({
    colors: [theme.palette.primary.main],
    xaxis: {
      categories: data.map((item) => {
        const [year, month] = item.key.split('-');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[parseInt(month, 10) - 1]} ${year.slice(2)}`;
      }),
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `$${Math.round(value).toLocaleString()}`,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => fCurrency(value),
      },
    },
  });

  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows.card,
      }}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <TextField
            select
            size="small"
            value={seriesData}
            onChange={(e) => setSeriesData(e.target.value)}
            SelectProps={{ native: false }}
          >
            {['Total Revenue', 'Paid Only'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        }
      />

      <Box sx={{ mt: 3, mx: 3 }}>
        <Chart
          type="area"
          series={[{ name: seriesData, data: data.map((item) => item.value) }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
