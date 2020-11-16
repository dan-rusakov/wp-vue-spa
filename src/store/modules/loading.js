import * as types from '../mutation-types';
import SETTINGS from '../../settings';

const state = {
  loading: true,
  loading_progress: 0,
};

const getters = {
  isLoading: state => state.loading_progress < 100,
  loadingProgress: state => state.loading_progress,
  loadingIncrement: () => {
    return 100 / SETTINGS.LOADING_SEGMENTS;
  }
};

const mutations = {
  [types.INCREMENT_LOADING_PROGRESS](state) {
    state.loading_progress = Math.min(
      state.loading_progress + getters.loadingIncrement(),
      100
    );
  },

  [types.RESET_LOADING_PROGRESS](state) {
    state.loading_progress = 0;
  }
};

export default {
  state,
  getters,
  mutations,
};
