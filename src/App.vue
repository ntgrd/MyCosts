<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddCostBtn @openForm="openFormClick"/>
      <br/>
      <AddPaymentForm @addNewPayment="addNewPaymentData" :AddPaymentFormVisible="AddPaymentFormVisible" :category-list="categoryList"/>
      <br/>
      <PaymentsDisplay :items="paginatedCosts"/>
      <!-- <PaymentsDisplay :items="categoryList"/> -->
      <br/>
      <Pagination :costsPerPage="costsPerPage" :pageNumber="pageNumber" :length="paymentListLength" @pageClick="onPaginate" :countPages="countPages"/>
    </div>
     <div>Total Sum = {{ getFullPaymentValue }}</div>
  </div>
</template>

<script>
import AddCostBtn from './components/AddCostBtn.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Pagination from './components/Pagination.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AddCostBtn,
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
data(){
        return {
            // paymentsList: [],
            AddPaymentFormVisible: false,
            costsPerPage: 10,
            pageNumber: 1,
            
        }
    },
    methods: {
      ...mapMutations([
          'setPaymentsListData',
          'addDataToPaymentList'
      ]),
      ...mapActions({
        fetchListData: 'fetchData'
      }),
        addNewPaymentData(value){
          const newItem = [{...{id:1, page:this.pageNumber}, ...value}]
          this.addDataToPaymentList(newItem)
          console.log('addNewPaymentData', value)
        },
        openFormClick () {
          this.AddPaymentFormVisible =! this.AddPaymentFormVisible
        },
        onPaginate(page) {
            this.pageNumber = page;
            this.fetchListData(this.pageNumber)
             console.log('onPaginate', this.pageNumber)
        },
        // fetchData(){
        //     return {
        //       "page1": [
        //         {
        //             date: "12.03.2020",
        //             category: "Food",
        //             value: 180,
        //             id: 1
        //         },
        //         {
        //             date: "12.04.2020",
        //             category: "Internet",
        //             value: 100,
        //             id: 2
        //         },
        //         {
        //             date: "28.08.2019",
        //             category: "Food",
        //             value: 300,
        //             id: 3
        //         },
        //       ],
        //       "page2": [
        //         {
        //             date: "12.03.2020",
        //             category: "Food",
        //             value: 180,
        //             id: 4
        //         },
        //         {
        //             date: "12.04.2020",
        //             category: "Internet",
        //             value: 100,
        //             id: 5
        //         },
        //         {
        //             date: "28.08.2019",
        //             category: "Food",
        //             value: 300,
        //             id: 6
        //         },
        //       ],
        //       "page3": [
        //         {
        //             date: "12.03.2020",
        //             category: "Food",
        //             value: 180,
        //             id: 7
        //         },
        //         {
        //             date: "12.04.2020",
        //             category: "Internet",
        //             value: 100,
        //             id: 8
        //         },
        //         {
        //             date: "28.08.2019",
        //             category: "Food",
        //             value: 300,
        //             id: 9
        //         },
        //       ],
        //       "page4": [
        //         {
        //             date: "12.03.2020",
        //             category: "Food",
        //             value: 180,
        //             id: 10
        //         },
        //         {
        //             date: "12.04.2020",
        //             category: "Internet",
        //             value: 100,
        //             id: 11
        //         },
        //         {
        //             date: "28.08.2019",
        //             category: "Food",
        //             value: 300,
        //             id: 12
        //         },
        //       ]
        //   } 
         
    },
    computed: {
      ...mapGetters([
            'getFullPaymentValue',
            'getCountPages'
      ]),
      getFPV(){
          return this.getFullPaymentValue
      },
      paymentList(){
        // console.log("paymentList", this.$store.getters.getPaymentList)
        return this.$store.getters.getPaymentList
      }, 
      paymentListLength(){
      return this.$store.getters.getPaymentList.length
      },
      paginatedCosts(){
            // let from = (this.pageNumber - 1) * this.costsPerPage;
            // let to = from + this.costsPerPage;
            console.log("paginatedCosts", this.paymentList.filter(el => el.page === this.pageNumber), this.pageNumber,this.paymentList)
            return this.paymentList.filter(el => {console.log(el.page)
             return el.page === this.pageNumber});
           
        },
      categoryList(){
        return this.$store.getters.getCategoryList
      }, 
      countPages(){
        console.log("countPages", this.getCountPages)
        return this.getCountPages
      }
    },
    created(){
        // this.paymentsList = this.fetchData()
        // this.$store.commit('setPaymentsListData', this.fetchData())
    //     this.setPaymentsListData(this.fetchData())
    //     if (!this.fetchListData.length) {
    //       this.fetchData()
    //     }
        this.$store.dispatch('fetchCategoryList')
    // }
    this.fetchListData()
    }
}
</script>

<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
</style>
