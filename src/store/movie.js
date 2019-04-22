import axios from 'axios'
import { Toast, Loading } from 'vant'

const state = {
  movieList: [],
  newmovieLis: [],

  movieId: [],
  pageNum: 1,
  pageSize: 20,
  total: 20,
  movieIds: '',
  loading: false
}
const getters = {
  setList (state) {
    state.movieList.map (item => {
      item.img = item.img.replace('w.h', '')
    })
  },

  pageTotal (state) {
    return Math.ceil(state.total / state.pageSize)
  },
  finished (state, getters) {
    return state.pageNum > getters.pageTotal
  }
}
const mutations = {
  setMovieIds (state, list) {
    state.movieIds = list
  },
  setMovieList (state, list) {
    state.movieList.push(...list)
  },
  setMovieListId (state, list) {
    setTimeout(() => {
      let len = state.movieId.indexOf(list[list.length - 1].id)
      state.movieIds = state.movieId.splice(len, state.pageSize).join(',')
    }, 0)
  },
  setLoading (state, bol) {
    state.loading = bol
  }
}
const actions = {
  getMovieList ({ commit, state }) {
    setTimeout(() => {
      axios.get('/maoyan/ajax/movieOnInfoList?token=')
      .then(res => {
        let result = res.data
        if(result){
          commit('setMovieIds', result.movieId)
          commit('setMovieList', result.movieList)
          commit('pageTotal', result.total)
          console.log(state.movieIds)
        } else {
          Toast(result.msg)
        }
        commit('setMovieListId', result.movieList)
        commit('setLoading', false)
        Toast.clear()
      })
    })
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
