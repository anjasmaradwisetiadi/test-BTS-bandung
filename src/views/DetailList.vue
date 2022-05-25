<template>
<div class="Detail-List">
  <div class="container mt-4">
    <div class="d-flex justify-content-between">
      <div>
          <span>
            Cheklist Item
          </span>
      </div>
      <div>
        <b-button variant="primary" @click="addItemList">Add List Item</b-button>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <h3 class="mb-3">List Item</h3>
      </div>
    </div>
    <div class="row mt-4">
      <div v-for="items in getItemList" class="col-12">
        <b-card class="text-center">
          <div class="row">
            <div class="col-1">
              <div class="d-flex">
                <div class="mr-2">
                  <input
                    data-cy="todo-item-checkbox"
                    class="form-check checkbox-sizing"
                    type="checkbox"
                  >
                </div>
              </div>
            </div>
            <div class="col-5 text-left">
              {{ items.name }}
            </div>
            <div class="col-6 d-flex justify-content-end">
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="outline-warning" class="mr-2">Update Item Status </b-button>
              <b-button v-b-toggle.collapse-2-inner size="sm" variant="outline-primary" class="mr-2">Update Name Item </b-button>
              <b-button class="btn-danger" @click="deleteItem(items.id)">delete</b-button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mt-1">
                <b-collapse id="collapse-1-inner" class="mt-2">
                  <b-card class="text-left">
                    <b-form-input v-model="formUpdateItemStatus.checklistId" placeholder="checlist id" ></b-form-input>
                    <b-form-input v-model="formUpdateItemStatus.id" placeholder="id" class="mt-2"></b-form-input>
                    <b-button class="mt-2 btn-success" @click="updateItem">Update</b-button>
                  </b-card>
                </b-collapse>
              </div>
              <div class="mt-1">
                <b-collapse id="collapse-2-inner" class="mt-2">
                  <b-card class="text-left">
                    <b-form-input v-model="formUpdateItemStatus.name" placeholder="name"></b-form-input>
                    <b-button class="mt-2 btn-success" @click="updateItemName">Update</b-button>
                  </b-card>
                </b-collapse>
              </div>
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
      collectListData:[],
      doneList:0,
      formUpdateItemStatus:{
        name:'',
        checklistId:null,
        id:null
      }
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
    },

    updateItem(){
      const payload = {
          'idGroup': this.formUpdateItemStatus.checklistId,
          'idItem': this.formUpdateItemStatus.id
      }
      this.$store.dispatch('updateItemStatus',payload)
    },
    updateItemName(){
      console.log('updateItemName')
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
