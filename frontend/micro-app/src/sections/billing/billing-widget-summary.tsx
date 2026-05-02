import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, Theme, SxProps, useTheme } from '@mui/material/styles';

import { fCurrency } from 'src/utils/format-number';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  total: number;
  icon: string;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  sx?: SxProps<Theme>;
  [key: string]: any;
};

export function BillingWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }: Props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(theme.palette[color].lighter, 0.4)} 0%, ${alpha(theme.palette[color].light, 0.4)} 100%)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${alpha(theme.palette[color].main, 0.2)}`,
        boxShadow: `0 8px 32px 0 ${alpha(theme.palette[color].main, 0.1)}`,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: -10,
          right: -10,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: alpha(theme.palette[color].main, 0.08),
          zIndex: 0,
        },
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={0.5} sx={{ zIndex: 1 }}>
        <Typography variant="h3" sx={{ color: theme.palette[color].darker }}>
           {fCurrency(total)}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.palette[color].darker, opacity: 0.72 }}>
          {title}
        </Typography>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 56,
          height: 56,
          borderRadius: 1.5,
          color: theme.palette[color].dark,
          bgcolor: alpha(theme.palette[color].main, 0.12),
          zIndex: 1,
        }}
      >
        <Iconify icon={icon} width={32} />
      </Stack>
    </Card>
  );
}
