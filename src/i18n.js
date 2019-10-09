import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import translationsEN from "./public/locales/en/translations.json";
import translationsEE from "./public/locales/ee/translations.json";
import commonEN from "./public/locales/en/common.json";
import commonEE from "./public/locales/ee/common.json";
import headerEN from "./public/locales/en/header.json";
import headerEE from "./public/locales/ee/header.json";
import menusEN from "./public/locales/en/menus.json";
import menusEE from "./public/locales/ee/menus.json";
import validationEN from "./public/locales/en/validation.json";
import validationEE from "./public/locales/ee/validation.json";

//https://github.com/i18next/react-i18next/tree/master/example/razzle-ssr

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ee: {
    translations: translationsEE,
    header: headerEE,
    common: commonEE,
    menus: menusEE,
    validation: validationEE
  },
  en: {
    translations: translationsEN,
    header: headerEN,
    common: commonEN,
    menus: menusEN,
    validation: validationEN
  },

  es: {
    translation: {
      bw: "Welcome to React and react-i18next"
    }
  }
};

const options = {
  fallbackLng: "en",
  load: "languageOnly", // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ["common", "header", "menus", "translations", "validation", "footer"],
  defaultNS: "translations",

  saveMissing: true,
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
    format: (value, format, lng) => {
      if (format === "uppercase") return value.toUpperCase();
      return value;
    }
  },
  wait: process && !process.release
};

// for browser use xhr backend to load translations and browser lng detector
if (process && !process.release) {
  i18n
    .use(XHR)
    .use(initReactI18next)
    .use(detector);
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;

/*
i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  //.use(backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(detector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next) // passes i18n down to react-i18next
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources,
      saveMissing: true,
      debug: true,
      //ns: ["common", "header", "menus", "translations", "validation"],
      //ns: resources,
      defaultNS: "common",
      //backend: {
      //loadPath: "public/locales/{{lng}}/{{ns}}.json",
      //crossDomain: true
      //},
      lng: "en",
      fallbackLng: "en", // use en if detected lng is not available
      load: "languageOnly", // we only provide en, de -> no region specific locals like en-US, de-DE
      // have a common namespace used around the full app

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
        formatSeparator: ",",
        format: (value, format, lng) => {
          if (format === "uppercase") return value.toUpperCase();
          return value;
        }
      }
    },
    function(err, t) {
      //updateContent();
      i18n.t("myKey");
    }
  );

export default i18n;*/
