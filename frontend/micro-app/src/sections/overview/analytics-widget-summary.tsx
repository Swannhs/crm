import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AnalyticsWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        bgcolor: alpha(theme.palette[color].main, 0.08),
        color: theme.palette[color].darker,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          mb: 3,
          width: 64,
          height: 64,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette[color].main,
          bgcolor: alpha(theme.palette[color].main, 0.16),
        }}
      >
        <Iconify icon={icon} width={36} />
      </Box>

      <Typography variant="h3">{fNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.64 }}>
        {title}
      </Typography>
    </Card>
  );
}
