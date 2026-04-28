import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { formatOptionalCurrency } from '../utils';

import type { SalesStage, SalesOpportunity } from '../types';

export function SalesOpportunityCard({
  item,
  moving,
  onOpen,
  onMove,
}: {
  item: SalesOpportunity;
  moving?: boolean;
  onOpen: () => void;
  onMove: (stage: SalesStage) => void;
}) {
  return (
    <Card sx={{ p: 1.5 }}>
      <Typography variant="subtitle2">{item.name}</Typography>
      <Typography variant="caption" color="text.secondary">{item.customerName || item.companyName || item.email || 'Customer unavailable'}</Typography>
      <Stack direction="row" spacing={0.75} sx={{ my: 1 }}>
        <Chip size="small" label={item.source === 'magento' ? 'External' : 'Internal'} variant="soft" color={item.source === 'magento' ? 'warning' : 'info'} />
        {item.priority ? <Chip size="small" label={item.priority} variant="outlined" /> : null}
      </Stack>
      <Typography variant="body2">Expected: {formatOptionalCurrency(item.expectedRevenue)}</Typography>
      <Typography variant="body2">Probability: {typeof item.probability === 'number' ? `${item.probability}%` : 'Unavailable'}</Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
        {item.nextActivity?.title ? `Next: ${item.nextActivity.title}` : 'No next activity'}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 1.25 }}>
        <TextField
          size="small"
          select
          value={item.stage}
          onChange={(e) => onMove(e.target.value as SalesStage)}
          disabled={moving}
          sx={{ minWidth: 130 }}
        >
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="qualified">Qualified</MenuItem>
          <MenuItem value="proposal">Proposal</MenuItem>
          <MenuItem value="negotiation">Negotiation</MenuItem>
          <MenuItem value="won">Won</MenuItem>
          <MenuItem value="lost">Lost</MenuItem>
        </TextField>
        <Button size="small" variant="outlined" onClick={onOpen}>Details</Button>
      </Stack>
    </Card>
  );
}
