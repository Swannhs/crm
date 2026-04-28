import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SalesEmptyState } from './sales-empty-state';
import { SalesOpportunityCard } from './sales-opportunity-card';
import { normalizeStage, SALES_STAGE_ORDER, SALES_STAGE_LABEL } from '../utils';

import type { SalesStage, SalesOpportunity } from '../types';

export function SalesPipelineKanban({
  opportunities,
  moving,
  onOpen,
  onMove,
}: {
  opportunities: SalesOpportunity[];
  moving?: boolean;
  onOpen: (item: SalesOpportunity) => void;
  onMove: (id: string, stage: SalesStage) => void;
}) {
  if (!opportunities.length) {
    return <SalesEmptyState title="No opportunities yet" description="Create your first opportunity to start building pipeline momentum." />;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
      {SALES_STAGE_ORDER.map((stage) => {
        const rows = opportunities.filter((item) => normalizeStage(item.stage) === stage);
        return (
          <Card key={stage} sx={{ minWidth: 320, p: 1.5, bgcolor: 'background.neutral' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
              <Typography variant="subtitle2">{SALES_STAGE_LABEL[stage]}</Typography>
              <Chip label={rows.length} size="small" variant="soft" />
            </Stack>
            <Stack spacing={1.25}>
              {rows.map((item) => (
                <SalesOpportunityCard key={item.id} item={item} moving={moving} onOpen={() => onOpen(item)} onMove={(next) => onMove(item.id, next)} />
              ))}
              {!rows.length ? <Typography variant="caption" sx={{ color: 'text.secondary', px: 1, py: 2 }}>No opportunities in this stage.</Typography> : null}
            </Stack>
          </Card>
        );
      })}
    </Box>
  );
}
