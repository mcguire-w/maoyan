<template>
  <div>
    <header class="navbar">
      <div class="nav-left">
        <router-link to="/Cinema" class="back">
          <i class="icon-back"></i>
        </router-link>
      </div>
      <h1 class="nav-header">猫眼电影</h1>
    </header>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action= "true"
      shape="round"
      @search="onSearch"
      >
    <router-link to="/Cinema" class="back">
      <div slot="action" @click="onSearch">取消</div>
    </router-link>

    </van-search>
  </div>
</template>

<style lang="less">
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  .nav-left {
    height: 50.5px;
    line-height: 50.5px;
    .back {
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;
      .icon-back{
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
        vertical-align: middle;
        position: relative;
        &::before{
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 16px;
          height: 16px;
          border-bottom: 2px solid #fff;
          border-left: 2px solid #fff;
          // -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }
  .nav-header{
    display: block;
    -webkit-box-flex: 1;
    // -ms-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.van-search{
  background-color:#f5f5f5!important;
  border: 1px solid #e5e5e5;
  .van-search__content{
    background-color:#fff;
  }
  .van-search__action{
    color: #f03d37;
  }
}
</style>