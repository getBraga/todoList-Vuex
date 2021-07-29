import Vue from "vue";
import Vuex from "vuex";
import api from "../services/services";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: [],
  },
  mutations: {
    CHANGE_MUTATION(state, payload) {
      state.todo = payload;
    },
  },
  actions: {
    // Reload task list information
    async changeMutation(context) {
      const response = await api.getTodo();
      context.commit("CHANGE_MUTATION", await response.data);
    },

    // Add the task List
    async addTodoList(context, payload) {
      await api.postTodoList({
        titulo: payload,
        feito: false,
      });
      await context.commit("CHANGE_MUTATION", payload);
    },

    // delete the task list
    async deleteTodoList(context, payload) {
      await api.deleteTodoList(payload);
      await context.commit("CHANGE_MUTATION", payload);
    },
    // make the change to finalised
    async updateTodoList(context, params) {
      await api.patchTodoList(params.id, {
        feito: !params.feito,
      });
      await context.commit("CHANGE_MUTATION", params);
    },
  },
  modules: {},
});
