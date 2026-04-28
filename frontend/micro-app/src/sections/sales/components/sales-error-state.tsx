import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function SalesErrorState({
  message,
  title,
  description,
  onRetry,
}: {
  message?: string;
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  const renderedMessage = message || [title, description].filter(Boolean).join(': ') || 'Something went wrong while loading sales data.';

  return (
    <Box sx={{ py: 2 }}>
      <Alert
        severity="error"
        action={onRetry ? <Button color="inherit" size="small" onClick={onRetry}>Retry</Button> : undefined}
      >
        <Typography variant="body2">{renderedMessage}</Typography>
      </Alert>
    </Box>
  );
}
