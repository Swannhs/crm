
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { fCurrency } from 'src/utils/format-number';

import { SalesEmptyState } from './sales-empty-state';

import type { SalesLeadRow } from '../types';

export function SalesLeadsTable({ rows, loading }: { rows: SalesLeadRow[]; loading?: boolean }) {
  if (loading) {
    return <Card sx={{ p: 3 }}><Typography variant="body2" color="text.secondary">Loading leads...</Typography></Card>;
  }

  if (!rows.length) {
    return <SalesEmptyState title="No leads found" description="Try adjusting stage/source filters or search keyword." />;
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lead</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Expected Revenue</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Stack>
                    <Typography variant="subtitle2">{row.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{row.email || row.phone || 'No contact info'}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip size="small" label={row.stage || 'Unknown'} variant="soft" />
                </TableCell>
                <TableCell>{row.priority || '—'}</TableCell>
                <TableCell>{typeof row.expectedRevenue === 'number' ? fCurrency(row.expectedRevenue) : 'Unavailable'}</TableCell>
                <TableCell>{row.type || 'Lead'}</TableCell>
                <TableCell>
                  <Chip size="small" label={(row.source || 'odoo').toUpperCase()} color={row.source === 'magento' ? 'warning' : 'info'} variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ px: 2, py: 1.5, color: 'text.secondary', fontSize: 13 }}>
        Showing {rows.length} lead rows.
      </Box>
    </Card>
  );
}
