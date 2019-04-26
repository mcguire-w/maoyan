<template>
  <div>
    <header class="navbar">
      <div class="nav-left">
        <router-link to="/Cinema" class="back">
          <i class="icon-back"></i>
        </router-link>
      </div>
      <h1 class="nav-header">中影德金影城和平店</h1>
    </header>
    <div class="body-wrap">
      <div class="cinema-block">
        <!-- 影院地址 -->
        <div class="cinema-info">
          <div class="title line-ellipsis">{{showList.nm}}</div>
          <div class="location line-ellipsis">{{showList.addr}}</div>
          <div class="location-icon">
            <img src="../../images/map.png" alt="">
          </div>
        </div>
        <div>
          <!-- 轮播 -->
          <div class="cinema-nav swiper-container swiper-container-horizontal">
            <div class="post-bg"></div>
            <div class="post-bg-filter"></div>
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-active">
                <div class="post">
                  <img src="../../images/manwei.jpg" alt>
                </div>
              </div>
            </div>
          </div>
          <!-- 影片介绍 -->
          <div class="movie-info">
            <div class="movie-title line-ellipsis">
              <span class="title">{{showListMin[0]&&showListMin[0].nm}}</span>
              <span class="grade">
                <span>
                  {{showListMin[0]&&showListMin[0].sc}}
                  <span class="small">分</span>
                </span>
              </span>
            </div>
            <div class="movive-desc line-ellipsis"> {{showListMin[0]&&showListMin[0].desc}}</div>
          </div>
        </div>
        <!-- 星期几 -->
        <div class="nav-bar">
          <div class="nav-block">
            <div v-for="item in 5" :key="item.Id"  class="nav-item active">
              <span> 今天4月26日</span>
            </div>
          </div>
        </div>
        <!-- 电影场次 -->
        <div class="seat-wrap">
          <!-- 折扣 -->
          <div class="discount-block">
            <div class="vip-tips">
              <router-link to class="a">
                <div class="label">折扣卡</div>
                <div class="label-text line-ellipsis">购票享低价，首单2张立减4元</div>
                <div class="process">9.9元开卡</div>
              </router-link>
            </div>
          </div>
          <!-- 每日电影场次 -->
          <div v-for="item in 10" :key="item" class="seat-inner-wrap">
            <div class="item-outer-d mb-line-b">
              <div class="box-flex">
                <!-- 影院播放时间 -->
                <div class="time-block">
                  <div class="begin">09:30</div>
                  <div class="end">
                   12:30
                    <span class="tui">散场</span>
                  </div>
                </div>
                <!-- 影厅 -->
                <div class="info-block">
                  <div class="lan">英语 3D</div>
                  <div class="hall">1号厅</div>
                </div>
                <!-- 优惠卡 -->
                <div class="price">
                  <div class="sellPr">
                    <span class="d">¥</span>
                    <span>
                      <span class="stonefont">45</span>
                    </span>
                  </div>
                  <div class="vipPrice">
                    <span class="icon">折扣卡</span>
                    <span class="num">¥ 40</span>
                  </div>
                  <div class="extrDesc">折扣卡首单特惠</div>
                </div>
                <!-- 购票 -->
                <div class="button-block">
                  <div class="button">购票</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 影院超值小吃，难吃的要死 -->
        <div class="tuan-wrap">
          <!-- 空白 -->
          <div class="gap"></div>
          <div class="tuan-list">
            <div class="tuan-title mb-line-b">影院超值套餐</div>
            <!-- 小吃数据 -->
            <div v-for="item in 10" :key="item" class="tuan-item mb-line-b">
              <img src="../../images/kele.jpg" alt="">
              <span class="hot-tag">HOT</span>
              <!-- 单人还是情侣，买吃的就知道了 -->
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                  46oz爆米花1桶+22oz可乐2杯
                </div>
                <!-- 售出多少 -->
                <div class="sell-num">已售169</div>
                <!-- 价格 -->
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">37.5</span>
                  </span>
                </div>
                <!-- 购买 -->
                <div class="buy-btn">去购买</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState('shows',[
      'showList',
      'showListMin',
      'showListTime'
    ])
  },
  methods: {
    ...mapActions('shows',[
      'getShowList',
      // 'getshowListMin'
    ])
  },
  created() {
    this.getShowList()
    // this.getshowListMin()
  }
}
</script>

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
      .icon-back {
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
        vertical-align: middle;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 16px;
          height: 16px;
          border-bottom: 2px solid #fff;
          border-left: 2px solid #fff;
          transform: rotate(45deg);
        }
      }
    }
  }
  .nav-header {
    display: block;
    -webkit-box-flex: 1;
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
//
.body-wrap {
  margin-bottom: 25px;
  font-size: 14px;
  color: #777;
  .cinema-block {
    background-color: #fff;
    .cinema-info {
      position: relative;
      padding: 15px 100px 15px 15px;
      .title {
        font-size: 17px;
        line-height: 24px;
        font-weight: 700;
        color: #333;
      }
      .location {
        margin-top: 2px;
        font-size: 13px;
        line-height: 18.5px;
        color: #999;
      }
    }
    // 地址
    .location-icon {
      position: absolute;
      right: 0;
      top: 50%;
      width: 70px;
      height: 31px;
      transform: translateY(-50%);
      border-left: 1px solid #d8d8d8;
      text-align: center;
      img {
        display: inline-block;
        width: 19px;
        height: 22px;
        margin-top: 5px;
      }
    }
    .cinema-nav {
      padding: 20px 25px 20px 5px;
      transform: translateZ(0);
      .post-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
        filter: blur(30px);
        background-position-y: 40%;
      }
      .post-bg-filter {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #40454d;
        opacity: 0.55;
      }
      .swiper-wrapper {
        transform: translate3d(140px, 0px, 0px);
        transition-duration: 0ms;
        z-index: 1;
        display: flex;
        transition-property: transform, -webkit-transform;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        position: relative;
        .swiper-slide {
          width: 65px;
          height: 95px;
          position: relative;
          padding-right: 5px;
          .post {
            width: 65px;
            transform: scale(1.15);
            border: 2px solid #fff;
            transition: transform 3s;
            position: relative;
            img {
              width: 100%;
              height: 95px;
              transform: scale(1);
              display: block;
            }
            &::after {
              content: "";
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%);
              width: 10px;
              height: 5px;
              background: url(../../images/xiaosanjiao.png);
              background-size: contain;
            }
          }
        }
        .swiper-slide-active:first-child {
          margin-left: 15px;
        }
      }
    }
    .swiper-container {
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
  }
  // 轮播图
  .movie-info {
    padding: 11px 15px;
    text-align: center;
    border-bottom: 1px solid #e9e9e9;
    .movie-title {
      height: 24px;
      line-height: 24px;
      font-size: 17px;
      color: #333;
      font-weight: 700;
      .grade {
        color: #ffb400;
        font-size: 16px;
        .small {
          font-size: 10px;
        }
      }
    }
    .movive-desc {
      margin-top: 2px;
      height: 18.5px;
      line-height: 18.5px;
      font-size: 13px;
      color: #999;
    }
  }
  // 日期时间
  .nav-bar {
    position: relative;
    height: 45px;
    overflow: hidden;
    white-space: nowrap;
    .nav-block {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -20px;
      padding-bottom: 20px;
      overflow: auto;
      .nav-item {
        display: inline-block;
        line-height: 45px;
        height: 45px;
        text-align: center;
        font-size: 14px;
        margin: 0 15px;
        &::after {
          content: "";
          position: absolute;
          width: 110%;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: #f03d37;
        }
      }
      .active {
        color: #f03d37;
        position: relative;
      }
    }
  }
  // 电影场次
  .seat-wrap {
    background: #fff;
    // 折扣
    .discount-block {
      padding-top: 1px;
      // 折扣
      .vip-tips {
        background-color: #fff5ea;
        margin-top: -1px;
        padding: 0 15px;
        height: 42px;
        line-height: 42px;
        .a {
          display: flex;
          color: #777;
        }
        .label {
          flex: 0 0 auto;
          display: inline-block;
          background-color: #ff941a;
          border-radius: 2px;
          font-size: 10px;
          line-height: 15px;
          height: 15px;
          width: 34px;
          text-align: center;
          color: #fff;
          margin-top: 13px;
          margin-right: 10px;
        }
        .label-text {
          color: #ff941a;
          font-size: 12px;
          flex: 1 1 auto;
        }
        .process {
          flex: 0 0 auto;
          line-height: 42px;
          color: #999;
          font-size:12px;
          &::after {
            display: inline-block;
            content: "";
            width: 7px;
            height: 7px;
            border-left: 1px solid #ccc;
            border-top: 1px solid #ccc;
            transform: rotate(135deg);
          }
        }
      }
    }
    // 每日电影场次
    .seat-inner-wrap {
      min-height: 40px;
      position: relative;
      .item-outer-d {
        padding: 17px 0;
        margin-left: 12.5px;
        .box-flex {
          padding-right: 12.5px;
          display: flex;
          // 影院播放时间
          .time-block {
            position: relative;
            .begin {
              font-size: 20px;
              color: #333;
              line-height: 1;
              white-space: nowrap;
            }
            .end{
              margin-top:10px;
              color:#999;
              font-size:11px;
              line-height:1;
              white-space: nowrap;
              .tui{
                margin-left:4px;
                display:inline-block;
                transform: translateY(-.5px)
              }
            }
          }
          // 影厅
          .info-block{
            margin-left:17px;
            flex:1;
            overflow-x:hidden;
            .lan{
              margin-top:2px;
              line-height:18px;
              font-size:13px;
              color:#333;
              white-space: normal;
            }
            .hall{
              margin-top:7px;
              font-size:11px;
              color:#999;
              white-space: normal;
            }
          }
          // 优惠卡
          .price{
            flex: 0 1 auto;
            width:130px;
            margin-left:5px;
            .sellPr{
              display: inline-block;
              line-height: 1;
              color:#f03d37;
              margin-top:1px;
              font-size:19px;
              .d{
                font-size:11px;
              }
              .stonefont{
                font-family: 'stonefont';

              }
            }
            .vipPrice{
              display:inline-block;
              line-height: 15px;
              height:15px;
              transform: scale(.8);
              transform-origin: left;
              margin-right:-16px;
              border: 1px solid #ff9000;
              border-radius:2px;
              font-size:12px;
              .icon{
                display: inline-block;
                padding:0 2px;
                color:#fff;
                background:#f90;
              }
              .num{
                color:#f90;
                background-color:#fff;
                display: inline-block;
                padding: 0 2px;
              }
            }
            .extrDesc{
              margin-top:5px;
              display: block;
              font-size:11px;
              color:#999;
            }
          }
          // 购票
          .button-block{
            width:45px;
            margin-left:2px;
            position: relative;
            .button{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width:100%;
              height: 27px;
              line-height: 28px;
              font-size:12px;
              color:#fff;
              background-color:#f03d37;
              border-radius: 4px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  // 影院超值小吃，贵的要死，还难吃
  .tuan-wrap{
    background-color:#fff;
    .gap{
      height:10px;
      background-color:#f0f0f0;
    }
    .tuan-list{
      position: relative;
      margin-left: 15px;
      .tuan-title{
        height:45px;
        line-height:45px;
        font-size:15px;
        color:#666;
      }
      // 小吃数据
      .tuan-item{
        cursor: pointer;
        position: relative;
        width:100%;
        padding:13px 0;
        overflow: hidden;
        img{
          float: left;
          display: inline-block;
          width:92px;
          height:92px;
        }
        // 热卖
        .hot-tag{
          position:absolute;
          left:0;
          top:13px;
          display: inline-block;
          height: 18px;
          line-height: 18px;
          font-size:12px;
          color: #fff;
          padding:0 5px;
          background-color:#fa5939;
          border-bottom-right-radius:2px;
        }
        .item-info{
          position: relative;
          margin: 0 15px 0 102px;
          height:92px;
          overflow: hidden;
          // 情侣还是单人 买吃的就知道了
          .title{
            font-size:14px;
            line-height: 18px;
            color: #333;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
              font-size:10px;
              height:15px;
              line-height: 15px;
              color:#fff;
              display: inline-block;
              margin: 1px 7px 0 0;
              padding:0 4px;
              vertical-align: top;
              background:#f90;
              border-radius:2px;
            }
          }
          .sell-num{
            display: inline-block;
            position: absolute;
            bottom: 34px;
            right: 0;
            line-height: 16px;
            height: 16px;
            font-size: 12px;
            color: #999;
          }
          .price{
            position:absolute;
            bottom:0;
            left:0;
            .sell-price{
              color: #f03d37;
              display: inline-block;
              span{
                font-size:14;
              }
              .num{
                font-size:17px;
              }
            }
          }
          // 购买
          .buy-btn{
            position: absolute;
            right: 0;
            bottom: 0;
            display: inline-block;
            padding: 0 8px;
            height: 27px;
            line-height: 27px;
            font-size: 12px;
            border-radius: 3px;
            color: #fff;
            background-color: #f03d37;
          }
        }
      }
    }
  }
}

// 公共
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.mb-line-b {
  background: url(../../images/dou.png) 0 bottom repeat-x;
  background-size: 1px 1px;
}
</style>
