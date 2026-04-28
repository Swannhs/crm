import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  description?: string;
  icon?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  sx?: any;
};

export function OverviewEmptyState({ title, description, icon, action, children, sx }: Props) {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        py: 8,
        px: 3,
        textAlign: 'center',
        ...sx,
      }}
    >
      {icon && (
        <Box
          sx={{
            mb: 3,
            width: 80,
            height: 80,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.disabled',
            bgcolor: alpha(theme.palette.text.disabled, 0.08),
          }}
        >
          <Iconify icon={icon} width={40} />
        </Box>
      )}

      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          {description}
        </Typography>
      )}

      {action}

      {children}
    </Stack>
  );
}
