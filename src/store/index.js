import Vue from 'vue'
import Vuex from 'vuex'
import cinmema from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cinmema
  }
})