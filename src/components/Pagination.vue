<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="countPages"
      @input="onClick(page)"
           
    ></v-pagination>
  </div>
</template>


<script>
export default {
    name: "Pagination",
    props: {
        // costsPerPage: {
        //     type: Number,
        //     default: 10,
        // },
        pageNumber: Number,
        // items: {
        //     type: Array,
        //     default: ()=>[],
        // },
        // length: Number,
        countPages: Number
    },
    data () {
      return {
        page: this.pageNumber,
      }
    },
    
    computed: {
        // pages() {
        //     return Math.ceil(this.length/this.costsPerPage);
        // },
    },
    methods: {
        onClick(page) {
            // if(page < 1 || page > this.costsPerPage) {
            //     return
            console.log('onClick')
            this.$emit('pageClick', page)
            
        }
    }
}
</script>

// <style lang="scss" scoped>
// .pagination {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-top: 30px;
// }
// .page {
//     padding: 8px;
//     border: solid 1px blue;
// }
// .page:hover {
//     background: blue;
// }
// .page_selected {
//     background: grey;
// }
// </style>