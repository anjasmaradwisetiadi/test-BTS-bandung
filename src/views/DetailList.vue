<template>
<div class="Detail-List">
  <div class="container mt-4">
    <div class="d-flex justify-content-between">
      <div>
          <span>
            Cheklist item
          </span>
      </div>
      <div>
        <b-button variant="primary" @click="addItemList">Add List</b-button>
      </div>
    </div>
    <div class="row mt-4">
      <div v-for="items in getItemList" class="col-12">
        <b-card class="text-center">
          <div class="row">
            <div class="col-4">
              <input
                data-cy="todo-item-checkbox"
                class="form-check checkbox-sizing"
                type="checkbox"
              >
            </div>
            <div class="col-4">
              {{ items.name }}
            </div>
            <div class="col-4">
              <b-button class="btn-danger" @click="deleteItem(items.id)">delete</b-button>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "DetailList",
  data(){
    return{
      collectListData:[]
    }
  },
  computed:{
    getItemList(){
      this.$store.getters.getterListItemChecklist.forEach((item)=>{
        if(item.id === Number(this.$route.params.id)){
          console.log('list get item')
          console.log(item)
          this.collectListData = item.items
        }
      })
      console.log('this.collectListData')
      console.log(this.collectListData)
      return this.collectListData
    }
  },
  mounted() {
    this.$store.dispatch('setItemChecklist')
  },
  methods:{
    addItemList(){
      const name= 'activity item '
      const id = this.$route.params.id
      const payload = {
        'id': id,
        'name': name
      }
      this.$store.dispatch('createItemChecklist',payload)
    },
    deleteItem(id){
      const idGroup = this.$route.params.id
      const payload = {
        'idGroup': idGroup,
        'idItem': id
      }
      this.$store.dispatch('deleteItemCheckList',payload)
    }
  }
}
</script>

<style scoped>
.checkbox-sizing{
  width: 16px;
  height: 16px;
}
</style>
