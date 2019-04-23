import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import cinmema from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    cinmema
  }
})
