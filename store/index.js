import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    p5: 0
  },
  mutations: {
    SET_P5 (state, p5) {
      state.p5 = p5
    }
  }
})

export default store
