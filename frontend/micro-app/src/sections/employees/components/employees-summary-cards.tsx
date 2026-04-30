import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { EmployeeSummary, formatOptionalNumber } from '../types';

export function EmployeesSummaryCards({ summary }: { summary?: EmployeeSummary }) {
  const cards = [
    { label: 'Total employees', value: formatOptionalNumber(summary?.totalEmployees) },
    { label: 'Active employees', value: formatOptionalNumber(summary?.activeEmployees) },
    { label: 'On leave', value: formatOptionalNumber(summary?.onLeave) },
    { label: 'Departments', value: formatOptionalNumber(summary?.departments) },
    { label: 'Pending time off', value: formatOptionalNumber(summary?.pendingTimeOff) },
    { label: 'Today attendance', value: formatOptionalNumber(summary?.todayAttendance) },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid key={card.label} item xs={12} sm={6} md={4}>
          <Card sx={{ p: 2.5 }}>
            <Stack spacing={0.5}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                {card.label}
              </Typography>
              <Typography variant="h4">{card.value}</Typography>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
