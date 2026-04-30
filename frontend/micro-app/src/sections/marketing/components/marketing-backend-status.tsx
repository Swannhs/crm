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
      Marketing backend services are currently not available. Showing local/placeholder data.
    </Alert>
  );
}
