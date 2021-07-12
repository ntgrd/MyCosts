<template>
  <div class="pagination">
      <div @click="onClick(pageNumber - 1)" class="page"> - </div>
    <div class="page"
                v-for="page in countPages"
                :key="page"
                :class="{'page_selected': page === pageNumber}"
                @click="onClick(page)">
            {{ page }}
                      </div>
              <div @click="onClick(pageNumber + 1)" class="page"> + </div>
        </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        costsPerPage: {
            type: Number,
            default: 10,
        },
        pageNumber: Number,
        items: {
            type: Array,
            default: ()=>[],
        },
        length: Number,
        countPages: Number
    },
    
    computed: {
        pages() {
            return Math.ceil(this.length/this.costsPerPage);
        },
        // paginatedCosts(){
        //     let from = (this.pageNumber - 1) * this.costsPerPage;
        //     let to = from + this.costsPerPage;
        //     return this.items.slice(from, to);
        // },
    },
    methods: {
        onClick(page) {
            if(page < 1 || page > this.costsPerPage) {
                return
            }
            console.log('onClick', page)
            this.$emit('pageClick', page)
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.page {
    padding: 8px;
    border: solid 1px blue;
}
.page:hover {
    background: blue;
}
.page_selected {
    background: grey;
}
</style>