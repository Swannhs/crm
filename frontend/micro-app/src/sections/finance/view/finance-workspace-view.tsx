'use client';

import { useMemo } from 'react';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { billingService } from 'src/services/billing-service';
import { financeService } from 'src/services/finance-service';
import { showToast } from 'src/components/toast';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { Form, RHFTextField } from 'src/components/hook-form';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const InvoiceSchema = zod.object({
  customerName: zod.string().min(1, 'Customer name is required'),
  totalAmount: zod.coerce.number().min(1, 'Amount must be positive'),
  dueDate: zod.string().min(1, 'Due date is required'),
});

type Props = {
  section?: string;
  invoiceId?: string;
  mode?: 'list' | 'new' | 'edit' | 'preview' | 'print' | 'payment' | 'confirm' | 'receipt';
};

export function FinanceWorkspaceView({ section, invoiceId, mode = 'list' }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: {
      customerName: '',
      totalAmount: 0,
      dueDate: '',
    },
  });

  const invoiceQuery = useQuery({
    queryKey: ['invoice', invoiceId],
    queryFn: () => billingService.getInvoice(invoiceId!),
    enabled: Boolean(invoiceId),
  });

  const invoicesQuery = useQuery({
    queryKey: ['invoice-list', section],
    queryFn: () => billingService.getInvoices(section ? { section } : undefined),
    enabled: !invoiceId,
  });

  const paymentsQuery = useQuery({
    queryKey: ['payments'],
    queryFn: () => billingService.getPayments(),
    enabled: section === 'payouts' || mode === 'receipt',
  });

  const revenueQuery = useQuery({
    queryKey: ['finance-summary'],
    queryFn: () => financeService.getRevenueStats(),
    enabled: ['overview', 'income', 'expense', 'pnl'].includes(section || 'overview'),
  });

  const saveMutation = useMutation({
    mutationFn: async (values: any) => {
      const payload = {
        amount_cents: Math.round(values.totalAmount * 100),
        metadata: {
          customerName: values.customerName,
          dueDate: values.dueDate,
        },
      };

      if (mode === 'edit' && invoiceId) {
        return billingService.updateInvoice(invoiceId, payload);
      }

      return billingService.createInvoice(payload);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['invoice-list'] });
      showToast({
        message: mode === 'edit' ? 'Invoice updated successfully' : 'Invoice created successfully',
        severity: 'success',
      });
      router.push(paths.dashboard.billing);
    },
    onError: (error: any) => {
      console.error(error);
      showToast({
        message: error.message || 'Failed to save invoice',
        severity: 'error',
      });
    },
  });

  const title = useMemo(() => {
    if (mode === 'new') return 'Create Invoice';
    if (mode === 'edit') return 'Edit Invoice';
    if (mode === 'preview') return 'Invoice Preview';
    if (mode === 'print') return 'Print Invoice';
    if (mode === 'payment') return 'Invoice Payment';
    if (mode === 'confirm') return 'Payment Confirmation';
    if (mode === 'receipt') return 'Receipt';
    if (section === 'payouts') return 'Finance Payouts';
    if (section === 'income') return 'Finance Income';
    if (section === 'expense') return 'Finance Expense';
    if (section === 'pnl') return 'Profit and Loss';
    return 'Billing and Finance';
  }, [mode, section]);

  const links = [
    { href: paths.dashboard.invoices, label: 'Invoice List' },
    { href: paths.dashboard.invoiceNew, label: 'Add Invoice' },
    { href: paths.dashboard.financeSection('overview'), label: 'Finance Overview' },
    { href: paths.dashboard.financeSection('payouts'), label: 'Payouts' },
    { href: paths.dashboard.financeSection('income'), label: 'Income' },
    { href: paths.dashboard.financeSection('expense'), label: 'Expense' },
    { href: paths.dashboard.financeSection('pnl'), label: 'P&L' },
  ];

  if (invoiceId && invoiceQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const invoice = invoiceQuery.data;

  if (invoice && (mode === 'preview' || mode === 'print' || mode === 'payment' || mode === 'confirm' || mode === 'receipt')) {
    return (
      <FeatureRouteShell
        title={title}
        description="Legacy invoice preview, print, payment, confirmation, and receipt flows mapped into the micro-app."
        links={links}
      >
        <Card sx={{ p: 4 }}>
          <Stack spacing={2}>
            <Typography variant="h5">Invoice #{invoice.no || invoice._id}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Customer: {invoice.customerName || invoice.billTo || 'Unknown'}
            </Typography>
            <Typography variant="body2">Status: {invoice.status || 'Draft'}</Typography>
            <Typography variant="body2">Due: {invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : 'N/A'}</Typography>
            <Typography variant="h4">{fCurrency(invoice.totalDue || invoice.totalAmount || 0)}</Typography>
            {(mode === 'payment' || mode === 'confirm') && (
              <Alert severity={mode === 'confirm' ? 'success' : 'info'}>
                {mode === 'confirm'
                  ? 'Payment confirmation route is active and bound to the real invoice record.'
                  : 'Payment collection route is active. Processor checkout wiring remains backend-dependent per tenant setup.'}
              </Alert>
            )}
            {mode === 'receipt' && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Recent payment records: {(paymentsQuery.data || []).length}
              </Typography>
            )}
          </Stack>
        </Card>
      </FeatureRouteShell>
    );
  }

  if (mode === 'new' || mode === 'edit') {
    const defaultValues = {
      customerName: invoice?.customerName || '',
      totalAmount: invoice?.totalAmount || invoice?.totalDue || 0,
      dueDate: invoice?.dueDate ? new Date(invoice.dueDate).toISOString().slice(0, 10) : '',
    };

    if (methods.getValues('customerName') !== defaultValues.customerName && invoice) {
      methods.reset(defaultValues);
    }

    return (
      <FeatureRouteShell
        title={title}
        description="Legacy add and edit invoice routes now resolve to a real invoice form in the micro-app."
        links={links}
      >
        <Card sx={{ p: 3 }}>
          <Form methods={methods} onSubmit={methods.handleSubmit((values) => saveMutation.mutate(values))}>
            <Stack spacing={3}>
              <RHFTextField name="customerName" label="Customer Name" />
              <RHFTextField name="totalAmount" label="Amount" type="number" />
              <TextField
                type="date"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                value={methods.watch('dueDate')}
                onChange={(event) => methods.setValue('dueDate', event.target.value, { shouldValidate: true })}
              />
              <Button type="submit" variant="contained" disabled={saveMutation.isPending}>
                {mode === 'edit' ? 'Save Invoice' : 'Create Invoice'}
              </Button>
            </Stack>
          </Form>
        </Card>
      </FeatureRouteShell>
    );
  }

  return (
    <FeatureRouteShell
      title={title}
      description="Finance parity workspace covering overview, payouts, income, expense, profit and loss, and invoice list flows."
      links={links}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={section === 'payouts' ? 12 : 8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {section === 'payouts' ? 'Payout History' : 'Invoices'}
            </Typography>
            <Stack spacing={2}>
              {((section === 'payouts' ? paymentsQuery.data : invoicesQuery.data) || []).map((item: any) => (
                <Box key={item._id || item.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                  <Typography variant="subtitle2">
                    {item.customerName || item.metadata?.customerName || item.description || item.no || item.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fCurrency(item.totalDue || item.amount || (item.amountCents || item.amount_cents || 0) / 100)}
                  </Typography>
                </Box>
              ))}

              {!invoicesQuery.isLoading && !paymentsQuery.isLoading && ((section === 'payouts' ? paymentsQuery.data : invoicesQuery.data) || []).length === 0 && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  No records are available for this finance route yet.
                </Typography>
              )}
            </Stack>
          </Card>
        </Grid>

        {section !== 'payouts' && (
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Summary
              </Typography>
              {revenueQuery.isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <Stack spacing={1.5}>
                  <Typography variant="body2">Reported metrics are sourced from the current finance APIs.</Typography>
                  <Divider />
                  <Stack spacing={2} sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Total Revenue</Typography>
                      <Typography variant="subtitle2">{fCurrency(revenueQuery.data?.totalRevenue || 0)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Paid</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'success.main' }}>{fCurrency(revenueQuery.data?.paid || 0)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Outstanding</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'error.main' }}>{fCurrency(revenueQuery.data?.outstanding || 0)}</Typography>
                    </Box>
                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Invoice Count</Typography>
                      <Typography variant="subtitle2">{revenueQuery.data?.invoiceCount || 0}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              )}
            </Card>
          </Grid>
        )}
      </Grid>
    </FeatureRouteShell>
  );
}
