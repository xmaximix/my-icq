import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Chats: "Chats",
      Favorites: "Favorites",
    },
  },
  ru: {
    translation: {
      Chats: "Чаты",
      Favorites: "Избранное",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
