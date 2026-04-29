import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  subtotal: number;
  tax: number | null;
  total: number;
  onCheckout: () => void;
  disabled?: boolean;
  disabledReason?: string;
};

export function PosPaymentPanel({ subtotal, tax, total, onCheckout, disabled, disabledReason }: Props) {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Tax</Typography>
        <Typography color={tax === null ? 'text.disabled' : 'text.primary'}>
          {tax === null ? 'Calculated at checkout' : `$${tax.toFixed(2)}`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">${total.toFixed(2)}</Typography>
      </Box>
      {disabledReason && (
        <Typography color="error" variant="caption" display="block" mb={1}>
          {disabledReason}
        </Typography>
      )}
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
