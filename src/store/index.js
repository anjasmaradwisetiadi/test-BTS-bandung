import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./login/auth";
import {checklistController} from "./checklistController/ChecklistController";
import {checklistItemController} from "./checklistItemController/checklistItemController";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    errorMessage: false,
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    getterLoadings: (state)=>{
      return state.loading;
    },
    getterErrorMessages: (state)=>{
      return state.errorMessage;
    },
  },
  modules: {
    auth,
    checklistController,
    checklistItemController
  },
});
