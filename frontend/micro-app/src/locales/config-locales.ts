'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { defaultLang } from './all-langs';
import enTranslation from './langs/en.json';
import frTranslation from './langs/fr.json';

// ----------------------------------------------------------------------

const lng = defaultLang.value;

i18next

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enTranslation },
      fr: { translations: frTranslation },
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

