import api from '../../api';
import * as types from '../mutation-types';

const state = {
  all: [],
  loaded: false,
  page: null,
};

const getters = {
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  page: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);
    return (page[0]) ? page[0] : false;
  },
  pageContent: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);

    return (page[0]) ? page[0].content.rendered : false;
  },
  somePages: state => limit => {
    if (!state.all.length) {
      return false;
    }

    let all = [...state.all];
    return all.splice(0, Math.min(limit, state.all.length));
  },
};

const actions = {
  getAllPages({ commit }) {
    api.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages });
      commit(types.PAGES_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.all = pages;
  },

  [types.PAGES_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
