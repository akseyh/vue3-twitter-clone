import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Şems',
      username: '@akseyh'
    },
    tweets: [
      {
        content: 'Hello World!',
        date: '03 Jul 2020',
        user: {
          name: 'Şems',
          username: '@akseyh'
        }
      }
    ]
  },
  mutations: {
    CREATE_TWEET(state, payload) {
      state.tweets = [...state.tweets, payload]
    }
  },
  actions: {
  },
  modules: {
  }
})
