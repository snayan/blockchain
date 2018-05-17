import { ActionContext } from 'vuex';
import { State as RootState } from '../state';
import { appState } from './appState';
import router from '@/router/index';

type context = ActionContext<appState, RootState>;

const state: appState = {};

const getters = {};

const mutations = {};

const actions = {};

export const app = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
