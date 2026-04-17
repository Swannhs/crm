'use client';

import { 
  Download, 
  ExternalLink, 
  Plus, 
  Search,
  DollarSign,
  Clock,
  CheckCircle2
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  TextField, 
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress,
  Tabs,
  Tab,
  Stack
} from "@mui/material";
import { formatCurrency } from "@/lib/utils";
import { billingService } from "@/services/billing.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function BillingPage() {
  const [filter, setFilter] = useState('all');
  
  const { data: invoicesResponse, isLoading: isInvoicesLoading, error: invoicesError } = useQuery({
    queryKey: ['invoices', filter],
    queryFn: () => billingService.getInvoices({ status: filter === 'all' ? undefined : filter }),
  });

  const { data: statsResponse } = useQuery({
    queryKey: ['invoice-stats'],
    queryFn: () => billingService.getStats(),
  });

  const invoices = invoicesResponse?.data || [];
  const statsData = statsResponse?.data || {};

  const summary = [
    { label: "Total Invoiced", value: statsData.total_amount || 0, icon: DollarSign, color: '#6366f1' },
    { label: "Paid Invoices", value: statsData.paid_amount || 0, icon: CheckCircle2, color: '#10b981' },
    { label: "Pending Amount", value: statsData.pending_amount || 0, icon: Clock, color: '#f59e0b' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Billing & Invoices
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Track payments, issue invoices, and manage finances.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button 
            variant="outlined" 
            startIcon={<Download size={20} />}
            sx={{ py: 1.5, px: 3, borderRadius: 3 }}
          >
            Report
          </Button>
          <Button 
            variant="contained" 
            startIcon={<Plus size={20} />}
            sx={{ py: 1.5, px: 3, borderRadius: 3 }}
          >
            Create Invoice
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {summary.map((item) => (
          <Grid item xs={12} md={4} key={item.label}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ bgcolor: `${item.color}15`, color: item.color, width: 48, height: 48, borderRadius: 2 }}>
                <item.icon size={24} />
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>{formatCurrency(item.value / 100)}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 4, 
          overflow: 'hidden', 
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
          <Tabs 
            value={filter} 
            onChange={(_, v) => setFilter(v)}
            sx={{ 
                minHeight: 40,
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTab-root': { 
                    minHeight: 32, 
                    borderRadius: 2, 
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    fontSize: 13,
                    mx: 0.5,
                    color: 'text.secondary',
                    '&.Mui-selected': { bgcolor: 'primary.main', color: 'white' }
                }
            }}
          >
            <Tab label="All Invoices" value="all" />
            <Tab label="Paid" value="paid" />
            <Tab label="Pending" value="pending" />
          </Tabs>
          <TextField
             variant="outlined"
             placeholder="Filter..."
             size="small"
             sx={{ maxWidth: 200 }}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <Search size={16} />
                 </InputAdornment>
               ),
               sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' }
             }}
          />
        </Box>

        <TableContainer>
          {isInvoicesLoading ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <CircularProgress size={30} sx={{ mb: 2 }} />
              <Typography color="text.secondary">Loading invoices...</Typography>
            </Box>
          ) : invoicesError ? (
            <Box sx={{ p: 10, textAlign: 'center', color: 'error.main' }}>
              <Typography>Failed to fetch data from Billing service.</Typography>
            </Box>
          ) : invoices.length === 0 ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <Typography color="text.secondary">No invoices found for this filter.</Typography>
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Invoice ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'primary.main' }}>
                        #{inv.id.substring(0, 8).toUpperCase()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        {formatCurrency(inv.amountCents / 100)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={inv.status} 
                        size="small"
                        sx={{ 
                          fontWeight: 700, textTransform: 'uppercase', fontSize: 10,
                          borderRadius: 1.5,
                          bgcolor: inv.status === 'paid' ? 'success.light' : 'warning.light',
                          color: inv.status === 'paid' ? 'success.dark' : 'warning.dark',
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button size="small" variant="text" startIcon={<ExternalLink size={14} />} sx={{ borderRadius: 2 }}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Paper>
    </Box>
  );
}
