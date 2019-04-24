<template>
  <div>
    <section class="topBar">
      <div class="gray-bg topbar-bg">
        <div class="city-entry">
          <span class="city-name">深圳</span>
          <i class="city-entry-arrow"></i>
        </div>
        <div class="search-entry search-input">
          <img src="../../images/max.png" alt>
          <span>搜影院</span>
        </div>
      </div>
    </section>
    <div class="nav-wrap">
      <div class="tab mb-line-b">
        <div class="item">
          全城
          <span class="drop"></span>
        </div>
        <div class="item">
          品牌
          <span class="drop"></span>
        </div>
        <div class="item">
          特色
          <span class="drop"></span>
        </div>
      </div>
    </div>
    <section class="page">
      <div class="page-wrap">
        <div class="cinema-list">
          <div class="list-wrap">
            <div v-for="item in cinemaList" :key="item.Id" class="item mb-line-b">
              <div class="title-block box-flex middle">
                <div class="title line-ellipsis">
                  <span>{{item.nm}}</span>
                  <span class="price-block">
                    <span class="price">{{item.sellPrice}}</span>
                    <span class="p">元起</span>
                  </span>
                </div>
                <div class="box-flex">
                  <div class="flex line-ellipsis">{{item.addr}}</div>
                  <div class="distance">{{item.distance}}</div>
                </div>
                <div class="label-block">
                  <div class="endorse" v-if="item.tag.endorse">改签</div>
                  <div class="snack" v-if="item.tag.snack === 1">小吃</div>
                  <div class="vipTag" v-if="item.tag.vipTag">折扣卡</div>
                </div>
                <div class="discount-block">
                  <div class="discount-label normal card">
                    <img src="../../images/img.png" alt="">
                  </div>
                  <div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapState("cinema", ["cinemaList"])
  },

  methods: {
    ...mapActions("cinema", ["getCinemaList"])
  },

  created() {
    this.getCinemaList();
  }
};
</script>

<style lang="less">
.topBar {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  margin-top: 51px;
  .gray-bg {
    background: #f5f5f5;
  }
  .topbar-bg {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .city-entry {
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
      }
      .city-entry-arrow {
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
    .search-input {
      -webkit-box-flex: 1;
      flex-grow: 1;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 28px;
      font-size: 13px;
      color: #b2b2b2;
      margin-left: 18px;
      border: 0.5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: 15px;
      background-color: #fff;
      img {
        width: 14px;
        height: 14px;
        margin-left: 3px;
        margin-right: 4px;
        display: block;
      }
    }
  }
}
.page {
  height: 583px;
  width: 100%;
  display: block;
  position: absolute;
  overflow: hidden;
  font-size: 14px;
  color: #777;
  .page-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    //影院数据
    .cinema-list {
      margin-bottom: 55px;
      // margin-top:40px;
      background: #fff;
      // position:absolute;
      .list-wrap {
        min-height: 627px;
        margin-top: 0;
        background-color: #fff;
        margin-right: 18px;
        .item {
          padding: 13px 15px 13px 0;
          margin-left: 15px;
          position: relative;
          overflow: hidden;
          .middle {
            -webkit-box-align: center;
            align-items: center;
            display: block;
            .title {
              height: 23px;
              line-height: 23px;
              font-size: 16px;
              color: #000;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              .price-block {
                padding-top: 9px;
                padding-left: 3px;
                .price {
                  font-size: 18px;
                  color: #f03d37;
                  line-height: 1.5;
                }
                .p {
                  margin-left: 3px;
                  font-size: 12px;
                  color: #f03d37;
                }
              }
            }
            .box-flex {
              margin-top: 6px;
              font-size: 13px;
              color: #666;
              display: flex;
              .flex {
                flex: 1;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .distance {
                margin-left: 5px;
              }
            }
            .label-block {
              // height: 17px;
              line-height: 17px;
              margin: 4px 0 4px 0;
              // overflow: hidden;
              // font-size:0;
              flex-shrink: 0;
              .endorse {
                color: #589daf;
                border: 1px solid #589daf;
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                font-size: 0.6rem;
              }
              .snack {
                color: #f90;
                border: 1px solid #f90;
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                font-size: 0.6rem;
                margin-left: 5px;
              }
              .vipTag {
                color: #f90;
                border: 1px solid #f90;
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                font-size: 0.6rem;
                margin-left: 5px;
              }
            }
            .discount-block {
              color: #999;
              margin-bottom: 4px;
              .discount-label {
                width: 15px;
                height: 14px;
                position: relative;
                top: 3px;
                display: inline-flex;
                img {
                  width: 100%;
                }
              }
              .discount-label-text {
                margin-left: 0;
                display: inline-block;
                font-size: 11px;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
//全城 导航
.nav-wrap {
  // width:100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
  position: relative;
  padding-right: 18px;
  color:#777;
  .tab {
    display: flex;
    .item {
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      text-overflow: ellipsis;
      &::before {
        content: "";
        display: block;
        position: absolute;
        height: 20px;
        top: 10px;
        left: 0;
        border-left: 1px solid #e8e8e8;
      }
      .drop {
        display: inline-block;
        position: absolute;
        top: 18px;
        width: 0;
        height: 0;
        margin-left: 4px;
        border: 4px solid transparent;
        border-top-color: #b0b0b0;
      }
    }
  }
  .mb-line-b {
    background: url(../../images/dian.png) 0 bottom repeat-x;
  }
}
</style>