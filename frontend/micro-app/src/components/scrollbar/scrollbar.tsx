import { forwardRef } from 'react';
import SimpleBar, { Props as SimpleBarProps } from 'simplebar-react';

import Box, { BoxProps } from '@mui/material/Box';

import { scrollbarClasses } from './classes';

// ----------------------------------------------------------------------

export interface ScrollbarProps extends BoxProps {
  slotProps?: {
    wrapper?: Record<string, any>;
    contentWrapper?: Record<string, any>;
    content?: Record<string, any>;
  };
  fillContent?: boolean;
  naturalScroll?: boolean;
}

export const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ slotProps, children, fillContent, naturalScroll, sx, ...other }, ref) => (
    <Box
      component={SimpleBar}
      scrollableNodeProps={{ ref }}
      clickOnTrack={false}
      className={scrollbarClasses.root}
      sx={{
        minWidth: 0,
        minHeight: 0,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        '& .simplebar-wrapper': slotProps?.wrapper,
        '& .simplebar-content-wrapper': slotProps?.contentWrapper,
        '& .simplebar-content': {
          ...(fillContent && {
            minHeight: 1,
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
          }),

          ...slotProps?.content,
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  )
);
