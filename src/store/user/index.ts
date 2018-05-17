import { ActionContext } from 'vuex';
import { State as RootState } from '../state';
import { userState } from './userState';

type context = ActionContext<userState, RootState>;

const state: userState = {};

const mutations = {};

const actions = {};

export const user = {
  namespaced: true,
  state,
  actions,
  mutations,
};
