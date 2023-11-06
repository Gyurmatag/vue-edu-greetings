import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    greeting: 'Greetings, {name}!',
    placeholder: 'Your name'
  },
  hu: {
    greeting: 'Üdvözlet, {name}!',
    placeholder: 'Neved'
  },
  de: {
    greeting: 'Grüße, {name}!',
    placeholder: 'Dein Name'
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
