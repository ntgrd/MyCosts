<template>
  <div class="payment-form" v-show="AddPaymentFormVisible">
      <input placeholder="Amout" type="number" v-model.number="value" />
      <!-- <input placeholder="Category" type="text" v-model.trim="category" /> -->
      <select v-model="category">
          <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
              {{item}}
          </option>
      </select>
      <input placeholder="Date" type="text" v-model.trim="date" />
      <button @click="onClick"> Save </button>
  </div>
</template>

<script>

export default {
    name: "AddPaymentForm",
    props: {
        AddPaymentFormVisible: Boolean,  
        categoryList: [] 
    },
    data(){
        return {
            value: 0,
            category: 'Food',
            date: '',
            idx: Number
        }
    },
    methods:{
        getCurrentDate(){
            const today= new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        onClick(){
            const {value, category, idx} = this
            const data = {
                date: this.date || this.getCurrentDate(), 
                category,
                value,
                idx
            }
            console.log(data)
            this.$emit('addNewPayment', data)
        }
    }
}
</script>

<style>

</style>