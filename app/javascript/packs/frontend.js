import '../styles/frontend-styles.scss';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { format } from 'date-fns';

import apolloClient from '../libs/apolloClient';
import i18n from '~/i18n';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

Vue.filter('formatDate', (value, dateFormat) => {
  if (value) {
    return format(new Date(value), dateFormat);
  }
  return '';
});

if (document.getElementById('hp_blogposts')) {
  import('~/HpBlogposts.vue').then((module) => {
    new Vue({
      el: '#hp_blogposts',
      i18n,
      apolloProvider,
      render: h => h(module.default, {
        props: {
          onHp: true,
        },
      }),
    });
  });
}
