import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fNumber } from 'src/utils/format-number';


// ----------------------------------------------------------------------

type Props = {
  attention: Array<{
    title: string;
    count: number;
    severity: 'error' | 'warning' | 'info' | 'success';
  }>;
  sourceStatus: Record<string, { ok: boolean; message?: string }>;
  loading?: boolean;
};

export function OverviewAttentionPanel({ attention, sourceStatus, loading }: Props) {
  const theme = useTheme();

  const renderAttention = () => {
    if (attention.length === 0) {
      return (
        <Typography variant="body2" sx={{ color: 'text.secondary', py: 2, textAlign: 'center' }}>
          No urgent issues right now.
        </Typography>
      );
    }

    return (
      <Stack spacing={2} sx={{ py: 2 }}>
        {attention.map((item) => (
          <Stack key={item.title} direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: theme.palette[item.severity].main,
                }}
              />
              <Typography variant="body2">{item.title}</Typography>
            </Stack>
            <Chip
              label={fNumber(item.count)}
              size="small"
              variant="soft"
              color={item.severity}
              sx={{ fontWeight: 'bold' }}
            />
          </Stack>
        ))}
      </Stack>
    );
  };

  const renderSourceHealth = () => {
    const sources = Object.entries(sourceStatus);

    if (sources.length === 0) {
      return (
        <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'center', display: 'block', py: 1 }}>
          Source health unavailable
        </Typography>
      );
    }

    return (
      <Stack spacing={1.5} sx={{ mt: 2 }}>
        {sources.map(([name, status]) => (
          <Stack key={name} direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {name}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: status.ok ? 'success.main' : 'warning.main',
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: status.ok ? 'success.main' : 'warning.main' }}>
                {status.ok ? 'Healthy' : 'Degraded'}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    );
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Attention Required
      </Typography>

      {renderAttention()}

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
        System Health
      </Typography>

      {renderSourceHealth()}
    </Card>
  );
}
