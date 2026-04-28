import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { formatOptionalCurrency } from '../utils';

import type { SalesStage, SalesOrderRow, SalesOpportunity } from '../types';

export function SalesOpportunityDrawer({
  open,
  item,
  orders,
  stageLoading,
  onClose,
  onEdit,
  onAddActivity,
  onLinkOrder,
  onMoveStage,
}: {
  open: boolean;
  item: SalesOpportunity | null;
  orders: SalesOrderRow[];
  stageLoading?: boolean;
  onClose: () => void;
  onEdit: () => void;
  onAddActivity: () => void;
  onLinkOrder: (orderId: string, opportunityId: string) => void;
  onMoveStage: (id: string, stage: SalesStage) => void;
}) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: '100%', sm: 460 } } }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>{item?.name || 'Opportunity details'}</Typography>
        {item ? (
          <>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip size="small" label={item.stage.toUpperCase()} variant="soft" />
              <Chip size="small" label={item.source === 'magento' ? 'External' : 'Internal'} variant="outlined" />
            </Stack>
            <Typography variant="body2" color="text.secondary">Customer / Company</Typography>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>{item.customerName || item.companyName || 'Unavailable'}</Typography>
            <Typography variant="body2" color="text.secondary">Expected revenue</Typography>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>{formatOptionalCurrency(item.expectedRevenue)}</Typography>
            <Typography variant="body2" color="text.secondary">Probability</Typography>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>{typeof item.probability === 'number' ? `${item.probability}%` : 'Unavailable'}</Typography>
            <Typography variant="body2" color="text.secondary">Next activity</Typography>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>{item.nextActivity?.title || 'No next activity'}</Typography>

            <TextField
              size="small"
              select
              label="Move stage"
              value={item.stage}
              onChange={(e) => onMoveStage(item.id, e.target.value as SalesStage)}
              disabled={stageLoading}
              sx={{ mb: 2, minWidth: 200 }}
            >
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="qualified">Qualified</MenuItem>
              <MenuItem value="proposal">Proposal</MenuItem>
              <MenuItem value="negotiation">Negotiation</MenuItem>
              <MenuItem value="won">Won</MenuItem>
              <MenuItem value="lost">Lost</MenuItem>
            </TextField>

            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Linked orders</Typography>
            <Stack spacing={1} sx={{ mb: 2 }}>
              {orders.slice(0, 5).map((row) => (
                <Stack key={row.id} direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2">{row.ref}</Typography>
                  <Button size="small" variant="outlined" onClick={() => onLinkOrder(row.id, item.id)}>Link order</Button>
                </Stack>
              ))}
              {!orders.length ? <Typography variant="caption" color="text.secondary">No orders available to link.</Typography> : null}
            </Stack>

            <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
              <Button variant="contained" onClick={onEdit}>Edit</Button>
              <Button variant="outlined" onClick={onAddActivity}>Add activity</Button>
              <Button variant="outlined" color="success" onClick={() => onMoveStage(item.id, 'won')}>Mark won</Button>
              <Button variant="outlined" color="error" onClick={() => onMoveStage(item.id, 'lost')}>Mark lost</Button>
              <Button variant="text" disabled>Create quote/invoice unavailable</Button>
            </Stack>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">No opportunity selected.</Typography>
        )}
      </Box>
    </Drawer>
  );
}
