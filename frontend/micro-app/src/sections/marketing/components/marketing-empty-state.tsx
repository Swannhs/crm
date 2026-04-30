import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

type Props = {
  title?: string;
  description?: string;
  icon?: string;
  action?: React.ReactNode;
};

export function MarketingEmptyState({
  title = 'No data found',
  description = 'There are no items to display at the moment.',
  icon = 'solar:box-minimalistic-bold-duotone',
  action,
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
      <Box
        sx={{
          mb: 3,
          width: 120,
          height: 120,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
        }}
      >
        <Iconify icon={icon} width={64} />
      </Box>

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400, mb: 3 }}>
        {description}
      </Typography>

      {action}
    </Stack>
  );
}
