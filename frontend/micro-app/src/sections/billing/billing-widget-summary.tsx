import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme, alpha, SxProps, Theme } from '@mui/material/styles';

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
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={0.5}>
        <Typography variant="h4">{fCurrency(total)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          color: theme.palette[color].main,
          bgcolor: alpha(theme.palette[color].main, 0.16),
        }}
      >
        <Iconify icon={icon} width={24} />
      </Stack>
    </Card>
  );
}
