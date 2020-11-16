import * as types from '../mutation-types'

const state = {
  id: '',
  logged_in: false,
};

const getters = {
  userId: state => state.id,
};

const mutations = {
  [types.STORE_FETCHED_USER] (state, { uid }) {
    state.id = uid;
  },

  [types.LOGIN_USER] (state) {
    state.logged_in = true;
  },

  [types.LOGOUT_USER] (state) {
    state.logged_in = false;
  }
};

export default {
  state,
  getters,
  mutations,
}
