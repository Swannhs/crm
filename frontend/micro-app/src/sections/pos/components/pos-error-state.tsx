import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  message?: string;
  onRetry?: () => void;
};

export function PosErrorState({ message = 'Unavailable', onRetry }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      p={4}
      textAlign="center"
    >
      <Typography variant="subtitle1" color="error" gutterBottom>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="outlined" color="primary" onClick={onRetry} sx={{ mt: 2 }}>
          Retry
        </Button>
      )}
    </Box>
  );
}
