import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Archivo de traducción
import translationES from '../locales/es/translationES.json';
import translationEN from '../locales/en/translationEn.json';

i18n
  .use(initReactI18next)
  .init({
    // Idiomas admitidos
    lng: 'es',
    fallbackLng: 'es',

    // Archivos de traducción
    resources: {
      es: {
        translation: '../locales/es/translationES.json',
      },
      en: {
        translation: '../locales/en/translationEn.json',
      },
    },

    // Opciones de configuración adicionales
    interpolation: {
      escapeValue: false, // No escapar valores HTML en las traducciones
    },
  });

export default i18n;