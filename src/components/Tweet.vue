<template>
  <div class="tweet">
    <div class="tweet__icon"></div>
    <div class="tweet__detail">
      <div class="tweet__user-info">
        <span class="name">{{ tweet.user.name }}</span>
        <span class="username">@{{ tweet.user.username }}</span>
      </div>
      <div class="tweet__content">{{ tweet.content }}</div>
      <div class="tweet__analytics">
        <div class="tweet__analytic tweet__analytic--comments">
          <CommentIcon class="icon" />
          <span>{{ tweet.comments }}</span>
        </div>
        <div
          class="tweet__analytic tweet__analytic--retweets"
          :class="{ 'tweet__analytic--active': isRetweetedByMe }"
          @click="$emit('reTweet', tweet.id)"
        >
          <RetweetIcon class="icon" />
          <span>{{ tweet.retweets }}</span>
        </div>
        <div
          class="tweet__analytic tweet__analytic--likes"
          :class="{ 'tweet__analytic--active': isLikedByMe }"
          @click="$emit('likeTweet', tweet.id)"
        >
          <HeartIcon class="icon" />
          <span>{{ tweet.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentIcon from "../assets/Comment.vue";
import RetweetIcon from "../assets/Retweet.vue";
import HeartIcon from "../assets/Heart.vue";
export default {
  name: "Tweet",
  props: {
    tweet: {
      type: Object,
      required: true,
    },
    isLikedByMe: {
      type: Boolean,
      default: false,
    },
    isRetweetedByMe: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CommentIcon,
    RetweetIcon,
    HeartIcon,
  },
};
</script>

<style scoped>
.tweet {
  padding: 15px 10px;
  display: flex;
  border-bottom: 1px solid gray;
  cursor: pointer;
  transition: all 0.1s;
}
.tweet:hover {
  background: #1a2835;
}
.tweet__icon {
  width: 40px;
  max-width: 40px;
  min-width: 40px;
  height: 40px;
  max-height: 40px;
  min-height: 40px;
  background: gray;
  border-radius: 100%;
  margin-right: 10px;
}
.tweet__detail {
  display: flex;
  flex-direction: column;
}
.tweet__user-info .name {
  font-weight: 700;
  font-size: 1rem;
}
.tweet__user-info .username {
  font-weight: 100;
  font-size: 0.8rem;
  margin-left: 5px;
  color: lightgray;
}
.tweet__content {
  margin-top: 10px;
  font-weight: 100;
  font-size: 1rem;
}
.tweet__analytics {
  display: flex;
  margin-top: 20px;
  color: gray;
}
.tweet__analytics .tweet__analytic {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.tweet__analytics .tweet__analytic--likes:hover {
  color: rgb(224, 36, 94);
}
.tweet__analytics .tweet__analytic--likes:hover > .icon {
  fill: rgb(224, 36, 94);
}
.tweet__analytics .tweet__analytic--likes.tweet__analytic--active {
  color: rgb(224, 36, 94);
}
.tweet__analytics .tweet__analytic--likes.tweet__analytic--active .icon {
  fill: rgb(224, 36, 94);
}
.tweet__analytics .tweet__analytic--comments:hover {
  color: rgb(29, 161, 242);
}
.tweet__analytics .tweet__analytic--comments:hover > .icon {
  fill: rgb(29, 161, 242);
}
.tweet__analytics .tweet__analytic--retweets:hover {
  color: rgb(23, 191, 99);
}
.tweet__analytics .tweet__analytic--retweets:hover > .icon {
  fill: rgb(23, 191, 99);
}
.tweet__analytics .tweet__analytic--retweets.tweet__analytic--active {
  color: rgb(23, 191, 99);
}
.tweet__analytics .tweet__analytic--retweets.tweet__analytic--active .icon {
  fill: rgb(23, 191, 99);
}
.tweet__analytics .tweet__analytic .icon {
  fill: gray;
  width: 20px;
  margin-right: 10px;
}
</style>