<template>

<v-card class="text-left pa-8">
    <v-text-field v-model="this.date" label="Date" />
    <v-select
          :items="categoryList"
          v-model="this.category"
          label="Category">
    </v-select>
    <v-text-field v-model.number="this.value" label="Value"/>
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
      categoryList: Array,
      id: Number,
      name: String
    },

    data(){
        return {
            value: this.$store.getters.getPaymentId(this.id).value,
            category: this.categoryList,
            date: this.$store.getters.getPaymentId(this.id).date || this.getCurrentDate(),
            dialog: false,
            
        }
    },
  methods: {
      // editPayment(){
      //       header: "Edit Cost",
      //       id: this.id,
      //       category: this.categoryList,
      //       name: 'edit'
            
      //   })
      //   console.log(123, this.id)
      //   },
      get_id(){
        const obj = this.$store.getters.getPaymentId(this.id)
        this.date = obj.date
        this.value = obj.value
        this.category = obj.category
        console.log('get_id2', this, obj)
     
      },
    putDate() {
        console.log('putDate', this.name)
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).date
        }
        
        else {
        console.log("putDate", this.getCurrentDate());
            return this.getCurrentDate();
        }
    },
    findValue() {
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).value
        }
        
        else {
        console.log("findValue", this.$route.query.value);
            return Number(this.$route.query.value);
        }
    },
    findCategory() {
      console.log("findCategory", this.categoryList, this.$route.path, this.$route.params.id);
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).category
        }
        
        else {
        this.categoryList.push(this.$route.params.id);
            return this.$route.params.id;
        }
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    onClick() {
      //  if (this.name === 'edit') {
      //      const { date, value, category, id } = this;
      //       this.data = {
      //           date,
      //           category,
      //           value,
      //           id,
      //           page: 1
      //       };
      //   console.log('edit', this.data);
      //   this.$store.commit('addEditedDataToPaymentList', this.data)
      //   }

      //   if (this.name === 'add') {
            const { value, category, id } = this;
            this.data = {
                date: this.date || this.getCurrentDate(),
                category,
                value,
                id,
            };
            console.log('onClick',this.data);
            this.$emit("addNewPayment", this.data);
        },
    },
    
  
  mounted() {
      
          // console.log('lllll',this.$store.getters.getPaymentId(1))
      
    
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
