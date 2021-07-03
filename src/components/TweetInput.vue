<template>
  <div class="tweet-input">
    <div class="tweet-input__user-icon"></div>
    <div class="tweet-input__input">
      <input placeholder="Neler oluyor?" v-model="tweet" />
      <CustomButton
        class="button"
        :disabled="!tweet.length"
        @click="createTweet"
      >
        Tweetle
      </CustomButton>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import CustomButton from "./CustomButton.vue";
export default {
  name: "TweetInput",
  components: { CustomButton },
  setup() {
    const store = useStore();
    const tweet = ref("");

    function createTweet() {
      if (!tweet.value.length) return;
      const payload = {
        content: tweet.value,
        user: { ...store.state.user },
        date: new Date(),
      };
      store.commit("CREATE_TWEET", payload);
      tweet.value = "";
    }

    return {
      tweet,
      createTweet,
    };
  },
};
</script>

<style scoped>
.tweet-input {
  border-bottom: 5px solid rgb(56, 68, 77);
  padding: 10px 10px 0 10px;
  display: flex;
}
.tweet-input__user-icon {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 100%;
  background: gray;
}
.tweet-input__input {
  width: 100%;
  margin: 10px 0 0 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.tweet-input__input input {
  background: transparent;
  border: 0;
  color: lightgray;
  font-size: 1.3rem;
}
.tweet-input__input input:focus {
  outline: none;
}
</style>