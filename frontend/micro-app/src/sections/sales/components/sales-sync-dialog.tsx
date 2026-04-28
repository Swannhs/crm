import { useState } from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import type { SyncResult, SyncPreview } from '../types';

export function SalesSyncDialog({
  open,
  preview,
  result,
  previewLoading,
  runLoading,
  onClose,
  onPreview,
  onRun,
}: {
  open: boolean;
  preview?: SyncPreview | null;
  result?: SyncResult | null;
  previewLoading?: boolean;
  runLoading?: boolean;
  onClose: () => void;
  onPreview: () => void;
  onRun: () => void;
}) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Data Sync</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 1 }}>
          <Alert severity="info">Run preview first. This sync can create/update CRM opportunities, order links, and customer mappings.</Alert>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="outlined" onClick={onPreview} disabled={previewLoading}>{previewLoading ? 'Previewing...' : 'Preview'}</Button>
            <Button variant="contained" color="warning" onClick={() => { setConfirmed(true); onRun(); }} disabled={!preview || runLoading}>
              {runLoading ? 'Running sync...' : 'Run sync'}
            </Button>
          </Stack>

          {preview ? (
            <>
              <Divider />
              <Typography variant="subtitle2">Preview result</Typography>
              <Typography variant="body2">Orders to create: {preview.ordersToCreate ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Orders to update: {preview.ordersToUpdate ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Customers to create: {preview.customersToCreate ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Customers to link: {preview.customersToLink ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Opportunities to create: {preview.opportunitiesToCreate ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Opportunities to update: {preview.opportunitiesToUpdate ?? 'Unavailable'}</Typography>
              {preview.warnings?.length ? <Alert severity="warning">{preview.warnings.join(' • ')}</Alert> : null}
            </>
          ) : null}

          {result && confirmed ? (
            <>
              <Divider />
              <Typography variant="subtitle2">Sync result</Typography>
              <Typography variant="body2">Synced orders: {result.syncedOrders ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Created opportunities: {result.createdOpportunities ?? 'Unavailable'}</Typography>
              <Typography variant="body2">Linked customers: {result.linkedCustomers ?? 'Unavailable'}</Typography>
              {result.success ? <Alert severity="success">Sync completed successfully.</Alert> : null}
              {result.warnings?.length ? <Alert severity="warning">{result.warnings.join(' • ')}</Alert> : null}
              {result.errors?.length ? <Alert severity="error">{result.errors.join(' • ')}</Alert> : null}
            </>
          ) : null}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
