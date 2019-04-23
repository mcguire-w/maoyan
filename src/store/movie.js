import axios from 'axios'
import { Toast, Loading } from 'vant'

const state = {
  movieList: [],
  movieIdAll: [],

  movieIds: '',
  pageNum: 1,
  pageSize: 10,
  pageTotal: 30,

  loading: false
}
const getters = {
  pageTotal (state) {
    return Math.ceil(state.pageTotal / state.pageSize)
  },
  finished (state, getters) {
    return state.pageNum > getters.pageTotal
  }
}
const mutations = {
  setMovieIdAll (state, list) {
    state.movieIdAll = list;
  },
  setMovieList (state, list) {
    state.movieList.push(...list)
  },
  setNewMovieList (state, imgSize) {
    state.movieList.map(item => {
      item.img = item.img.replace('w.h', imgSize)
    })
  },
  setMovieIds (state) {
    state.movieIds = state.movieIdAll.filter((item, index) => {
      return index >= state.pageSize * (state.pageNum) + 2  && index < state.pageSize * (state.pageNum) + 12
    }).join(',')
  },
  setPageNum (state){
    state.pageNum += 1
  },
  setTotal (state, total) {
    state.pageTotal = total
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
        if (result) {
          commit('setMovieIdAll', result.movieIds)
          commit('setMovieList', result.movieList)
          commit('setNewMovieList', '128.180')
        } else {
          Toast(result.msg)
        }
        commit('setTotal', result.total)
        commit('setLoading', false)
        Toast.clear()
      })
    }, 300)
  },
  getPageList ({ commit, state}) {
    commit('setMovieIds')
    setTimeout (() => {
      axios.get('/maoyan/ajax/moreComingList?token=', {
        params: {
          'movieIds': state.movieIds
        }
      }).then(res => {
        let result = res.data
        if (result) {
          commit('setMovieList', result.coming)
          commit('setNewMovieList', '128.180')
        } else {
          Toast(result.msg)
        }
        commit('setPageNum')
        commit('setLoading', false)
        Toast.clear()
      })
    }, 500)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
