<template>

<v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date"></v-text-field>
    <v-select
          :items="categoryList"
          v-model="category"
          label="Category">
    </v-select>
    <v-text-field v-model.number="value" label="Value"/>
    <v-card-actions>
          <!-- <v-btn v-model="dialog" color="blue darken-1" text @click="dialog = false">Close</v-btn> -->
          <v-btn color="blue darken-1" text @click="onClick">Save</v-btn>
    </v-card-actions>
</v-card>

</template>

<script>
export default {
  
    name: "AddPaymentForm",
    props: {
    //   categoryList: {
    //   type: Array,
    //   default: () => [],
    // },
      id: Number,
      name: String
    },

    data(){
        return {
            dialog: false,
            value: this.findValue(),
            category: this.findCategory() || this.categoryList,
            date: this.putDate(),
            data: {}
        }
    },
    methods: {
      putDate() {
          return this.$store.getters.getPaymentId(this.id).date || this.getCurrentDate()
      },
        
       
      findValue() {
           return this.$store.getters.getPaymentId(this.id).value 
      },
        
      findCategory() {
        console.log ('cat', this.$store.getters.getPaymentId(this.id).category)
           return this.$store.getters.getPaymentId(this.id).category
           
      },
        
      getCurrentDate() {
        const today = new Date();
        const d = today.getDate();
        const m = today.getMonth() + 1;
        const y = today.getFullYear();
        return `${d}.${m}.${y}`;
      },
      onClick() {
         const { date, value, category, id } = this;
            this.data = {
                date: date || this.getCurrentDate(),
                category,
                value,
                id,
                page: 1
            };
       
        this.$store.commit('addEditedDataToPaymentList', this.data) || this.$emit("addNewPayment", this.data)
        console.log('onClick', this.$store.commit('addEditedDataToPaymentList', this.data))
      }
    },
   computed: {
        categoryList() {
            return this.$store.getters.getCategoryList
        }
  }, 
  watch: {
    $route(to, from) {
      console.log("watch", to, from);
      (this.value = this.findValue()), (this.category = this.findCategory());
    },
  },
};
</script>

<style></style>
