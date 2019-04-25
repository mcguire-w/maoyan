import axios from 'axios'
import { Toast } from 'vant'

const state = {
  cityList: [],
<<<<<<< HEAD
  curCity: localStorage.getItem('curCity') || '深圳'
=======
  curCity: localStorage.getItem('curCity') || '深圳'// 当前选择的城市
>>>>>>> develop-Ypy
}

const getters = {
  newCityList (state) {
    let index = 0
    let flag = {}
    let result = []
    let list = state.cityList

    list.forEach(item => {
      // 1. 得到当前城市的首字母拼音
      let py = item.pinyin.substr(0, 1).toUpperCase()
      // 2. 判断当前这个城市的拼音是否出现过
      if (flag[py]) {
        // 存在
        result[flag[py] - 1].citys.push(item)
      } else {
        // 不存在
        flag[py] = ++index
        let obj = {
          name: py,
          citys: [item]
        }
        result.push(obj)
      }
    })

    result.sort((a, b) => {
      return a.name.charCodeAt() - b.name.charCodeAt()
    })

    return result
  },

  pys (state, getters) {
    return getters.newCityList.map(item => {
      return item.name
    })
  },

  hotCitys (state, getters) {
    return state.cityList.filter(item => {
      return item.isHot
    })
  }
}

const mutations = {
  setCityList (state, list) {
    state.cityList = list
  },

  chgCurCity (state, city) {
    localStorage.setItem('curCity', city)
    state.curCity = city
  }
}

const actions = {
  getCityList ({ commit }) {
    axios.get('https://m.maizuo.com/gateway?k=2661199', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555472144493921239107"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      let result = res.data
      if (result.status === 0) {
        commit('setCityList', result.data.cities)
      } else {
        Toast(result.msg)
      }
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
