import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sale: "The amount of sales",
      },
    },
    fa: {
      translation: {
        sale: "میزان فروش",
      },
    },
  },
  lng: localStorage.getItem("lang") || "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
