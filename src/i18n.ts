// import i18next from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import XHR from 'i18next-xhr-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

// i18next
//   .use(XHR)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     backend: {
//       loadPath: `./locales/{{lng}}.json`
//     },
//     react: {
//       useSuspense: true
//     },
//     fallbackLng: 'en',
//     preload: ['en'],
//     keySeparator: false,
//     interpolation: { escapeValue: false }
//   })

// export default i18next
// import LanguageDetector from 'i18next-browser-languagedetector';
// import i18n from "i18next";
// import deTrans from "./locales/de.json";
// import enTrans from "./locales/en.json";
// import esarTrans from "./locales/es-AR.json";
// import esusTrans from "./locales/es-US.json";
// import ititTrans from "./locales/it-IT.json";
// import iwTrans from "./locales/iw.json";
// import roTrans from "./locales/ro.json";
// import ruTrans from "./locales/ru.json";
// import viTrans from "./locales/vi.json";
// import zhcnTrans from "./locales/zh-CN.json";
// import zhtwTrans from "./locales/zh-TW.json";
// import {
//   initReactI18next
// } from 'react-i18next';

// let lang = localStorage.getItem("language");
// if (!lang) {
//     lang = 'zhcn';
//     localStorage.setItem("language", 'zhcn');
// }

// i18n.use(LanguageDetector) //嗅探当前浏览器语言
// .use(initReactI18next) //init i18next
// .init({
//   //引入资源文件
//   resources: {
//     de: {
//       translation: deTrans,
//     },
//     en: {
//       translation: enTrans,
//     },
//     esar: {
//       translation: esarTrans,
//     },
//     esus: {
//       translation: esusTrans,
//     },
//     itit: {
//       translation: ititTrans,
//     },
//     iw: {
//       translation: iwTrans,
//     },
//     ro: {
//       translation: roTrans,
//     },
//     ru: {
//       translation: ruTrans,
//     },
//     vi: {
//       translation: viTrans,
//     },
//     zhcn: {
//       translation: zhcnTrans,
//     },
//     zhtw: {
//       translation: zhtwTrans,
//     },
//   },
//   //选择默认语言，选择内容为上述配置中的key，即en/zh
//   fallbackLng: lang,
//   debug: false,
//   interpolation: {
//     escapeValue: false, // not needed for react as it escapes by default
//   },
// })

// export default i18n;
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import deTrans from "./locales/de.json";
import enTrans from "./locales/en.json";
import esarTrans from "./locales/es-AR.json";
import esusTrans from "./locales/es-US.json";
import ititTrans from "./locales/it-IT.json";
import iwTrans from "./locales/iw.json";
import roTrans from "./locales/ro.json";
import ruTrans from "./locales/ru.json";
import viTrans from "./locales/vi.json";
import zhcnTrans from "./locales/zh-CN.json";
import zhtwTrans from "./locales/zh-TW.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
          de: {
            translation: deTrans,
          },
          en: {
            translation: enTrans,
          },
          esar: {
            translation: esarTrans,
          },
          esus: {
            translation: esusTrans,
          },
          itit: {
            translation: ititTrans,
          },
          iw: {
            translation: iwTrans,
          },
          ro: {
            translation: roTrans,
          },
          ru: {
            translation: ruTrans,
          },
          vi: {
            translation: viTrans,
          },
          zhcn: {
            translation: zhcnTrans,
          },
          zhtw: {
            translation: zhtwTrans,
          },
        },
    fallbackLng: 'zhcn',
    debug: true,
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['querystring', 'navigator', 'localStorage'],
      lookupQuerystring: 'lang',
    },
  })

export default i18n
