import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

type ReceiptData = {
  orderId: string;
  items: Array<{ name: string; qty: number; price: number }>;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  date: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: ReceiptData | null;
};

// Security: Escaping is handled natively by React when rendering text nodes.
export function PosReceiptDialog({ open, onClose, data }: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Receipt</DialogTitle>
      <DialogContent>
        <Box p={2} border={1} borderColor="divider" bgcolor="background.paper">
          {!data ? (
            <Typography>No receipt data available</Typography>
          ) : (
            <>
              <Typography variant="h6" align="center" gutterBottom>
                Store Receipt
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary">
                {data.date}
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
                Order #{data.orderId}
              </Typography>
              <Divider sx={{ my: 2 }} />

              {data.items.map((item, index) => (
                <Box key={index} display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2">
                    {item.qty}x {item.name}
                  </Typography>
                  <Typography variant="body2">${(item.qty * item.price).toFixed(2)}</Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">${data.subtotal.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Tax</Typography>
                <Typography variant="body2">${data.tax.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="subtitle2">Total</Typography>
                <Typography variant="subtitle2">${data.total.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2" color="text.secondary">Payment Method</Typography>
                <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                  {data.paymentMethod}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => window.print()} color="primary" disabled={!data}>
          Print
        </Button>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
