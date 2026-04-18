'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { billingService } from 'src/services/billing-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { fCurrency } from 'src/utils/format-number';

import { BillingWidgetSummary } from '../billing-widget-summary';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'no', label: 'Invoice No.' },
  { id: 'customer', label: 'Customer' },
  { id: 'amount', label: 'Amount' },
  { id: 'status', label: 'Status' },
  { id: 'dueDate', label: 'Due Date' },
  { id: 'action', label: 'Action', align: 'right' as const },
];

// ----------------------------------------------------------------------

export function BillingListView() {
  const [search, setSearch] = useState('');
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['invoices', search],
    queryFn: () => billingService.getInvoices({ search }),
  });

  const invoices = data || [];

  const totalAmount = invoices.reduce((acc: number, curr: any) => acc + curr.totalDue, 0);

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Billing</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New Invoice
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid xs={12} md={4}>
          <BillingWidgetSummary
            title="Total Revenue"
            total={totalAmount}
            icon="solar:wad-of-money-bold"
          />
        </Grid>

        <Grid xs={12} md={4}>
          <BillingWidgetSummary
            title="Paid"
            total={totalAmount * 0.7}
            color="success"
            icon="solar:check-circle-bold"
          />
        </Grid>

        <Grid xs={12} md={4}>
          <BillingWidgetSummary
            title="Outstanding"
            total={totalAmount * 0.3}
            color="warning"
            icon="solar:clock-circle-bold"
          />
        </Grid>
      </Grid>

      <Card>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search invoices..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow>
                  {TABLE_HEAD.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell.align}>
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 10 }}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {invoices.map((row: any) => (
                      <TableRow key={row._id} hover>
                        <TableCell>{row.no}</TableCell>
                        <TableCell>{row.customerName}</TableCell>
                        <TableCell>{fCurrency(row.totalDue)}</TableCell>
                        <TableCell>
                          <Label
                            variant="soft"
                            color={
                              (row.status === 'PAID' && 'success') ||
                              (row.status === 'DUE' && 'warning') ||
                              (row.status === 'PAST DUE' && 'error') ||
                              'default'
                            }
                          >
                            {row.status}
                          </Label>
                        </TableCell>
                        <TableCell>{new Date(row.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <Iconify icon="eva:more-vertical-fill" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}

                    {invoices.length === 0 && !isLoading && (
                      <TableRow>
                        <TableCell colSpan={6} align="center" sx={{ py: 10 }}>
                          <Typography variant="h6">No data found</Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      </Card>
    </DashboardContent>
  );
}
