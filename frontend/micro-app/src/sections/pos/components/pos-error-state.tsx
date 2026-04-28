import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface PosErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const PosErrorState: React.FC<PosErrorStateProps> = ({
  message = 'Unavailable',
  onRetry
}) => {
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
      <Typography variant="h6" color="error" gutterBottom>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="outlined" color="primary" onClick={onRetry} sx={{ mt: 2 }}>
          Retry
        </Button>
      )}
    </Box>
  );
};
