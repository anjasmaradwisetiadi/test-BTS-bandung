<template>
  <div class="register mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-card title="Register">
            <div class="text-left">
              <b-form-group
                id="input-group-1"
                label="Email :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="text"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
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
            <b-button variant="primary" @click="handleRegister">Register</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import collectionUrl from "../service/collectionUrl/CollectionUrl";

export default {
  name: "Register",
  data(){
    return{
      form:{
        email:'',
        username:'',
        password:''
      }
    }
  },
  methods:{
    handleLogin(){
      this.$router.push('/home')
    },
    handleRegister(){
      axios({
        method: 'POST',
        url: collectionUrl.register,
        data: {
          'username': this.form.username,
          'password': this.form.password,
          'email': this.form.email
         },
      })
        .then((response)=>{
          alert('berhasil register')
          this.$router.push('/home')
        })
        .catch((error)=>{
          console.log('error login = ')
          console.log(error)
        })
    },
  }
}
</script>

<style scoped>

</style>
