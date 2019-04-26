import axios from 'axios'
import { Toast } from 'vant'

const state = {
  day: '',
  movieData: [],
  showDayList: [],
  snum: '',
  isShow: false,

  brandList: [],
  districtList: [],
  subwayList: [],
  hallTypeList: [],
  serviceList: [],
  showTypeList: [],
  timeRanges: []
}
const getters = {
  newDayList (state) {
    let result = []
    let day = ''
    let list = state.showDayList
    let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    list.forEach ((item, index) => {
      if (index === 0) {
        day = '今天'
      } else if (index === 1) {
        day = '明天'
      } else if (index === 2) {
        day = '后天'
      } else {
        let _index = new Date(item.date).getDay()
        day = week[_index]
      }
      day += item.date.split('-').slice(1, 3).join('月') + '日'
      result.push(day)
    })
    return result
  }
}

const mutations = {
  setMovieData (state, data) {
    state.movieData = data
  },
  setNewMovieData (state, imgSize) {
    state.movieData.img = state.movieData.img.replace('w.h', imgSize)
    let num = state.movieData.snum - 0
    let snum = (parseFloat(num) / 10000).toFixed(1)
    state.snum = snum
  },
  setShowDayList (state, list) {
    state.showDayList = list
  },
  setDay (state, day) {
    let arr = day.split('/')
    if (parseInt(arr[1] / 10) === 0) {
      arr[1] = '0' + arr[1]
    }
    state.day = arr.join('-')
  },
  setIsShow (state, value) {
    state.isShow = value
  },

  setBrandList (state, list) {
    state.brandList = list
  },
  setDistrictList (state, list) {
    state.districtList = list
  },
  setSubwayList (state, list) {
    state.subwayList = list
  },
  setHallTypeList (state, list) {
    state.hallTypeList = list
  },
  setServiceList (state, list) {
    state.serviceList = list
  },
  setShowTypeList (state, list) {
    state.showTypeList = list
  }
}

const actions = {
  getMovieData ({ commit, state }, movieId) {
    axios.get('/maoyan/ajax/detailmovie', {
      params: {
        movieId: movieId
      }
    }).then (res => {
      let result = res.data
      if (result) {
        commit('setMovieData', result.detailMovie)
        commit('setNewMovieData', '148.208')
      } else {
        Toast(result.msg)
      }
      Toast.clear()
    })
  },
  getShowDay ({ commit, state }, movieId) {
    commit('setDay', new Date().toLocaleDateString())
    axios.post('/maoyan/ajax/movie?forceUpdate=' + new Date().getTime(), {
      'movieId': movieId,
      'day': state.day,
      'updateShowDay': true,
      'cityId': 30
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      /**
       * 请求发送出去之前，将请求的参数做一个处理。return 的值，才是真正给服务器发过去的参数
       * @param {Object} data
       */
      transformRequest: (data) => {
        let tmp = []
        for (let key in data) {
          tmp.push(key + '=' + data[key])
        }
        return tmp.join('&')
      }
    }).then (res => {
      let result = res.data
      if (result) {
        commit('setShowDayList', result.showDays.dates)
        commit('setDay', result.day)
      } else {
        Toast(result.msg)
      }
      Toast.clear()
    })
  },
  getFilterCinemas ({ commit, state }, movieId) {
    axios.get('/maoyan/ajax/filterCinemas', {
      params: {
        'movieId': movieId,
        'day': state.day
      }
    }).then (res => {
      let result = res.data
      if (result) {
        console.log(result)
        commit('setBrandList', result.brand)
        commit('setDistrictList', result.district)
        commit('setSubwayList', result.subway)
        commit('setHallTypeList', result.hallType)
        commit('setServiceList', result.service)
        commit('setShowTypeList', result.showType)
      } else {
        Toast(result.msg)
      }
      Toast.clear()
    })
  },
  getCityCinemas ({ commit, state }) {
    axios.get('/maoyan/ajax/filterCinemas', {
      params: {
        'ci': 30
      }
    }) .then (res => {
      let result = res.data
      if (result) {
        commit('setBrandList', result.brand)
        commit('setDistrictList', result.district)
        commit('setSubwayList', result.subway)
        commit('setHallTypeList', result.hallType)
        commit('setServiceList', result.service)
        commit('setShowTypeList', result.showType)
      } else {
        Toast(result.msg)
      }
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
