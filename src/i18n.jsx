import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enlang from "./assets/translations/en.json";
import vilang from "./assets/translations/vi.json";

const resource = {
  env: {
    translation: enlang,
  },
  viv: {
    translation: vilang,
  },
};
i18n
    .use(initReactI18next).init({
    resource,
    lng: "env",
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