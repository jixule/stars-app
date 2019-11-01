import Vue from "vue";
import Vuex from "vuex";
import cart from "./moduels/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popos: []
  },
  mutations: {
    save(state, req) {
      state.popos = req;
    }
  },
  actions: {},
  modules: {
    cart
  }
});
