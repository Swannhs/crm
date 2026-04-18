import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

import { svgColorClasses } from './classes';

// ----------------------------------------------------------------------

export type SvgColorProps = Omit<ComponentPropsWithoutRef<'span'>, 'color'> & {
  src: string;
  sx?: SxProps<Theme>;
};

export const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, className, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component="span"
      className={svgColorClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width: 24,
        height: 24,
        flexShrink: 0,
        display: 'inline-flex',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);

SvgColor.displayName = 'SvgColor';
