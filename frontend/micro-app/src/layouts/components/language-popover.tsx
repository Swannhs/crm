'use client';

import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { varHover } from 'src/components/animate';
import { FlagIcon } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export function LanguagePopover({ sx, ...other }) {
  const popover = usePopover();
  const { allLangs, currentLang, onChangeLang } = useLocales();

  const handleChangeLang = useCallback(
    (newLang) => {
      onChangeLang(newLang);
      popover.onClose();
    },
    [onChangeLang, popover]
  );


  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(popover.open && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <FlagIcon code={currentLang?.countryCode} />
      </IconButton>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList sx={{ width: 160, minHeight: 72 }}>
          {allLangs?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang?.value}
              onClick={() => handleChangeLang(option.value)}
            >
              <FlagIcon code={option.countryCode} sx={{ mr: 1 }} />
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>

    </>
  );
}
