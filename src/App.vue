<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
             <div class="text-h5 text-md-3 pb-4">My personal costs</div>

              <v-dialog v-model="dialog" width="500px">
               <template v-slot:activator="{ on }">
              <v-btn color="teal" v-on="on" dark
               >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
                >
              </template>
        <v-card>
          <AddPaymentForm
            @addNewPayment="addNewPaymentData"
            :category-list="categoryList"
          />
          <v-card-actions>
          <v-btn v-model="dialog" color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <!-- <v-btn color="blue darken-1" text @click="onClick">Save</v-btn> -->
    </v-card-actions>
        </v-card>
       
      </v-dialog>
      <PaymentsDisplay :items="paginatedCosts" />
     <Pagination
        
        :costsPerPage="costsPerPage"
        :pageNumber="pageNumber"
        :length="paymentListLength"
        @pageClick="onPaginate"
        :countPages="countPages"
      />
        
      
    </v-col>
    <v-col cols="6">
      
      <PieChart :category-list="categoryList" :paymentsList="paymentList"/>
      <!-- <Chart :chartData="chartData" :options="chartOptions"/> -->
     
    </v-col>
  
  </v-row>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import Pagination from './components/Pagination.vue'
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PieChart from "./components/PieChart.vue";
// import Chart from "./components/Chart.vue";

export default {
  name: "App",
  
  components: {
    Pagination,
    PaymentsDisplay,
    AddPaymentForm,
    PieChart,
    // Chart
  },
  data() {
    return {
      // paymentsList: [],
      // AddPaymentFormVisible: false,
      costsPerPage: 10,
      pageNumber: 1,
      modalWindowName: "",
      settings: {},
      dialog: false,
  //     chartData: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //           label: '# of Votes',
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //               'rgba(255, 99, 132, 0.2)',
  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)'
  //           ],
  //           borderColor: [
  //               'rgba(255, 99, 132, 1)',
  //               'rgba(54, 162, 235, 1)',
  //               'rgba(255, 206, 86, 1)',
  //               'rgba(75, 192, 192, 1)',
  //               'rgba(153, 102, 255, 1)',
  //               'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //       }]
  //   },
  //     chartOptions: {
  //       responsive: true,
  //       maintainAspectRatio: false
  //   }
  };
},
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      const newItem = [{ ...{ id: 1, page: this.pageNumber }, ...value }];
      this.addDataToPaymentList(newItem);
      console.log("addNewPaymentData", this.page);
    },
    
     onPaginate(page) {
      this.pageNumber = page;
      this.fetchListData(this.pageNumber);
      console.log("llll", page);
    },
    
    
  },
  computed: {
    ...mapGetters(["getFullPaymentValue", "getCountPages"]),
    getFPV() {
      return this.getFullPaymentValue;
    },
    paymentList() {
      // console.log("paymentList", this.$store.getters.getPaymentList)
      return this.$store.getters.getPaymentList;
    },
    paymentListLength() {
      return this.$store.getters.getPaymentList.length;
    },
    
    paginatedCosts() {
     
      console.log(
        "paginatedCosts",
        this.paymentList.filter((el) => el.page === this.pageNumber),
        this.pageNumber,
        this.paymentList
      );
      return this.paymentList.filter((el) => {
        console.log(el.page);
        return el.page === this.pageNumber;
      });
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    countPages() {
      console.log("countPages", this.getCountPages);
      return this.getCountPages;
    },
  },
  created() {
    // this.paymentsList = this.fetchData()
    // this.$store.commit('setPaymentsListData', this.fetchData())
    //     this.setPaymentsListData(this.fetchData())
    //     if (!this.fetchListData.length) {
    //       this.fetchData()
    //     }
    this.$store.dispatch("fetchCategoryList");
    // }
    this.fetchListData();
    console.log("AddPaymentFormVisible");
  },
  mounted() {
  //   this.$modal.EventBus.$on("show", this.onShown);
  //   this.$modal.EventBus.$on("hide", this.onHide);
  
    }
  };
</script>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
