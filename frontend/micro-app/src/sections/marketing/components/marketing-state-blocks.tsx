import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type StateProps = {
  title: string;
  description: string;
};

export function MarketingEmptyState({ title, description }: StateProps) {
  return (
    <Stack spacing={0.5} sx={{ py: 6, textAlign: 'center' }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
    </Stack>
  );
}

export function MarketingErrorState({ title, description }: StateProps) {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Alert>
  );
}

export function MarketingUnavailableState({ title, description }: StateProps) {
  return (
    <Alert severity="info" sx={{ my: 2 }}>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Alert>
  );
}
