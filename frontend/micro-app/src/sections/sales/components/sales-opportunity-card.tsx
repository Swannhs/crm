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
    <Card
      sx={{
        p: 2,
        cursor: 'pointer',
        position: 'relative',
        transition: (theme) => theme.transitions.create(['box-shadow', 'transform']),
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) => theme.customShadows.z8,
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {item.name}
        </Typography>
        <Chip
          size="small"
          label={item.source === 'magento' ? 'External' : 'Internal'}
          variant="soft"
          color={item.source === 'magento' ? 'warning' : 'info'}
          sx={{ height: 20, fontSize: 10, px: 0.5 }}
        />
      </Stack>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
        {item.customerName || item.companyName || item.email || 'Customer unavailable'}
      </Typography>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Expected
          </Typography>
          <Typography variant="subtitle2">{formatOptionalCurrency(item.expectedRevenue)}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Probability
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            {typeof item.probability === 'number' ? `${item.probability}%` : '—'}
          </Typography>
        </Stack>
      </Stack>

      {item.nextActivity?.title && (
        <Box
          sx={{
            p: 1,
            mb: 2,
            borderRadius: 1,
            bgcolor: 'background.neutral',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: item.nextActivity.overdue ? 'error.main' : 'warning.main',
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
              Next: {item.nextActivity.title}
            </Typography>
          </Stack>
        </Box>
      )}

      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          size="small"
          select
          value={item.stage}
          onChange={(e) => onMove(e.target.value as SalesStage)}
          disabled={moving}
          fullWidth
          SelectProps={{
            sx: { height: 32, fontSize: '0.8125rem' },
          }}
        >
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="qualified">Qualified</MenuItem>
          <MenuItem value="proposal">Proposal</MenuItem>
          <MenuItem value="negotiation">Negotiation</MenuItem>
          <MenuItem value="won">Won</MenuItem>
          <MenuItem value="lost">Lost</MenuItem>
        </TextField>
        <Button size="small" variant="soft" onClick={onOpen} sx={{ height: 32, minWidth: 70 }}>
          Details
        </Button>
      </Stack>
    </Card>
  );
}
