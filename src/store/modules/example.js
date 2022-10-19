export default {
  state: {
    example: [
      'module1',
      'module2'
    ]
  },
  getters: {
    getExample(state) {
      return state.example
    }
  },
  mutations: {},
  actions: {}
}