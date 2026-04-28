'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import LinearProgress from '@mui/material/LinearProgress';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function BusinessExpired() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Expiring Memberships & Contracts</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contact</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, name: 'Charlie Brown', item: 'Premium Membership', expiry: '2026-05-01', value: 1200 },
              { id: 2, name: 'Lucy van Pelt', item: 'Support Contract', expiry: '2026-05-15', value: 4500 },
            ].map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Typography variant="subtitle2">{row.name}</Typography>
                </TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>
                  <Box sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    {fDate(row.expiry)}
                  </Box>
                </TableCell>
                <TableCell>{fCurrency(row.value)}</TableCell>
                <TableCell>
                   <Button size="small" variant="soft" color="primary">Renew</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

// ----------------------------------------------------------------------

export function BusinessProgression() {
  const kpis = [
    { label: 'Revenue Goal', current: 75000, target: 100000, color: 'primary' },
    { label: 'New Customers', current: 45, target: 60, color: 'info' },
    { label: 'Retention Target', current: 84, target: 90, color: 'success' },
    { label: 'Ticket Resolution', current: 92, target: 95, color: 'warning' },
  ];

  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>Business Growth Milestones</Typography>
             <Stack spacing={4}>
                {kpis.map((kpi) => {
                  const progress = (kpi.current / kpi.target) * 100;
                  return (
                    <Box key={kpi.label}>
                       <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                          <Typography variant="subtitle2">{kpi.label}</Typography>
                          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                             {kpi.current} / {kpi.target} ({Math.round(progress)}%)
                          </Typography>
                       </Stack>
                       <LinearProgress
                         variant="determinate"
                         value={progress}
                         color={kpi.color as any}
                         sx={{ height: 10, borderRadius: 1 }}
                       />
                    </Box>
                  );
                })}
             </Stack>
          </Card>
       </Grid>

       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: 'primary.lighter', color: 'primary.darker' }}>
             <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                <Iconify icon="solar:crown-bold-duotone" width={64} />
                <Typography variant="h5">Next Milestone</Typography>
                <Typography variant="body2">
                   You are $25,000 away from reaching your quarterly revenue goal.
                </Typography>
                <Button variant="contained" color="primary">View Full Report</Button>
             </Stack>
          </Card>
       </Grid>
    </Grid>
  );
}
