import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Archivo de traducción
import translationEn from '../locales/es/translationEs.json';
import translationEs from '../locales/en/translationEn.json';

i18n
  .use(initReactI18next)
  .init({
    // Idiomas admitidos
    lng: 'es',
    fallbackLng: 'es',

    // Archivos de traducción
    resources: {
      es: {
        translation: translationEs,
      },
      en: {
        translation: translationEn,
      },
    },

    // Opciones de configuración adicionales
    interpolation: {
      escapeValue: false, // No escapar valores HTML en las traducciones
    },
  });

export default i18n;