import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  disabled?: boolean;
};

export function PosPaymentPanel({ subtotal, tax, total, onCheckout, disabled }: Props) {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Tax</Typography>
        <Typography>${tax.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">${total.toFixed(2)}</Typography>
      </Box>
      <Button
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        onClick={onCheckout}
        disabled={disabled || total <= 0}
      >
        Checkout
      </Button>
    </Box>
  );
}
