import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import cinema from './cinema'
<<<<<<< HEAD
import detail from './detail'
=======
import city from './city'
>>>>>>> 2f030c6b3bd18965baab8fb9cc6e9ed0d9fccbd2

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    cinema,
<<<<<<< HEAD
    detail
=======
    city
>>>>>>> 2f030c6b3bd18965baab8fb9cc6e9ed0d9fccbd2
  }
})
