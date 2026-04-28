
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { fCurrency } from 'src/utils/format-number';

import { SalesEmptyState } from './sales-empty-state';

import type { SalesOrderRow, SalesOpportunity } from '../types';

export function SalesOrdersTable({
  rows,
  opportunities,
  onLink,
  linking,
}: {
  rows: SalesOrderRow[];
  opportunities: SalesOpportunity[];
  onLink: (orderId: string, opportunityId: string) => void;
  linking?: boolean;
}) {
  const [selectedOppByOrder, setSelectedOppByOrder] = useState<Record<string, string>>({});

  if (!rows.length) {
    return <SalesEmptyState title="No orders found" description="No orders match current filters." />;
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Opportunity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const selected = selectedOppByOrder[row.id] || '';
              return (
                <TableRow key={row.id} hover>
                  <TableCell>
                    <Stack>
                      <Typography variant="subtitle2">{row.ref || row.id}</Typography>
                      <Typography variant="caption" color="text.secondary">{row.date ? new Date(row.date).toLocaleString() : 'No date'}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.customer || 'Unknown customer'}</TableCell>
                  <TableCell>{typeof row.amount === 'number' ? fCurrency(row.amount) : 'Unavailable'}</TableCell>
                  <TableCell><Chip size="small" label={row.status || 'Unknown'} variant="soft" /></TableCell>
                  <TableCell><Chip size="small" label={row.source.toUpperCase()} color={row.source === 'magento' ? 'warning' : 'info'} variant="outlined" /></TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Select
                        size="small"
                        displayEmpty
                        value={selected}
                        onChange={(e) => setSelectedOppByOrder((prev) => ({ ...prev, [row.id]: e.target.value }))}
                        sx={{ minWidth: 170 }}
                      >
                        <MenuItem value="">Select opportunity</MenuItem>
                        {opportunities.map((op) => (
                          <MenuItem key={op.id} value={op.id}>{op.name}</MenuItem>
                        ))}
                      </Select>
                      <Button
                        size="small"
                        variant="outlined"
                        disabled={!selected || linking}
                        onClick={() => onLink(row.id, selected)}
                      >
                        Link
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ px: 2, py: 1.5, color: 'text.secondary', fontSize: 13 }}>
        Showing {rows.length} order rows.
      </Box>
    </Card>
  );
}
