<template>
  <div class="tweet">
    <div class="tweet__icon"></div>
    <div class="tweet__detail">
      <div class="tweet__user-info">
        <span class="name">{{ tweet.user.name }}</span>
        <span class="username">{{ tweet.user.username }}</span>
      </div>
      <div class="tweet__content">{{ tweet.content }}</div>
      <div class="tweet__analytics">
        <div class="tweet__analytic">
          <CommentIcon class="icon" />
          <span>{{ tweet.comments }}</span>
        </div>
        <div class="tweet__analytic">
          <HeartIcon class="icon" />
          <span>{{ tweet.likes }}</span>
        </div>
        <div class="tweet__analytic">
          <RetweetIcon class="icon" />
          <span>{{ tweet.retweets }}</span>
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
  margin-right: 20px;
}
.tweet__analytics .tweet__analytic .icon {
  fill: gray;
  width: 20px;
  margin-right: 5px;
}
</style>