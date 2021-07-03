<template>
  <button @click="login">LOGIN</button>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();

    function login() {
      store.commit("LOGIN");
      router.push({ name: "Home" });
    }

    return {
      login,
    };
  },
};
</script>