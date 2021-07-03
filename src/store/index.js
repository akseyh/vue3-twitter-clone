import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Şems',
      username: 'akseyh'
    },
    token: null,
    tweets: [
      {
        id: 3,
        content: 'Yeni tweet oluşturmayı deneyin!',
        date: new Date(),
        user: {
          name: 'Şems',
          username: 'akseyh'
        },
        likes: 100,
        retweets: 100,
        comments: 100
      },
      {
        id: 2,
        content: 'Sol alttaki alandan isim ve kullanıcı adınızı değiştirebilirsiniz.',
        date: new Date(),
        user: {
          name: 'Şems',
          username: 'akseyh'
        },
        likes: 0,
        retweets: 6,
        comments: 2
      },
      {
        id: 1,
        content: 'Tweetlerin altındaki ikonlara tıklayarak like ve retweet yapabilirsiniz.',
        date: new Date(),
        user: {
          name: 'Şems',
          username: 'akseyh'
        },
        likes: 20,
        retweets: 0,
        comments: 10
      },
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
    likedTweets: [1, 3],
    reTweets: [2, 3],
    agendas: [
      {
        title: '#tosuncukdönüyor',
        count: '15,3 B Tweet'
      },
      {
        title: '#tosuncukdönüyor',
        count: '15,3 B Tweet'
      },
      {
        title: '#tosuncukdönüyor',
        count: '15,3 B Tweet'
      },
      {
        title: '#tosuncukdönüyor',
        count: '15,3 B Tweet'
      },
      {
        title: '#tosuncukdönüyor',
        count: '15,3 B Tweet'
      },
    ]
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
    },
    LOGIN(state, username) {
      const token = Math.floor(Math.random() * 1000);
      localStorage.setItem('token', token)
      state.token = token
      state.user.username = username || 'akseyh'
    },
    LOGOUT(state) {
      localStorage.removeItem('token')
      state.token = null
    },
    SET_TOKEN(state) {
      state.token = localStorage.getItem('token') || null
    }
  },
  actions: {
  },
  modules: {
  },
})
