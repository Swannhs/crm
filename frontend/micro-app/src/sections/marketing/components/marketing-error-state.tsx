import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

type Props = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export function MarketingErrorState({
  title = 'Something went wrong',
  description = 'An error occurred while fetching data. Please try again later.',
  onRetry,
}: Props) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        px: 3,
        py: 10,
        height: 1,
        textAlign: 'center',
      }}
    >
      <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: 'error.main', mb: 2 }} />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400, mb: 3 }}>
        {description}
      </Typography>

      {onRetry && (
        <Button variant="contained" onClick={onRetry} startIcon={<Iconify icon="solar:refresh-bold" />}>
          Try Again
        </Button>
      )}
    </Stack>
  );
}
