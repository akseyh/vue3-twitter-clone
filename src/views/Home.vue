<template>
  <header class="home__header">Anasayfa</header>
  <TweetInput />
  <div class="home__contents">
    <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import TweetInput from "../components/TweetInput.vue";
import Tweet from "../components/Tweet.vue";
import { computed } from "@vue/runtime-core";
export default {
  name: "Home",
  components: { TweetInput, Tweet },
  setup() {
    const store = useStore();

    const tweets = computed(() => store.state.tweets.reverse());

    return {
      tweets,
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
</style>