import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Şems',
      username: '@akseyh'
    },
    tweets: [
      {
        id: 0,
        content: 'Hello World!',
        date: '03 Jul 2020',
        user: {
          name: 'Şems',
          username: '@akseyh'
        },
        likes: 0,
        retweets: 0,
        comments: 0
      }
    ]
  },
  mutations: {
    CREATE_TWEET(state, payload) {
      state.tweets = [...state.tweets, { ...payload, id: state.tweets.length, likes: 0, retweets: 0, comments: 0 }]
    }
  },
  actions: {
  },
  modules: {
  }
})
