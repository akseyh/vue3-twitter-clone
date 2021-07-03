import { createStore } from 'vuex'

export default createStore({
  state: {
    tweets: [
      {
        content: 'Hello World!',
        date: '03 Jul 2020',
        user: 'Şems'
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
