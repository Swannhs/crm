import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import CircularProgress from '@mui/material/CircularProgress';

// ----------------------------------------------------------------------


interface Props {
  appointments: any[];
  loading: boolean;
}

export function AppointmentsTab({ appointments, loading }: Props) {
  if (loading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(appointments || []).map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Typography variant="subtitle2">{row.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{row.email}</Typography>
                </TableCell>
                <TableCell>{row.bookingType?.title}</TableCell>
                <TableCell>
                  <Typography variant="body2">{dayjs(row.startTime).format('MMM D, YYYY')}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{dayjs(row.startTime).format('h:mm A')}</Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      (row.status === 'CONFIRMED' && 'success') ||
                      (row.status === 'PENDING' && 'warning') ||
                      (row.status === 'CANCELLED' && 'error') ||
                      'default'
                    }
                    size="small"
                    variant="soft"
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {row.notes || '-'}
                </TableCell>
              </TableRow>
            ))}
            {appointments?.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: 'center', py: 10 }}>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    No appointments found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
