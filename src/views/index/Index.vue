<template>
  <div class="main">
    <router-view></router-view>

     <van-tabbar
      v-model="active"
      active-color="#f03d37">
      <van-tabbar-item class="iconfont icon-dianying" :to="{ name: 'movie', params: { movieType: '.n-hot' } }">电影</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-huaban" :to="{ name: 'cinema' }">影院</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-wode" :to="{ name: 'account' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
   data () {
    let active = this.$route.meta.tabNumber
    return {
      active: active
    }
  }
}
</script>

