import React from 'react';
import { Box, Typography } from '@mui/material';

export const PosHeader: React.FC = () => {
  return (
    <Box
      px={3}
      py={2}
      borderBottom={1}
      borderColor="divider"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.paper"
    >
      <Typography variant="h6" fontWeight="bold">Point of Sale</Typography>
      <Typography variant="body2" color="text.secondary">Register 1</Typography>
    </Box>
  );
};
