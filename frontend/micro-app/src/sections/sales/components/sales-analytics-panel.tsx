import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SalesLeadRow, SalesSummary, SalesOrderRow } from 'src/services/sales-dashboard-service';
import { scoringService } from 'src/services/scoring-service';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { SalesEmptyState } from './sales-empty-state';
import { formatOptionalNumber, formatOptionalCurrency } from '../utils';

export function SalesAnalyticsPanel({
  summary,
  orders,
  leads,
}: {
  summary?: SalesSummary;
  orders: SalesOrderRow[];
  leads: SalesLeadRow[];
}) {
  const queryClient = useQueryClient();
  const [draftName, setDraftName] = useState('Recent Sales Activity');
  const [draftWeight, setDraftWeight] = useState(10);
  const [draftScope, setDraftScope] = useState<'contact' | 'lead' | 'both'>('lead');
  const [draftDays, setDraftDays] = useState(14);

  const { data: scoreRules = [] } = useQuery({
    queryKey: ['score-rules'],
    queryFn: () => scoringService.getScoreRules(),
    staleTime: 30 * 1000,
  });

  const createRuleMutation = useMutation({
    mutationFn: () =>
      scoringService.createScoreRule({
        name: draftName,
        weight: draftWeight,
        scope: draftScope,
        category: 'sales_activity_recency',
        condition: {
          field: 'daysSinceActivity',
          operator: 'lte',
          value: draftDays,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['score-rules'] });
      queryClient.invalidateQueries({ queryKey: ['hot-lead-scores'] });
    },
  });

  const toggleRuleMutation = useMutation({
    mutationFn: ({ id, active }: { id: string; active: boolean }) => scoringService.updateScoreRule(id, { active }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['score-rules'] });
      queryClient.invalidateQueries({ queryKey: ['hot-lead-scores'] });
    },
  });

  if (!summary && !orders.length && !leads.length) {
    return <SalesEmptyState title="Not enough data" description="Not enough data to show analytics yet." />;
  }

  const opportunities = leads.filter((lead) => String(lead.type || '').toLowerCase().includes('opportunity')).length;
  const conversionRate = opportunities > 0 ? (orders.length / opportunities) * 100 : undefined;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Revenue</Typography>
            <Typography variant="h6">{formatOptionalCurrency(summary?.totalRevenue)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Orders</Typography>
            <Typography variant="h6">{formatOptionalNumber(summary?.totalOrders ?? orders.length)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Leads</Typography>
            <Typography variant="h6">{formatOptionalNumber(leads.length)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Conversion Snapshot</Typography>
            <Typography variant="h6">{typeof conversionRate === 'number' ? `${conversionRate.toFixed(1)}%` : 'Unavailable'}</Typography>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Scoring Rule Settings</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
              <TextField label="Rule name" value={draftName} onChange={(e) => setDraftName(e.target.value)} size="small" />
              <TextField label="Weight" type="number" value={draftWeight} onChange={(e) => setDraftWeight(Number(e.target.value || 0))} size="small" />
              <TextField label="Scope" select value={draftScope} onChange={(e) => setDraftScope(e.target.value as any)} size="small">
                <MenuItem value="contact">Contact</MenuItem>
                <MenuItem value="lead">Lead</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </TextField>
              <TextField label="Recency Days" type="number" value={draftDays} onChange={(e) => setDraftDays(Number(e.target.value || 0))} size="small" />
              <Button variant="contained" onClick={() => createRuleMutation.mutate()} disabled={createRuleMutation.isPending}>Add Rule</Button>
            </Stack>

            <Stack spacing={1}>
              {scoreRules.map((rule: any) => (
                <Stack key={rule.id} direction="row" alignItems="center" justifyContent="space-between" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 1.5, py: 1 }}>
                  <Typography variant="body2">{rule.name} ({rule.category}) • weight {rule.weight}</Typography>
                  <FormControlLabel
                    control={<Switch checked={Boolean(rule.active)} onChange={(e) => toggleRuleMutation.mutate({ id: rule.id, active: e.target.checked })} />}
                    label={rule.active ? 'Active' : 'Disabled'}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
