'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function BusinessRetention({ data }: any) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
         <SummaryCard title="Retention Rate" value="84%" icon="solar:user-check-bold-duotone" color="success" subText="+2.4% from last month" />
      </Grid>
      <Grid item xs={12} md={4}>
         <SummaryCard title="Churn Risk" value="12" icon="solar:user-minus-bold-duotone" color="error" subText="Customers with low activity" />
      </Grid>
      <Grid item xs={12} md={4}>
         <SummaryCard title="Avg. Customer Age" value="1.2 Years" icon="solar:clock-circle-bold-duotone" color="info" subText="Member duration" />
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Customers at Risk</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Last Activity</TableCell>
                  <TableCell>Member Since</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mock data for demonstration */}
                {[
                  { id: 1, name: 'John Doe', email: 'john@example.com', lastActivity: '2026-03-15', since: '2024-01-10', status: 'At Risk' },
                  { id: 2, name: 'Jane Smith', email: 'jane@example.com', lastActivity: '2026-03-20', since: '2023-05-12', status: 'Inactive' },
                ].map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                         <Avatar alt={row.name} />
                         <Box>
                            <Typography variant="subtitle2">{row.name}</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>{row.email}</Typography>
                         </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>{fDate(row.lastActivity)}</TableCell>
                    <TableCell>{fDate(row.since)}</TableCell>
                    <TableCell>
                       <Box
                         sx={{
                           px: 1,
                           py: 0.5,
                           borderRadius: 0.75,
                           typography: 'caption',
                           fontWeight: 'bold',
                           bgcolor: 'error.lighter',
                           color: 'error.darker',
                         }}
                       >
                         {row.status}
                       </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------

export function BusinessBirthday() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
         <Typography variant="h6">Upcoming Birthdays</Typography>
         <Box sx={{ p: 1, px: 2, borderRadius: 1, bgcolor: 'primary.lighter', color: 'primary.darker', typography: 'caption', fontWeight: 'bold' }}>
            Auto-Greeter: ACTIVE
         </Box>
      </Stack>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contact</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Automation</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, name: 'Alice Walker', date: '2026-04-25', template: 'Birthday Promo 1', status: 'Scheduled' },
              { id: 2, name: 'Bob Roberts', date: '2026-04-28', template: 'Standard Greeting', status: 'Ready' },
            ].map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar alt={row.name} />
                    <Typography variant="subtitle2">{row.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{fDate(row.date)}</TableCell>
                <TableCell>{row.template}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 0.75,
                      typography: 'caption',
                      fontWeight: 'bold',
                      bgcolor: 'success.lighter',
                      color: 'success.darker',
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

function SummaryCard({ title, value, icon, color, subText }: any) {
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
        <Typography variant="caption" sx={{ opacity: 0.64 }}>{subText}</Typography>
      </Box>
      <Iconify icon={icon} width={64} sx={{ opacity: 0.24 }} />
    </Card>
  );
}
