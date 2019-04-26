<template>
  <div class="main">
    <header class="navbar">
      <a href="javascript:;" class="back">
        <i class="iconfont"></i>
      </a>
      <h1 class="nav-header">
        {{ title }}
      </h1>
    </header>

    <router-view></router-view>

     <van-tabbar
      v-model="active"
      active-color="#f03d37">
      <van-tabbar-item class="iconfont icon-dianying" :to="{ name: 'movie', params: { movieType: '.n-hot' } }" @click="title = '猫眼电影'">电影</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-huaban" :to="{ name: 'cinema' }" @click="title = '影院'">影院</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-wode" :to="{ name: 'account' }" @click="title = '我的'">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    let active = this.$route.meta.tabNumber
    return {
      active: active,
      title: '猫眼电影',
      ok: false
    }
  }
}
</script>

<style lang="less">
  .main{
    .navbar{
      width: 100%;
      height: 50.5px;
      position: fixed;
      top: 0;
      color: #fff;
      display:flex;
      align-items: center;
      background: #e54847;
      border-bottom: 1px solid #e54847;
      z-index: 3;
      .back{
        width: 22.5px;
        height: 50px;
        padding: 0 15px;
        color: #fff;
      }
      .nav-header{
        flex: 1;
        display: flex;
        justify-content: center;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
</style>
