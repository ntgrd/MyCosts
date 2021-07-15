<template>

    <div class="list">
        <div class="table_header">
            <p>#</p>
            <p>Date</p>
            <p>Category</p>
            <p>Value</p>
        </div>
        <div class="table_body">
            <TableRow 
                v-for="(row, id) in items"
                :key="id"
                :row_data="row" 
                />
        <transition name="fade">
            <ModalWindow/>
        </transition>
             <!-- <ContextMenu @openModalWindow="EditWindowShow" /> -->
        </div>
        <!-- <div class="pagination">
            <div class="page"
                v-for="page in pages"
                :key="page"
                :class="{'page_selected': page === pageNumber}"
                @click="pageClick(page)">
            {{ page }}
            </div>
        </div> -->
    </div>

</template>

<script>

import TableRow from './TableRow.vue'
// import ModalWindow from './ModelWindow.vue'

export default {
    name: "PaymentsDisplay",
    components: {
        TableRow, 
        ModalWindow: () => import("./ModalWindow.vue"),
        // ContextMenu: () => import('./ContextMenu.vue')
    },
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    },
    data() {
        return {
            // costsPerPage: 2,
            // pageNumber: 1
        }
    },
    methods: {
       
            
    },
        
    
    // computed: {
    //     pages() {
    //         return Math.ceil(this.items.length/2);
    //     },
    //     paginatedCosts(){
    //         let from = (this.pageNumber - 1) * this.costsPerPage;
    //         let to = from + this.costsPerPage;
    //         return this.items.slice(from, to);
    //     },
    // },
    // methods: {
    //     pageClick(page) {
    //         this.pageNumber = page;
    //     }
    // }
}
</script>
<style>
.list {
    max-width: 900px;
    margin: 0 auto;
    
}
.table_header {
    display: flex;
    justify-content: space-around;
    border: solid 1px;    
}

p {
    text-align: left;
    font-size: 20px;
    color: red;
    flex-basis: 25%;
    padding: 8px 16px;
}
/* .pagination {
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
} */
</style>