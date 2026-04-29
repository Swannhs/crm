import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  message?: string;
  description?: string;
};

export function PosEmptyState({ message = 'No data yet', description }: Props) {
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
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {message}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.disabled">
          {description}
        </Typography>
      )}
    </Box>
  );
}
