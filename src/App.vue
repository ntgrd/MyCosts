<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddCostBtn @openForm="openFormClick"/>
      <br/>
      <AddPaymentForm @addNewPayment="addNewPaymentData" :AddPaymentFormVisible="AddPaymentFormVisible"/>
      <br/>
      <PaymentsDisplay :items="paymentsList"/>
    </div>
  </div>
</template>

<script>
import AddCostBtn from './components/AddCostBtn.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    AddCostBtn,
    PaymentsDisplay,
    AddPaymentForm,
  },
data(){
        return {
            paymentsList: [],
            AddPaymentFormVisible: false,
        }
    },
    methods: {
        addNewPaymentData(value){
          this.paymentsList= [...this.paymentsList, value]
        },
        openFormClick () {
          this.AddPaymentFormVisible =! this.AddPaymentFormVisible
        },
        fetchData(){
            return [
                {
                    date: "12.03.2020",
                    category: "Food",
                    value: 180
                },
                {
                    date: "12.04.2020",
                    category: "Internet",
                    value: 100
                },
                {
                    date: "28.08.2019",
                    category: "Food",
                    value: 300
                },
                {
                    date: "11.03.2018",
                    category: "Sport",
                    value: 1400
                },
                {
                    date: "12.03.2020",
                    category: "Food",
                    value: 180
                },
                {
                    date: "12.04.2020",
                    category: "Internet",
                    value: 100
                },
                {
                    date: "28.08.2019",
                    category: "Food",
                    value: 300
                },
                {
                    date: "11.03.2018",
                    category: "Sport",
                    value: 1400
                },
            ]
        }
    },
    created(){
        this.paymentsList = this.fetchData()
    }
}
</script>

<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
</style>
