<template>
  <div class="app" v-if="isLoggedIn">
    <menu-section />
    <div class="app__view">
      <router-view />
    </div>
    <sidebar />
  </div>
  <div class="app__login" v-else>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MenuSection from "./components/MenuSection.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    Sidebar,
    MenuSection,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => !!store.state.token);

    store.commit("SET_TOKEN");

    if (!isLoggedIn.value) {
      router.push({ name: "Login" });
    } else {
      router.push({ name: "Home" });
    }

    return {
      isLoggedIn,
    };
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

.app__login {
  width: 100%;
  height: 100vh;
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
