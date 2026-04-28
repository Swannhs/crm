import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import type { SalesStage, SalesPriority, SalesOpportunity } from '../types';

export type OpportunityFormValues = {
  name: string;
  customerName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  expectedRevenue?: number;
  probability?: number;
  stage: SalesStage;
  priority?: SalesPriority;
  expectedCloseDate?: string;
  assignedTo?: string;
  notes?: string;
  source: 'odoo' | 'magento' | 'manual';
};

const DEFAULT_VALUES: OpportunityFormValues = {
  name: '',
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  expectedRevenue: undefined,
  probability: undefined,
  stage: 'new',
  priority: 'medium',
  expectedCloseDate: '',
  assignedTo: '',
  notes: '',
  source: 'manual',
};

export function SalesOpportunityDialog({
  open,
  initial,
  loading,
  onClose,
  onSubmit,
}: {
  open: boolean;
  initial?: SalesOpportunity | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (values: OpportunityFormValues) => void;
}) {
  const { register, handleSubmit, reset } = useForm<OpportunityFormValues>({ defaultValues: DEFAULT_VALUES });

  useEffect(() => {
    if (open) {
      reset({
        ...DEFAULT_VALUES,
        ...initial,
        source: initial?.source ?? 'manual',
      });
    }
  }, [initial, open, reset]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{initial ? 'Edit opportunity' : 'Create opportunity'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 1 }}>
          <TextField label="Opportunity name" required {...register('name')} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label="Customer name" fullWidth {...register('customerName')} />
            <TextField label="Company" fullWidth {...register('companyName')} />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label="Email" type="email" fullWidth {...register('email')} />
            <TextField label="Phone" fullWidth {...register('phone')} />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label="Expected revenue" type="number" fullWidth {...register('expectedRevenue', { valueAsNumber: true })} />
            <TextField label="Probability %" type="number" fullWidth {...register('probability', { valueAsNumber: true })} />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField select label="Stage" fullWidth defaultValue="new" {...register('stage')}>
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="qualified">Qualified</MenuItem>
              <MenuItem value="proposal">Proposal</MenuItem>
              <MenuItem value="negotiation">Negotiation</MenuItem>
              <MenuItem value="won">Won</MenuItem>
              <MenuItem value="lost">Lost</MenuItem>
            </TextField>
            <TextField select label="Priority" fullWidth defaultValue="medium" {...register('priority')}>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
            <TextField select label="Source" fullWidth defaultValue="manual" {...register('source')}>
              <MenuItem value="manual">Manual</MenuItem>
              <MenuItem value="odoo">Internal</MenuItem>
              <MenuItem value="magento">External</MenuItem>
            </TextField>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label="Expected close date" type="date" InputLabelProps={{ shrink: true }} fullWidth {...register('expectedCloseDate')} />
            <TextField label="Assigned owner" fullWidth {...register('assignedTo')} />
          </Stack>
          <TextField label="Notes" multiline minRows={3} {...register('notes')} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)} disabled={loading}>
          {initial ? 'Save changes' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
