import collectionUrl from "../../service/collectionUrl/CollectionUrl";
const axios = require('axios');
const checklistControllerUrl = collectionUrl.checklistController

export const checklistController = {
  state:{
  listChecklist:[]
  },
  mutations: {
    GET_LIST_CHECKLIST(state,payload){
      state.listChecklist = payload
    }
  },
  actions: {
    createChecklist({dispatch, commit}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
         },
        method: 'POST',
        url: collectionUrl.checklistController,
        data: {
          'name': payload,
        },
      })
          .then((response)=>{
            return dispatch('setListChecklist')
          })
          .catch((error)=>{
            console.log(error)
          })
    },
    deleteChecklist({commit, dispatch}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        method: 'DELETE',
        url: `${collectionUrl.checklistController}/${payload}`,
      })
        .then(function (response) {
          return dispatch('setListChecklist')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    setListChecklist({commit}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        method: 'GET',
        url: collectionUrl.checklistController,
      })
          .then((response)=>{
            commit('GET_LIST_CHECKLIST', response.data.data)
          })
          .catch((error)=>{
            console.log('error login = ')
            console.log(error)
          })
    }
  },
  getters:{
  getterListChecklist:(state)=>{
    return state.listChecklist
  }
  }
}
