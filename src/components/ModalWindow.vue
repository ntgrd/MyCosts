<template>
  <div class="wrapper" :class="settings.compName">
      <div class="header">
          {{settings.header}}
      </div>
      <div class="content">
          <component 
            :is="settings.compName" 
            :date="date"
            :categoryList="settings.category"
            
            :id="settings.id"
            :name="settings.name"
          />
      </div>
      <div class="footer">
         <button @click="onCloseClick">Close</button>
      </div>
      
     
  </div>
  
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import ContextMenu from './ContextMenu.vue'

export default {
    name: 'ModalWindow',
    components: {
        AddPaymentForm,
        ContextMenu
        
    },
    props: {
        settings: {
            type: Object
        },
        id: {
            type: Object
        }
    },
    data(){
        return {
            date: new Date()
        }
    },
    methods: {
        onCloseClick() {
            this.$modal.hide()
        },
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    padding: 20px;
    position: absolute;
    background: #e3e3e3;
    top: 0px;
    margin-top: 20px;
    border: solid 1 px black;
    height: 100px;
    
}
.ContextMenu {
   
    padding: 20px;
    position: absolute;
    background: lightblue;
    top: 300px;
    left: 1300px;
    margin: 0 auto;
}
button {
    margin-top: 20px;
}


</style>