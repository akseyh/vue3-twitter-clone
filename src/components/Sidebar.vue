<template>
  <div class="sidebar">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "Sidebar",
  components: { SearchBar },
};
</script>

<style scoped>
.sidebar {
  width: 350px;
  min-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
}

@media only screen and (max-width: 1100px) {
  .sidebar {
    display: none;
  }
}
</style>