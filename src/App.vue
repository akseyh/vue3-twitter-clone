<template>
  <div class="app">
    <menu-section />
    <div class="app__view">
      <router-view />
    </div>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MenuSection from "./components/MenuSection.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    MenuSection,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.app {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #15202b;
  color: #fff;
}

.app__view {
  width: 600px;
  height: 100vh;
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
}
@media only screen and (max-width: 1100px) {
  .app__view {
    width: 100%;
  }
}
</style>
