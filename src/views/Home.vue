<template>
  <div class="home">
    <header class="home__header">Anasayfa</header>
    <TweetInput />
    <div class="home__contents">
      <Tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :isLikedByMe="likedTweets.includes(tweet.id)"
        :isRetweetedByMe="reTweets.includes(tweet.id)"
        @likeTweet="likeTweet"
        @reTweet="reTweet"
      />
    </div>
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

    const tweets = computed(() =>
      store.state.tweets.sort((a, b) => b.id - a.id)
    );

    const likedTweets = computed(() => store.state.likedTweets);
    const reTweets = computed(() => store.state.reTweets);

    function likeTweet(id) {
      store.commit("LIKE_TWEET", id);
    }
    function reTweet(id) {
      store.commit("RE_TWEET", id);
    }

    return {
      tweets,
      likeTweet,
      reTweet,
      likedTweets,
      reTweets,
    };
  },
};
</script>

<style scoped>
.home {
  height: 100%;
}
.home__header {
  padding: 15px;
  border-bottom: 1px solid rgb(56, 68, 77);
  font-weight: 700;
  font-size: 1.3rem;
}
.home__contents {
  box-sizing: border-box;
  height: calc(100% - 180px);
  overflow-x: scroll;
}
</style>