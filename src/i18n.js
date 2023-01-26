import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Spanish
import home_es from "./frameworks/locales/es/home.json";
import nav_bar_es from "./frameworks/locales/es/nav-bar.json";

//English
import home_en from "./frameworks/locales/en/home.json";
import nav_bar_en from "./frameworks/locales/en/nav-bar.json";

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "es",
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        home: home_es,
        navBar: nav_bar_es,
      },
      en: {
        home: home_en,
        navBar: nav_bar_en,
      },
    },
  });

export default i18n;
