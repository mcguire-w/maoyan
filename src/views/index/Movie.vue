<template>
  <div class="movie">
    <div class="curTab">
      <router-link to='/city' class="city">
        <span class="city-name">城市</span>
        <span class="city-entry-arrow"></span>
      </router-link>
      <div class="host">
        <div class="host item" :class="{active: isactive}">正在热映</div>
        <div class="host item">即将上映</div>
      </div>
      <router-link to="/seach" class="search">
      <i class="iconfont icon-fangdajing"></i>
      </router-link>
    </div>
  </div>
</template>

<style lang="less">
  .movie{
    .curTab{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      width: 100%;
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
      }
      .search{
        width: 20px;
        height: 20px;
        color: #e54847;
      }
    }
  }
</style>

