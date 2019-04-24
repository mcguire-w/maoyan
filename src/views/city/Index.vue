<template>
  <div class="hot-city" ref="hot-city">
    <div class="city-hh" id="point-1">定位城市</div>
    <div class="city-jj">
      <div class="city-jj_1">定位失败，请点击重试</div>
    </div>
    <div class="city-hh" id="point-2">最近访问城市</div>
    <div>
      <li class="city-address">
        <div
          class="city-address-text"
          v-for="city in hotCitys"
          :key="city.cityId"
          @click="fn_2(city.name)"
        >{{ city.name }}</div>
      </li>
    </div>
    <div class="city-hh" id="point-3">热门城市</div>
    <div class="city-kk">
      <li class="city-address">
        <div
          class="city-address-text"
          v-for="city in hotCitys"
          :key="city.cityId"
          @click="fn_2(city.name)"
        >{{ city.name }}</div>
      </li>
    </div>
    <li
      class="address"
      v-for="item in newCityList"
      :key="item.name"
      :id="'box-' + item.name"
      :ref="'box-' + item.name"
    >
      <p class="address__index">{{ item.name }}</p>
      <div class="index-l">
        <li
          class="index-2"
          v-for="city in item.citys"
          :key="city.cityId"
          @click="fn_2 (city.name)"
        >{{ city.name }}</li>
      </div>
    </li>
    <div class="address__nav">
      <ul class="qwer">
        <a href="#point-1">定位</a >
        <a href="#point-2">最近</a >
        <a href="#point-3">热门</a >
        <li v-for="py in pys" :key="py" @click="fn_1(py)" class="asdf">{{ py }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "city",
  computed: {
    ...mapState("city", ["cityList"]),

    ...mapGetters("city", ["newCityList", "pys", "hotCitys"])
  },

  methods: {
    ...mapActions("city", ["getCityList"]),

    ...mapMutations("city", ["chgCurCity"]),

    fn_1 (py) {
      // console.log(document.getElementsByClassName('hot-city')[0].offsetTop)

      let boxEl = this.$refs["box-" + py][0]
      let top = boxEl.offsetTop
      // console.log(top)
      // console.log(this.$refs["hot-city"]);
      // console.log(document.getElementsByClassName('hot-city')[0].offsetTop)
      console.log(this.$refs["hot-city"])

      this.$refs["hot-city"].scrollTop = top - 14

      // console.log(document.documentElement.scrollTop);

      console.log(top)
    },

    fn_2 (city) {
      this.chgCurCity(city)
      this.$router.back()
    }
  },

  created () {
    this.getCityList()
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
  color:#333;
}

ul,
li {
  list-style: none;
}

.hot-city {
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 93%;
  position: relative;
  z-index: 1000;
  overflow-y: auto;
  padding-right: 10%;

  .city-hh {
    padding-left: 15px;
    line-height: 30px;
  }

  .city-jj {
    background-color: #f5f5f5;
    width: 95%;
    padding-bottom: 8px;
    padding-right: 30px;
    overflow: hidden;

    .city-jj_1 {
      width: auto;
      min-width: 30%;
      padding: 0 20px;
      float: left;
      background: #fff;
      width: 50%;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .city-address {
    background-color: #f5f5f5;
    width: 95%;
    padding-bottom: 8px;
    padding-right: 30px;
    overflow: hidden;
    position: relative;

    .city-address-text {
      width: 95%;
      float: left;
      min-width: 10%;
      padding: 0 20px;
      float: left;
      background: #ffffff;
      width: 29%;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .address {
    line-height: 10px;

    .address__index {
      padding-left: 25px;
    }

    .index-l {
      background-color: #f5f5f5 !important;
      padding-right: 10%;
      min-height: 43px;
      width: 93%;
      .index-2 {
        height: 44px;
        line-height: 44px;
        margin-left: 15px;
        border-bottom: 1px solid #c8c7cc;
      }
    }
  }
  .address__nav {
    position: fixed;
    top: 75px;
    top: 11vh;
    right: 0;
    width: 50px;
    z-index: 10;
    text-align: center;
    font-size: 12px;
    color: #333;

    .qwer {
      width: 24px;
      margin-left: 15px;

      li {
        position: flex;
        flex-direction: row;
      }

      .asdf {
        height: 3vh;
      }
    }
  }
}
</style>
