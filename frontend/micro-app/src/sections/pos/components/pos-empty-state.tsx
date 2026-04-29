import React from 'react';
import { Box, Typography } from '@mui/material';

interface PosEmptyStateProps {
  message?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const PosEmptyState: React.FC<PosEmptyStateProps> = ({
  message = 'No data yet',
  description,
  icon
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
      {icon && <Box mb={2} color="text.secondary">{icon}</Box>}
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
};
