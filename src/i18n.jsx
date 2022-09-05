import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./assets/translations/en.json";
import translationVI from "./assets/translations/vi.json";

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", //mặc định ngôn ngữ
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
