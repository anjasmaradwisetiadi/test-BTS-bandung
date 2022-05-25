import collectionUrl from "../../service/collectionUrl/CollectionUrl";
const axios = require('axios');
const checklistItemControllerUrl = collectionUrl.checklistItemController

export const checklistItemController = {
  state:{
    listItemChecklist:[],
    dataList:'124'
  },
  mutations: {
    GET_ITEM_CHECKLIST(state, payload){
      state.listItemChecklist = payload
    }
  },
  actions: {
    setItemChecklist({commit}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        method: 'GET',
        url: `${collectionUrl.checklistItemController}`,
      })
        .then((response)=>{
          commit('GET_ITEM_CHECKLIST', response.data.data)
        })
        .catch((error)=>{
          console.log('error get item = ')
          console.log(error)
        })
    },
    createItemChecklist({commit, dispatch}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        method: 'POST',
        url: `${collectionUrl.checklistItemController}/${payload.id}/item`,
        data:{
          "itemName": payload.name
        }
      })
        .then((response)=>{
          return dispatch('setItemChecklist',payload.id)
        })
        .catch((error)=>{
          console.log('error post item = ')
          console.log(error)
        })
    },
    deleteItemCheckList({commit, dispatch}, payload){
      axios({
        headers: {
          Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        method: 'DELETE',
        url: `${collectionUrl.checklistItemController}/${payload.idGroup}/item/${payload.idItem}`,
      })
        .then((response)=>{
        return dispatch('setItemChecklist',payload.id)
      })
        .catch((error)=>{
          console.log('error delete item = ')
          console.log(error)
        })
    }
  },
  getters:{
    getterListItemChecklist:(state)=>{
      return state.listItemChecklist
    },
  }
}
