import type { SalesOrderRow } from 'src/services/sales-dashboard-service';

import { useState } from 'react';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';

import { formatOptionalCurrency } from '../utils';
import { SalesEmptyState } from './sales-empty-state';

export function SalesOrdersPanel({ orders, search }: { orders: SalesOrderRow[]; search: string }) {
  const [status, setStatus] = useState('all');

  const query = search.trim().toLowerCase();
  const statuses = Array.from(new Set(orders.map((order) => String(order.status || 'Unknown'))));

  const filtered = orders.filter((order) => {
    const searchMatch = !query
      || [order.ref, order.customer, order.status, order.date]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(query));
    const statusMatch = status === 'all' || String(order.status || '').toLowerCase() === status.toLowerCase();
    return searchMatch && statusMatch;
  });

  if (!orders.length) {
    return <SalesEmptyState title="No orders" description="No orders are available right now." />;
  }

  if (!filtered.length) {
    return <SalesEmptyState title="No orders found" description="Try adjusting search or status filter." compact />;
  }

  return (
    <Stack spacing={1.5}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="flex-end">
        <TextField select label="Status" size="small" value={status} onChange={(e) => setStatus(e.target.value)} sx={{ minWidth: 180 }}>
          <MenuItem value="all">All statuses</MenuItem>
          {statuses.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </TextField>
      </Stack>

      <Card sx={{ p: 0 }}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell>{order.ref || order.id}</TableCell>
                  <TableCell>{order.customer || 'Unavailable'}</TableCell>
                  <TableCell>{formatOptionalCurrency(order.amount)}</TableCell>
                  <TableCell><Chip size="small" label={order.status || 'Unknown'} variant="outlined" /></TableCell>
                  <TableCell>{order.date ? new Date(order.date).toLocaleDateString() : 'Unavailable'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Stack>
  );
}
