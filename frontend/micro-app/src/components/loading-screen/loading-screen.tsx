'use client';


import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';

import { AppLoader } from 'src/components/loading';

// ----------------------------------------------------------------------

interface LoadingScreenProps {
  portal?: boolean;
  sx?: any;
  [key: string]: any;
}

export function LoadingScreen({ portal, sx, ...other }: LoadingScreenProps) {
  const content = (
    <Box
      sx={{
        px: 5,
        width: 1,
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <AppLoader type="linear" sx={{ maxWidth: 360 }} />
    </Box>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
}
