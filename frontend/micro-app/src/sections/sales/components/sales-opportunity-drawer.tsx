import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { formatOptionalCurrency } from '../utils';
import { SalesOpportunityTimeline } from './sales-opportunity-timeline';

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
  onDelete,
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
  onDelete?: (id: string) => void;
}) {
  const [currentTab, setCurrentTab] = useState('overview');

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: '100%', sm: 480 } } }}>
      <Box sx={{ p: 3, pb: 0 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>{item?.name || 'Opportunity details'}</Typography>
        <Tabs value={currentTab} onChange={(e, val) => setCurrentTab(val)} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Tab label="Overview" value="overview" />
          <Tab label="Timeline" value="timeline" />
        </Tabs>
      </Box>

      <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        {item ? (
          <>
            {currentTab === 'overview' && (
              <Stack spacing={3}>
                <Stack direction="row" spacing={1}>
                  <Chip size="small" label={item.stage.toUpperCase()} variant="soft" color="primary" />
                  <Chip size="small" label={item.source === 'magento' ? 'External' : 'Internal'} variant="outlined" />
                </Stack>

                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Customer / Company</Typography>
                  <Typography variant="subtitle2">{item.customerName || item.companyName || 'Unavailable'}</Typography>
                </Box>

                <Stack direction="row" spacing={3}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Expected revenue</Typography>
                    <Typography variant="subtitle2">{formatOptionalCurrency(item.expectedRevenue)}</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Weighted value</Typography>
                    <Typography variant="subtitle2" color="primary.main">{formatOptionalCurrency(item.weightedValue)}</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Probability</Typography>
                    <Typography variant="subtitle2">{typeof item.probability === 'number' ? `${item.probability}%` : 'Unavailable'}</Typography>
                  </Box>
                </Stack>

                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Status / Next activity</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Label
                      variant="soft"
                      color={(item.status === 'won' && 'success') || (item.status === 'lost' && 'error') || 'info'}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {item.status}
                    </Label>
                    <Typography variant="subtitle2" color={item.nextActivity?.overdue ? 'error.main' : 'text.primary'}>
                      {item.nextActivity?.title || 'No next activity'}
                      {item.nextActivity?.dueDate && ` (${item.nextActivity.dueDate})`}
                    </Typography>
                  </Stack>
                </Box>

                <TextField
                  size="small"
                  select
                  label="Move stage"
                  value={item.stage}
                  onChange={(e) => onMoveStage(item.id, e.target.value as SalesStage)}
                  disabled={stageLoading}
                  fullWidth
                >
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="qualified">Qualified</MenuItem>
                  <MenuItem value="proposal">Proposal</MenuItem>
                  <MenuItem value="negotiation">Negotiation</MenuItem>
                  <MenuItem value="won">Won</MenuItem>
                  <MenuItem value="lost">Lost</MenuItem>
                </TextField>

                <Divider />
                
                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Quick Actions</Typography>
                   <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <Button variant="contained" size="small" onClick={onEdit}>Edit</Button>
                      <Button variant="soft" size="small" onClick={onAddActivity}>Add activity</Button>
                      <Button variant="soft" size="small" color="success" onClick={() => onMoveStage(item.id, 'won')}>Mark won</Button>
                      <Button variant="soft" size="small" color="error" onClick={() => onMoveStage(item.id, 'lost')}>Mark lost</Button>
                      {onDelete && (
                        <Button 
                          variant="soft" 
                          size="small" 
                          color="error" 
                          onClick={() => {
                            if (confirm('Archive this opportunity?')) {
                              onDelete(item.id);
                            }
                          }}
                        >
                          Archive
                        </Button>
                      )}
                   </Stack>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>Link recent orders</Typography>
                  <Stack spacing={1}>
                    {orders.slice(0, 3).map((row) => (
                      <Stack key={row.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, borderRadius: 1, bgcolor: 'background.neutral' }}>
                        <Box>
                          <Typography variant="subtitle2">{row.ref}</Typography>
                          <Typography variant="caption" color="text.secondary">{formatOptionalCurrency(row.amount)}</Typography>
                        </Box>
                        <Button size="small" variant="outlined" onClick={() => onLinkOrder(row.id, item.id)}>Link</Button>
                      </Stack>
                    ))}
                    {!orders.length ? <Typography variant="caption" color="text.secondary">No orders available to link.</Typography> : null}
                  </Stack>
                </Box>
              </Stack>
            )}

            {currentTab === 'timeline' && (
              <SalesOpportunityTimeline opportunityId={item.id} />
            )}
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">No opportunity selected.</Typography>
        )}
      </Box>
    </Drawer>
  );
}
