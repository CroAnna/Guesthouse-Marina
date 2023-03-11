import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init(
    {
      supportedLngs: ['hr', 'en'],
      // the translations are in JSON file
      fallbackLng: "en",
      detection: {
        // order and from where user language should be detected
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
      },
      backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
      },
      react: {
        useSuspense: false
      }
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

