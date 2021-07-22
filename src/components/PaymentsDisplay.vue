<template>
<v-container>
    <v-row>
        <v-col cols="1">#</v-col>
        <v-col cols='3'>Date</v-col>
        <v-col cols='4'>Category</v-col>
        <v-col cols='2'>Value</v-col>
        <v-col cols='2'>Menu</v-col>
    </v-row>
    <v-alert
      outlined
      color="grey">
    
    <v-row   v-for="(item, id) in items" 
            :key="id">
            <v-col cols='1'>{{ item.id }}</v-col>
            <v-col cols='3'>{{ item.date }}</v-col>
            <v-col cols='4'>{{ item.category }}</v-col>
            <v-col cols='2'>{{ item.value }}</v-col>
           <v-col cols='2'>
    <template>
        <div class="text-center">
            <v-menu top offset-x>
              <template v-slot:activator="{ on, attrs }">
                 <v-btn v-bind="attrs" v-on="on">
                     <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

        <v-list>
            <v-dialog v-model="dialog" width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn  v-on="on">Edit </v-btn>
                </template>
        <v-card>
            <AddPaymentForm
            
            :id="item.id"
            />
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <!-- <v-btn color="blue darken-1" text>Save</v-btn> -->
                </v-card-actions>
        </v-card>
        </v-dialog>
         <v-btn  @click="deletePayment">Delete</v-btn>
        </v-list>
    </v-menu>
  </div>
</template>
</v-col>
</v-row>
</v-alert>
</v-container>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
    components: {
    AddPaymentForm,
    
  },
    name: "PaymentsDisplay",
    data() {
        return {
            dialog: false,
            // name: 'edit'
        }
    },
    props: {
        items: {
            type: Array,
            default: ()=>[],
        },
        id: Number,
    },
    methods: {
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