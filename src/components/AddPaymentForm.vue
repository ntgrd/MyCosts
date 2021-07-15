<template>
  <div class="payment-form">
    <input placeholder="Amout" type="number" v-model.number="value" />
    <!-- <input placeholder="Category" type="text" v-model.trim="category" /> -->
    <select v-model="category">
      <option v-for="(item, id) in categoryList" :value="item" :key="id">
        {{ item }}
      </option>
    </select>
    <input placeholder="Date" type="text" v-model.trim="date" />
    <button @click="onClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    // AddPaymentFormVisible: Boolean,
    categoryList: {
      type: Array,
      default: () => [],
    },
    id: Number,
    openAddPaymentForm: Boolean,
    name: String
  },
  data() {
    return {
      value: this.findValue(),
      category: this.findCategory(),
      date: this.putDate(),
      data: {}
      
    };
  },
  methods: {
   
    putDate() {
        console.log('putDate', this.name)
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).date
        }
        if (this.openAddPaymentForm) {
            return this.date;
        } else {
        console.log("putDate", this.getCurrentDate());
            return this.getCurrentDate();
        }
    },
    findValue() {
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).value
        }
        if (this.openAddPaymentForm) {
            return 0;
        } else {
        console.log("findValue", this.$route.query.value);
            return Number(this.$route.query.value);
        }
    },
    findCategory() {
      console.log("findCategory", this.categoryList, this.$route.path, this.$route.params.id);
        if (this.name === 'edit') {
            return this.$store.getters.getPaymentId(this.id).category
        }
        if (this.openAddPaymentForm) "";
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
       if (this.name === 'edit') {
           const { date, value, category, id } = this;
            this.data = {
                date,
                category,
                value,
                id,
                page: 1
            };
        console.log('edit', this.data);
        this.$store.commit('addEditedDataToPaymentList', this.data)
        }

        if (this.name === 'add') {
            const { value, category, id } = this;
            this.data = {
                date: this.date || this.getCurrentDate(),
                category,
                value,
                id,
            };
            console.log(this.datadata);
            this.$emit("addNewPayment", this.data);
        }
    },
    
  },
  mounted() {
      
          console.log('lllll',this.$store.getters.getPaymentId(1))
      
    
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
