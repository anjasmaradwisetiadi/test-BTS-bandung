<template>
  <div class="dashboard">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>
          <span>
            Cheklist
          </span>
        </div>
        <div>
          <b-button variant="primary" @click="addList">Add List</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3 class="mb-3">List Item</h3>
          <div class="row">
            <div class="col-3" v-for="item in getterListChecklist">
              <b-card class="text-center">
                <div class="h4">
                  {{ item.name }}
                </div>
                <div class="mt-5 d-flex justify-content-between">
                  <div>

                    <b-button class="btn-warning" @click="detail(item.id)">Detail</b-button>
                  </div>
                  <div>
                    <b-button class="btn-danger" @click="deleteChecklist(item.id)"> delete</b-button>
                  </div>
                </div>
              </b-card>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Dashboard",
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters([
      'getterListChecklist'
    ])
  },
  mounted() {
    this.$store.dispatch('setListChecklist')
  },
  methods:{
    addList(){
      const name = 'GrouptActivity'
      this.$store.dispatch('createChecklist', name)
    },
    deleteChecklist(id){
      this.$store.dispatch('deleteChecklist', id)
    },
    detail(id){
      this.$router.push({name: 'DetailList', params:{ id: id}})
    }
  }
}
</script>

<style scoped>

</style>
