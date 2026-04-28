'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { allLangs, defaultLang } from './all-langs';


// ----------------------------------------------------------------------

export function useLocales() {
  const { i18n, t } = useTranslation();

  const currentLang = allLangs.find((lang) => lang.value === i18n.language) || defaultLang;

  const onChangeLang = useCallback(
    (newLang: string) => {
      i18n.changeLanguage(newLang);
    },
    [i18n]
  );

  return {
    allLangs,
    currentLang,
    onChangeLang,
    t,
  };
}
