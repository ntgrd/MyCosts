<template>
  <div class="payment-form">
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
        // AddPaymentFormVisible: Boolean,  
        categoryList: {
            type: Array,
            default: ()=> [],
        },
        openAddPaymentForm: Boolean
    },
    data(){
        return {
            value: this.findValue(),
            category: this.findCategory(),
            date: this.putDate(),
            idx: Number
        }
    },
    methods:{
        putDate (){
            if (this.openAddPaymentForm) {
            return this.date
            }
            else {  
                console.log('putDate', this.getCurrentDate())  
                return this.getCurrentDate()
            }
        },
        findValue(){
            if (this.openAddPaymentForm) {
                return 0
            }
            else {
                console.log('findValue', this.$route.query.value)
                return Number(this.$route.query.value)
            }
        },
        findCategory(){
            console.log('findCategory', this.categoryList,this.$route.path )
            if (this.openAddPaymentForm) ''
            else
            {
                this.categoryList.push(this.$route.path.split('/')[3]);
                return this.$route.path.split('/')[3]
            }

        },
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
    },
    watch: {
        $route(to, from) {
            console.log('watch', to, from)
            this.value = this.findValue(),
            this.category = this.findCategory()
        },
    }
}
</script>

<style>

</style>