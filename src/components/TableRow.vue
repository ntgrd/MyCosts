<template>
    <div class="table_row">
        <div class="row row_idx">{{ row_data.id}}</div>
        <div class="row row_date">{{ row_data.date }}</div>
        <div class="row row_category">{{ row_data.category }}</div>
        <div class="row row_value">{{ row_data.value }}</div>
        <div class="row row_menu">
        <button @click="openMenu(row_data.id)" >menu</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "TableRow",
    
    props: {
        row_data: {
            type: Object,
            default: ()=>{
                return {}
            }
        },
    },
    methods: {
        openMenu(id) {
        console.log("show")
            this.$modal.show("menu", {
            compName: "ContextMenu",
            header: '',
            id: id
        })
    }
  }
}
</script>
<style>
.table_row {
    display: flex;
    justify-content: space-around;   
    border: solid 1px;
   
}
.row {
    flex-basis: 25%;
    align-items: center;
    padding: 8px 16px;
    
}
</style>