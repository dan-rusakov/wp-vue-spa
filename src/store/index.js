import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
import loading from './modules/loading'
import user from './modules/user'
import post from './modules/post'
import page from './modules/page'
import categories from './modules/categories'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let localStorage = createPersist({
    namespace: 'YOUR_APP_NAMESPACE',
    initialState: {},
    expires: 1.21e+9 // Two Weeks
});

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    loading,
    user,
    post,
    page,
    categories
  },
  strict: debug,
  plugins: [localStorage]
})
