import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

export function SalesEmptyState({
  title,
  description,
  compact,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  compact?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <Box sx={{ py: compact ? 3 : 8, textAlign: 'center' }}>
      <Iconify icon="solar:inbox-bold" width={48} sx={{ color: 'text.disabled', mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{description}</Typography>
      {actionLabel && onAction ? <Button variant="outlined" onClick={onAction}>{actionLabel}</Button> : null}
    </Box>
  );
}
