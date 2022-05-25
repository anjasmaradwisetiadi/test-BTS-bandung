import collectionUrl from "../../service/collectionUrl/CollectionUrl";
const axios = require('axios');
const loginUrl = collectionUrl.login
const registerUrl = collectionUrl.register
const auth = {
  state:{
    token:''
  },
  mutations: {
    GET_TOKEN(state,payload){
      state.token = payload
    }
  },
  actions: {
    login({commit,rootState}, payload){
      console.log('ini payload = ')
      console.log(payload)
      axios({
        method: 'POST',
        url: 'http://94.74.86.174:8080/api/login',
        data: {
          'username': payload.username,
          'password': payload.password,
        },
      })
        .then((response)=>{
          console.log('response login = ')
          console.log(response.data.data)
          this.commit('GET_TOKEN',response.data.data)
        })
        .catch((error)=>{
          console.log('error login = ')
          console.log(error)
        })
    }
  },
  getters:{
  getterToken:(state)=>{
    return state.token
  }
  }
}

export default auth
