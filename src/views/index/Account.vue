<template>
  <div>
    <div class="user-head">
      <img
        id="user-poster"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1075331473,1668410789&fm=26&gp=0.jpg"
      >
    </div>
    <div class="group">
      <div class="orders">
        <div class="title">我的订单</div>
        <div class="mb-outline-b"></div>
        <div class="list-one">
          <div class="order-item">
            <p>电影</p>
          </div>
          <div class="order-item buyiyang">
            <p>商城</p>
          </div>
        </div>
      </div>
    </div>

    <van-cell-group id="cell-padd">
      <van-cell title="在线观影" is-link/>
      <van-cell title="优惠券" is-link/>
      <van-cell title="折扣卡" is-link/>
    </van-cell-group>
  </div>
</template>

<style lang="less">
body {
  background: #f1efef;
}
.group {
  margin-top: 10px;
  background: #fff;
  .orders {
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    text-align: center;
    .title {
      position: relative;
      margin: 13px 0 0;
      font-size: 15px;
      line-height: 21px;
      height: 21px;
      color: #333;
      z-index: 9;
      display: inline-block;
      width: 80px;
      background-color: #fff;
    }
    .mb-outline-b {
      position: absolute;
      top: 23px;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      height: 1px;
      background-color: #dad3d3;
    }
    .list-one {
      overflow: hidden;
      .order-item {
        width: 50%;
        float: left;
        height: 97px;
        background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
        background-repeat: no-repeat;
        background-position: top;
        background-size: 42px auto;
        margin-top: 18px;
        p {
          position: relative;
          top: 53px;
          text-align: center;
          font-size: 15px;
          line-height: 21px;
          height: 21px;
          margin: 0;
          color: #333;
        }
      }
      .buyiyang {
        background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
      }
    }
  }
}

#cell-padd{
  margin-top:10px;
}

.user {
  &-head {
    width: 100%;
    height: 150px;
    display: block;
    text-align: center;
    background-color: #f03d37;
    background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 150px;
    #user-poster {
      display: inline-block;
      margin-top: 30px;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      border: 3px solid #fff;
    }
  }
}
</style>
