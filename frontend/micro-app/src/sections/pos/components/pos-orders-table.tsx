import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { PosEmptyState } from './pos-empty-state';
import { PosErrorState } from './pos-error-state';

type Order = {
  id: string;
  ticketNo: string;
  totalAmount: number;
  orderStatus: string;
  createdAt: string;
};

type Props = {
  orders: Order[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onViewReceipt: (id: string) => void;
  onRefund: (order: Order) => void;
};

export function PosOrdersTable({ orders, isLoading, isError, onRetry, onViewReceipt, onRefund }: Props) {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <PosErrorState message="Could not load orders." onRetry={onRetry} />;
  }

  if (!orders || orders.length === 0) {
    return <PosEmptyState message="No orders found." />;
  }

  return (
    <Box>
      <Typography variant="h6" p={2}>
        Recent Orders
      </Typography>
      <Divider />
      <Stack spacing={0} divider={<Divider />}>
        {orders.map((order) => (
          <Box key={order.id} display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Box>
              <Typography variant="subtitle2">Order #{order.ticketNo || order.id.substring(0, 8)}</Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(order.createdAt).toLocaleString()} • ${Number(order.totalAmount || 0).toFixed(2)} • {order.orderStatus}
              </Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Button size="small" variant="outlined" onClick={() => onViewReceipt(order.id)}>
                Receipt
              </Button>
              <Button size="small" color="error" variant="outlined" onClick={() => onRefund(order)}>
                Refund
              </Button>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
