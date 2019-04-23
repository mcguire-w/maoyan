import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import cinema from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    cinema
  }
})
