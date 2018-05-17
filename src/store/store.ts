import * as Vuex from 'vuex';
import Vue from 'vue';
import { State } from './state';
import { app } from './app';
import { user } from './user';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  modules: {
    app,
    user,
  },
});
