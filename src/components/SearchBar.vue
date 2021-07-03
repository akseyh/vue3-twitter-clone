<template>
  <div class="search-bar">
    <SearchIcon class="icon" />
    <input class="search-bar__input" placeholder="Twitter'da Ara" />
  </div>
</template>

<script>
import SearchIcon from "../assets/Search.vue";
export default {
  name: "SearchBar",
  components: { SearchIcon },
};
</script>

<style scoped>
.search-bar {
  background: #253441;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.search-bar .icon {
  fill: rgb(145, 145, 145);
  width: 20px;
  margin-right: 20px;
}

.search-bar .search-bar__input {
  background: transparent;
  color: lightgray;
  border: 0;

  font-weight: 500;
  font-size: 1rem;
}

.search-bar .search-bar__input:focus {
  outline: none;
}
</style>