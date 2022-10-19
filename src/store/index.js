import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      'example1',
      'example2'
    ]
  },
  getters: {
    getPosts(state) {
      return state.posts
    }
  },
  mutations: {},
  actions: {},

  modules: {
    example,
  }
})