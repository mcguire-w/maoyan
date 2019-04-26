import axios from 'axios'

const state= {
  showList: [], //影院地址
  showListMin: [], //影片主演
  showListTime: [] //影片上映日期
}

const mutations = {
  setShowList (state, list) {
    state.showList = list
  },
  setShowListMin (state, list) {
    state.showListMin = list
  },
  setShowListTime (state, list) {
    state.showListTime = list
  }
}

const actions = {
  getShowList ({ commit }) {
    axios.get('/maoyan/ajax/cinemaDetail?cinemaId=6326'
    ).then(res => {
      let result = res.data
      // console.log(res.data)
      if (result) {
        // console.log(result.cinemaData)
        console.log(result.showData.movies)
        commit('setShowList', result.cinemaData)
        commit('setShowListMin', result.showData.movies)
        commit('setShowListTime', result.showData.movies)
      }
    })
  }

  // getshowListMin({ commit }){
  //   axios.get('/maoyan/ajax/cinemaDetail?cinemaId=6326'
  //   ).then(res => {
  //     let result = res.data
  //     // console.log(res.data)
  //     if(result){
  //       // console.log(result.cinemaData)
  //       console.log(result.showData.movies)
  //       commit('setShowListMin',result.showData.movies)
  //     }
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
