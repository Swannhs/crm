import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  open: boolean;
  onClose: () => void;
  totalAmount: number;
  paymentMethods?: Array<{ value: string; label: string }>;
  onConfirmPayment: (paymentMethod: string, amount: number) => Promise<void>;
};

export function PosCheckoutDialog({ open, onClose, totalAmount, paymentMethods, onConfirmPayment }: Props) {
  const [method, setMethod] = useState('');
  const [amountGiven, setAmountGiven] = useState<string>(totalAmount.toString());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setAmountGiven(totalAmount.toString());
      setMethod('');
      setError(null);
    }
  }, [open, totalAmount]);

  const hasPaymentMethods = Array.isArray(paymentMethods) && paymentMethods.length > 0;

  const handleConfirm = async () => {
    if (!hasPaymentMethods) return;

    if (!method) {
      setError('Please select a payment method.');
      return;
    }
    const amount = parseFloat(amountGiven);
    if (isNaN(amount) || amount < totalAmount) {
      setError('Amount given must be greater than or equal to the total.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await onConfirmPayment(method, amount);
      onClose(); // only close on success
    } catch (err: any) {
      setError(err.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const change = Math.max(0, parseFloat(amountGiven || '0') - totalAmount);

  return (
    <Dialog open={open} onClose={!loading ? onClose : undefined} fullWidth maxWidth="xs">
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Typography variant="h6" gutterBottom>
            Total Due: ${totalAmount.toFixed(2)}
          </Typography>

          {!hasPaymentMethods ? (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              Payment methods are unavailable.
            </Typography>
          ) : (
            <>
              <TextField
                select
                fullWidth
                label="Payment Method"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                margin="normal"
                disabled={loading}
              >
                {paymentMethods.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                type="number"
                label="Amount Given"
                value={amountGiven}
                onChange={(e) => setAmountGiven(e.target.value)}
                margin="normal"
                disabled={loading}
                inputProps={{ min: totalAmount, step: 0.01 }}
              />

              <Typography variant="body1" sx={{ mt: 2 }} color={change > 0 ? 'success.main' : 'text.secondary'}>
                Change: ${change.toFixed(2)}
              </Typography>

              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" disabled={loading || !hasPaymentMethods}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Confirm Payment'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
