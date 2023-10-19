import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';

import csMessages from './int/cs/cs';

const messages = {
  ...csMessages,
};

const language = 'cs';
const { amount } = document.querySelector('html').dataset;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'cs',
  messages,
  silentTranslationWarn: true,
  pluralizationRules: {
    cs: (choice) => {
      if (choice === 1) return 0;
      if (choice >= 2 && choice <= 4) return 1;
      return 2;
    },
  },
});

i18n.mergeLocaleMessage(language, { amounts: { amount } });

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
