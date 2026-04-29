import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  open: boolean;
  onClose: () => void;
  orderId: string | null;
  maxAmount: number;
  onRefund: (reason: string, amount: number) => Promise<void>;
};

export function PosRefundDialog({ open, onClose, orderId, maxAmount, onRefund }: Props) {
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState<string>(maxAmount.toString());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    if (!reason.trim()) {
      setError('A refund reason is required.');
      return;
    }
    const refundAmount = parseFloat(amount);
    if (isNaN(refundAmount) || refundAmount <= 0 || refundAmount > maxAmount) {
      setError(`Amount must be between 0.01 and ${maxAmount.toFixed(2)}.`);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await onRefund(reason, refundAmount);
      setReason('');
      onClose();
    } catch (err: any) {
      setError(err.message || 'Refund failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={!loading ? onClose : undefined} fullWidth maxWidth="xs">
      <DialogTitle>Refund Order {orderId}</DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Max refundable amount: ${maxAmount.toFixed(2)}
          </Typography>
          <TextField
            fullWidth
            label="Refund Reason"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            margin="normal"
            disabled={loading}
          />
          <TextField
            fullWidth
            type="number"
            label="Amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            margin="normal"
            disabled={loading}
            inputProps={{ min: 0.01, max: maxAmount, step: 0.01 }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="error" disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Confirm Refund'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
