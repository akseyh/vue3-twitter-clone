import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Şems',
      username: 'akseyh'
    },
    tweets: [
      {
        id: 0,
        content: 'Hello World!',
        date: new Date(),
        user: {
          name: 'Şems',
          username: 'akseyh'
        },
        likes: 999,
        retweets: 0,
        comments: 0
      }
    ],
    likedTweets: [],
    reTweets: []
  },
  mutations: {
    SET_NAME(state, val) {
      state.user.name = val
    },
    SET_USERNAME(state, val) {
      state.user.username = val
    },
    CREATE_TWEET(state, payload) {
      state.tweets = [...state.tweets, { ...payload, id: state.tweets.length, likes: 0, retweets: 0, comments: 0 }]
    },
    LIKE_TWEET(state, id) {
      if (!state.likedTweets.includes(id)) {
        state.tweets = state.tweets.map(el => {
          if (el.id === id) el = { ...el, likes: el.likes + 1 }
          return el
        })
        state.likedTweets.push(id)
      } else {
        state.tweets = state.tweets.map(el => {
          if (el.id === id) el = { ...el, likes: el.likes - 1 }
          return el
        })
        state.likedTweets = state.likedTweets.filter(el => el !== id)
      }
    },
    RE_TWEET(state, id) {
      if (!state.reTweets.includes(id)) {
        state.tweets = state.tweets.map(el => {
          if (el.id === id) el = { ...el, retweets: el.retweets + 1 }
          return el
        })
        state.reTweets.push(id)
      } else {
        state.tweets = state.tweets.map(el => {
          if (el.id === id) el = { ...el, retweets: el.retweets - 1 }
          return el
        })
        state.reTweets = state.reTweets.filter(el => el !== id)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
