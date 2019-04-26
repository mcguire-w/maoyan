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

    <div class="search-header">
      <div class="input-wrapper">
        <img  class="search-icon" src="../../images/max.png" alt="">
        <input class="search-input" type="text" placeholder="搜影院">
      </div>
      <router-link to="/Cinema">
          <div class="cancel">取消</div>
      </router-link>
    </div>
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
.search-header{
  display: flex;
  align-items: center;
  padding:8px 0 8px 10px;
  background: #f5f5f5;
  border-bottom:1px solid #e5e5e5;
  z-index: 1;
  .input-wrapper{
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background:#fff;
    flex-grow: 1;
    .search-icon{
      display: block;
      width:15px;
      height:15px;
      margin-right: 6px;
      float: left;
      position: relative;
      top: 6px;
    }
    .search-input{
      flex: 1;
      border: none;
      font-size: 13px;
      color: #333;
      line-height: 20px;
      padding: 4px 0;
    }
  }
  .cancel{
    height: 30px;
    line-height: 30px;
    padding:0 10px;
    font-size:16px;
    color: #f03d37;
  }
}
</style>