import type { SalesLeadRow, SalesSummary } from 'src/services/sales-dashboard-service';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { formatOptionalCurrency } from '../utils';
import { SalesEmptyState } from './sales-empty-state';

const STAGE_LABELS: Record<string, string> = {
  new: 'New',
  qualified: 'Qualified',
  proposal: 'Proposal',
  won: 'Won',
  lost: 'Lost',
};

function normalizeStage(stage?: string) {
  const raw = String(stage || '').trim().toLowerCase();
  if (!raw) return 'new';
  if (raw.includes('qual')) return 'qualified';
  if (raw.includes('prop')) return 'proposal';
  if (raw.includes('won')) return 'won';
  if (raw.includes('lost')) return 'lost';
  if (raw.includes('new')) return 'new';
  return raw;
}

export function SalesPipelinePanel({ leads, summary }: { leads: SalesLeadRow[]; summary?: SalesSummary }) {
  if (!leads.length) {
    return <SalesEmptyState title="No pipeline data" description="Leads will appear here once available." />;
  }

  const groups = leads.reduce<Record<string, SalesLeadRow[]>>((acc, lead) => {
    const key = normalizeStage(lead.stage);
    if (!acc[key]) acc[key] = [];
    acc[key].push(lead);
    return acc;
  }, {});

  const orderedStages = ['new', 'qualified', 'proposal', 'won', 'lost'];

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2.5}>
      <Card sx={{ p: 2.5, flex: 1 }}>
        <Stack spacing={2}>
          {orderedStages.filter((stage) => groups[stage]?.length).map((stage) => (
            <Box key={stage}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="subtitle2">{STAGE_LABELS[stage] || stage}</Typography>
                <Chip size="small" label={groups[stage].length} variant="outlined" />
              </Stack>
              <Stack spacing={1}>
                {groups[stage].slice(0, 5).map((lead) => (
                  <Stack key={lead.id} direction="row" justifyContent="space-between" spacing={1}>
                    <Typography variant="body2">{lead.name || 'Unnamed lead'}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatOptionalCurrency(lead.expectedRevenue)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Divider sx={{ mt: 1.5 }} />
            </Box>
          ))}
        </Stack>
      </Card>

      <Card sx={{ p: 2.5, width: { xs: '100%', lg: 300 } }}>
        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Pipeline summary</Typography>
          <Stack direction="row" justifyContent="space-between"><Typography variant="body2">Leads</Typography><Typography variant="body2">{leads.length}</Typography></Stack>
          <Stack direction="row" justifyContent="space-between"><Typography variant="body2">Opportunities</Typography><Typography variant="body2">{summary?.opportunities ?? 'Unavailable'}</Typography></Stack>
          <Stack direction="row" justifyContent="space-between"><Typography variant="body2">Revenue</Typography><Typography variant="body2">{formatOptionalCurrency(summary?.totalRevenue)}</Typography></Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
