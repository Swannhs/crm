import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Iconify } from 'src/components/iconify';
import { PosEmptyState } from './pos-empty-state';

type CartItem = {
  id: string; // unique cart line id
  productId: string;
  name: string;
  price: number;
  qty: number;
};

type Props = {
  items: CartItem[];
  onUpdateQuantity: (lineId: string, qty: number) => void;
  onRemoveItem: (lineId: string) => void;
  onClearCart: () => void;
};

export function PosCart({ items, onUpdateQuantity, onRemoveItem, onClearCart }: Props) {
  if (!items || items.length === 0) {
    return <PosEmptyState message="Cart is empty" />;
  }

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Current Order</Typography>
        <Button size="small" color="error" onClick={onClearCart}>
          Clear All
        </Button>
      </Box>
      <Divider />
      <Box flex={1} overflow="auto" p={2}>
        <Stack spacing={2}>
          {items.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center">
              <Box flex={1}>
                <Typography variant="subtitle2" noWrap>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price.toFixed(2)}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.qty - 1)}>
                  <Iconify icon="eva:minus-fill" />
                </IconButton>
                <Typography variant="body2">{item.qty}</Typography>
                <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.qty + 1)}>
                  <Iconify icon="eva:plus-fill" />
                </IconButton>
                <IconButton size="small" color="error" onClick={() => onRemoveItem(item.id)}>
                  <Iconify icon="eva:trash-2-outline" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
