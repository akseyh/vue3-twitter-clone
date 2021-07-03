<template>
  <header class="home__header">Anasayfa</header>
  <TweetInput />
  <div class="home__contents">
    {{ store.state.tweets }}
  </div>
</template>

<script>
import { useStore } from "vuex";
import TweetInput from "../components/TweetInput.vue";
export default {
  name: "Home",
  components: { TweetInput },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>

<style scoped>
.home__header {
  padding: 15px;
  border-bottom: 1px solid rgb(56, 68, 77);
  font-weight: 700;
  font-size: 1.3rem;
}
.home__contents {
  padding: 15px;
}
</style>