import api from '../../api'
import * as types from '../mutation-types'

const state = {
  all: [],
  loaded: false,
};

const getters = {
  allCategories: state => state.all,
  allCategoriesLoaded: state => state.loaded,
};

const actions = {
  getAllCategories ({ commit }) {
    api.getCategories(categories => {
      commit(types.STORE_FETCHED_CATEGORIES, { categories });
      commit(types.CATEGORIES_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    })
  }
};

const mutations = {
  [types.STORE_FETCHED_CATEGORIES] (state, { categories }) {
    state.all = categories;
  },

  [types.CATEGORIES_LOADED] (state, bool) {
    state.loaded = bool;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}
