import Vue from 'vue';
require('./headers');
import './assets/scss/app.scss';

import router from './router';
import App from './App.vue';
import store from './store';
import * as types from './store/mutation-types';
import 'focus-visible/dist/focus-visible.min.js';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch('getAllCategories');
    this.$store.dispatch('getAllPages');
  },
});
