'use client';

import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Icon, disableCache } from '@iconify/react';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import type { SxProps, Theme } from '@mui/material/styles';

import { iconifyClasses } from './classes';

// ----------------------------------------------------------------------

type IconComponentProps = ComponentPropsWithoutRef<typeof Icon>;

export type IconifyProps = Omit<IconComponentProps, 'width' | 'height'> & {
    width?: number | string;
    sx?: SxProps<Theme>;
  };

export const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
  ({ className, width = 20, sx, icon, rotate, hFlip, vFlip, inline, ...other }, ref) => {
    const baseStyles = {
      width,
      height: width,
      flexShrink: 0,
      display: 'inline-flex',
    };

    const renderFallback = (
      <Box
        component="span"
        className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
        sx={{ ...baseStyles, ...sx }}
      />
    );

    return (
      <NoSsr fallback={renderFallback}>
        <Box
          ref={ref}
          component="span"
          className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
          sx={{ ...baseStyles, ...sx }}
        >
          <Icon
            icon={icon}
            rotate={rotate}
            hFlip={hFlip}
            vFlip={vFlip}
            inline={inline}
            width={width}
            height={width}
            {...other}
          />
        </Box>
      </NoSsr>
    );
  }
);

Iconify.displayName = 'Iconify';

// https://iconify.design/docs/iconify-icon/disable-cache.html
disableCache('local');
