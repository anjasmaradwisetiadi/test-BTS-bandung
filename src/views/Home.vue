<template>
  <div class="home mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-card title="Login">
            <div class="text-left">
              <b-form-group
                id="input-group-1"
                label="Username :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  placeholder="Enter username"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="text-left">
              <b-form-group
                id="input-group-1"
                label="Password :"
                label-for="input-1"
                description="password"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.password"
                  type="password"
                  placeholder="Enter Password"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <b-button variant="primary" @click="handleLogin">Log in</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import collectionUrl from "../service/collectionUrl/CollectionUrl";
import axios from "axios";

export default {
  name: 'Home',
  data(){
    return{
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    handleLogin(){
      const payload = {
        username: this.form.username,
        password: this.form.password
      }
      console.log('collectionUrl = ', collectionUrl)
      axios({
        method: 'POST',
        url: collectionUrl.login,
        data: {
          'username': payload.username,
          'password': payload.password,
        },
      })
        .then((response)=>{
          localStorage.setItem('token', response.data.data.token)
          this.$router.push('/dashboard')
        })
        .catch((error)=>{
          console.log('error login = ')
          console.log(error)
        })
/*      this.$store.dispatch('login', payload)*/
    }
  }
};
</script>
