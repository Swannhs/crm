import Alert from '@mui/material/Alert';
import { Iconify } from 'src/components/iconify';

type Props = {
  isAvailable: boolean;
};

export function MarketingBackendStatus({ isAvailable }: Props) {
  if (isAvailable) return null;

  return (
    <Alert 
      severity="info" 
      sx={{ mb: 3 }} 
      icon={<Iconify icon="solar:info-circle-bold" />}
    >
      Some marketing services are currently unavailable. Unsupported actions are disabled until backend support is available.
    </Alert>
  );
}
