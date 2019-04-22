<template>
  <div class="movie">
    <div class="curTab">
      <router-link to='/city' class="city">
        <span class="city-name">城市</span>
        <span class="city-entry-arrow"></span>
      </router-link>
      <div class="host">
        <div class="host-item" :class="{active: isActive}" @click="onCurTab('.n-hot')">正在热映</div>
        <div class="host-item" :class="{active: isOk}" @click="onCurTab('.f-hot')">即将上映</div>
      </div>
      <router-link to="/seach" class="search">
      <i class="iconfont icon-fangdajing"></i>
      </router-link>
    </div>
    <Nhot v-if="isActive" />
    <Fhot v-if="isOk" />
  </div>
</template>

<script>
import Nhot from '@/components/n-hot.vue'
import Fhot from '@/components/f-hot.vue'
export default {
  components: {
    Nhot,
    Fhot
  },
  data () {
    let bol = this.$route.params.movieType === '.n-hot' ? true : false;
    return {
      isActive: bol,
      isOk: !bol
    }
  },
  methods: {
    onCurTab (movieType) {
      if( movieType === '.n-hot' ){
        this.isActive = true
        this.isOk = false
      } else {
        this.isActive = false
        this.isOk = true
      }
      this.$router.replace({
        name: 'movie',
        params: {
          movieType
        }
      })
    }
  }
}
</script>

<style lang="less">
  .movie{
    .curTab{
      position: fixed;
      top: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      width: 100%;
      border-bottom: 0.5px solid #ddd;
      background-color: #fff;
      color: #777;
      z-index: 3;
      .city{
        padding-left: 15px;
        font-size: 16px;
        color: #666;
        display: flex;
        align-items: center;
        .city-entry-arrow{
          margin-right: 5px;
          width: 0;
          height: 0;
          border: 4px solid #b0b0b0;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
          display: inline-block;
          margin-left: 4px;
          margin-top: 5px;
        }
      }
      .host{
        flex: 1;
        display: flex;
        justify-content: center;
        .host-item{
          padding: 0 12px;
          width: 80px;
          color: #666;
          height: 44px;
          line-height: 44px;
          text-align: center;
          font-weight: 700
        }
        .active{
          position: relative;
          color: #ef4238;
        }
        .active:after{
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 80px;
          height: 2px;
          background-color: #ef4238;
        }
      }
      .search{
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px 10px 10px;
        font-weight: bold;
        color: #e54847;
      }
    }
  }
</style>
