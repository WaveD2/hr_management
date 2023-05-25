import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_VI from "./vi/home.json";
import EMPLOYEE_VI from "./vi/employee.json";
import HOME_EN from "./en/home.json";
import EMPLOYEE_EN from "./en/employee.json";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

export const resources = {
  en: {
    home: HOME_EN,
    employee: EMPLOYEE_EN,
  },
  vi: {
    home: HOME_VI,
    employee: EMPLOYEE_VI,
  },
};
export const defaultNS = "home";
const lang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: `${lang}`,
  ns: ["home", "employee"],
  defaultNS,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
