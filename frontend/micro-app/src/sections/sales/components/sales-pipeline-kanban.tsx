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
  stages,
  moving,
  onOpen,
  onMove,
}: {
  opportunities: SalesOpportunity[];
  stages?: Array<{ id: number; name: string; sequence: number; is_won: boolean }>;
  moving?: boolean;
  onOpen: (item: SalesOpportunity) => void;
  onMove: (id: string, stage: SalesStage) => void;
}) {
  // If we have real Odoo stages, we could map them, but for now we keep the 6 canonical columns
  // and use the stages data to potentially enrich the labels or handle custom ordering.
  
  if (!opportunities.length) {
    return <SalesEmptyState title="No opportunities yet" description="Create your first opportunity to start building pipeline momentum." />;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
      {SALES_STAGE_ORDER.map((stage) => {
        const rows = opportunities.filter((item) => normalizeStage(item.stage) === stage);
        const stageInfo = stages?.find(s => {
           const label = s.name.toLowerCase();
           if (stage === 'new' && label.includes('new')) return true;
           if (stage === 'qualified' && label.includes('qual')) return true;
           if (stage === 'proposal' && (label.includes('prop') || label.includes('quote'))) return true;
           if (stage === 'negotiation' && label.includes('nego')) return true;
           if (stage === 'won' && label.includes('won')) return true;
           if (stage === 'lost' && label.includes('lost')) return true;
           return false;
        });

        return (
          <Card
            key={stage}
            sx={{
              minWidth: 340,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'),
              borderRadius: 2,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              boxShadow: (theme) => theme.customShadows.card,
              transition: (theme) => theme.transitions.create(['background-color', 'box-shadow']),
              '&:hover': {
                bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.700'),
              },
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: stage === 'won' ? 'success.main' : stage === 'lost' ? 'error.main' : 'primary.main',
                  }}
                />
                {stageInfo?.name || SALES_STAGE_LABEL[stage]}
              </Typography>
              <Chip
                label={rows.length}
                size="small"
                sx={{
                  bgcolor: 'background.paper',
                  fontWeight: 'bold',
                  boxShadow: (theme) => theme.customShadows.z1,
                }}
              />
            </Stack>
            <Stack spacing={1.5} sx={{ flexGrow: 1, minHeight: 100 }}>
              {rows.map((item) => (
                <SalesOpportunityCard key={item.id} item={item} moving={moving} onOpen={() => onOpen(item)} onMove={(next) => onMove(item.id, next)} />
              ))}
              {!rows.length ? (
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: (theme) => `2px dashed ${theme.palette.divider}`,
                    borderRadius: 1.5,
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    Drop opportunities here
                  </Typography>
                </Box>
              ) : null}
            </Stack>
          </Card>
        );
      })}
    </Box>
  );
}
