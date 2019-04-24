import axios from 'axios'
import { Toast, Loading } from 'vant'

const state = {
  movieList: [],
  movieIdAll: [],

  movieBannerList: [],

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
  },
  newMovieList (state) {
    let list = state.movieList
    let result = []
    let flag = {}
    let index = 0

    list.forEach(item => {
      let date = item.comingTitle
      if (flag[date]) {
        result[flag[date] - 1].movieList.push(item)
      } else {
        flag[date] = ++index
        let obj = {
          date : date,
          movieList: [item]
        }
        result.push(obj)
      }
    })
    return result
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
  setNewBannerList (state, imgSize) {
    state.movieBannerList.map(item => {
      item.img = item.img.replace('w.h', imgSize)
    })
  },
  setMovieIds (state) {
    state.movieIds = state.movieIdAll.filter((item, index) => {
      return index >= state.pageSize * (state.pageNum) + 2  && index < state.pageSize * (state.pageNum) + 12
    }).join(',')
  },
  setFmovieIds (state) {
    state.movieIds = state.movieIdAll.slice(state.pageSize * state.pageNum, state.pageSize * (state.pageNum + 1)).join(',');
  },
  setPageNum (state){
    state.pageNum += 1
  },
  setTotal (state, total) {
    state.pageTotal = total
  },
  setLoading (state, bol) {
    state.loading = bol
  },
  setMovieBannerList (state, list) {
    state.movieBannerList = list
  },
  clearData (state) {
    state.movieList = []
    state.movieIdAll = []
    state.pageNum = 1
  }
}
const actions = {
  getMovieList ({ commit }) {
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
  },
  getMovieBannerList ({ commit, state }) {
    axios.get('/maoyan/ajax/mostExpected?token=', {
      params: {
        'ci': 30,
        'limit': 10,
        'offset': 0,
      }
    }).then (res => {
      let result = res.data
      if (result) {
        commit('setMovieBannerList', result.coming)
        commit('setNewBannerList', '170.230')
      } else {
        Toast(result.msg)
      }
      Toast.clear()
    })
  },
  getFmovieList ({ commit, state }) {
    axios.get('/maoyan/ajax/comingList?token=',{
      params: {
        'ci': 30,
        'limit': 10
      }
    }).then (res => {
      let result = res.data
      if (result) {
        console.log(result.coming)
        commit('setMovieIdAll', result.movieIds)
        commit('setMovieList', result.coming)
        commit('setNewMovieList', '128.180')
      } else {
        Toast(result.msg)
      }
      commit('setTotal', result.movieIds.length)
      commit('setPageNum')
      commit('setLoading', false)
      Toast.clear()
    })
  },
  getFpageMovieList ({commit, state}) {
    commit ('setFmovieIds');
    console.log(state.movieIds)
    axios.get ('/maoyan/ajax/moreComingList?token=', {
      params: {
        'ci': 30,
        'limit': 10,
        'movieIds': state.movieIds
      }
    }).then (res => {
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
