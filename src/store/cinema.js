import axios from 'axios'
import { Toast } from 'vant'

const state = {
  cinemaList: []
}

const mutations = {
  setCinemaList(state,list) {
    state.cinemaList = list
  }
}

const actions = {
  getCinemaList({ commit }){
     console.log(11)
    Toast.loading({
      // loadingType:'circular',
      // duration:0
    }),
    axios.get('/maoyan/ajax/cinemaList?day=2019-04-23&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1555991270502&cityId=30'
    ).then(res => {
      let result = res.data
      // console.log(result)
      if(result) {
        commit('setCinemaList',result.cinemas)
      } else {
        Toast(result.msg);
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}