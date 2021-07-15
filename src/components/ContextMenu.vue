<template>
  <div class="menu">
     <button @click="editPayment">Edit</button>
        <br />
        <button @click="deletePayment">Delete</button>
    
  </div>
</template>

<script>
export default {
    name: "ContextMenu",
    props: {
      id: Number,
          },
    methods: {
        editPayment(){
            this.$modal.show("edit", {
            header: "Edit Cost",
            compName: "AddPaymentForm",
            id: this.id,
            category: this.categoryList,
            name: 'edit'
            
        })
        console.log(123, this.id)
        },
    
        deletePayment () {
            this.$store.commit('deletePaymentsListDate', this.id)
        },
    },
    computed: {
        categoryList() {
            return this.$store.getters.getCategoryList
        }
    }
}
</script>

<style lang="scss" scoped module>
button {
  display: flex;
  justify-content: space-between;
}
</style>