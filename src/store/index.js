import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    home
  }
});
