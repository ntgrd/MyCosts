<template>
  <div class="Add_btn">
    <button @click="clicked">Add new cost</button>
  </div>
</template>

<script>
export default {
  name: "AddCostBtn",
  data() {
    return {};
  },
  methods: {
    clicked() {
      this.$emit("openModalWindow")
    }
  }
};
</script>

<style></style>
