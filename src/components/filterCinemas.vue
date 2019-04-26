<template>
  <div class="nav-wrap filter-nav-wrap">
    <div class="tab mb-line-b">
      <div class="item" :class="{ chosenTitle: chosen === 1 }" @click='curTab(1)'>
        全城
        <span class="drop"></span>
      </div>
      <div class="item" :class="{ chosenTitle: chosen === 2 }" @click='curTab(2)'>
        {{ brandList.name }}
        <span class="drop"></span>
      </div>
      <div class="item" :class="{ chosenTitle: chosen === 3 }" @click='curTab(3)'>
        特色
        <span class="drop"></span>
      </div>
    </div>
    <div class="colose-tab">
      <div class="tab-content">
        <div class="pages special" v-show='chosen === 3'>
          <div class="special-content">
            <div class="item-title">特色功能</div>
            <div class="item-list">
              <div class="item" :class='{ chosen: item.id === itemId1}' @click='tabItem1(item.id)' v-for='item in serviceList.subItems' :key='item.id' :id='item.id'>{{ item.name }}</div>
            </div>
            <div class="item-title">{{ hallTypeList.name }}</div>
            <div class="item-list">
              <div class="item" v-for='item in hallTypeList.subItems' :key='item.id' :id='item.id' :class='{ chosen: item.id === itemId2}' @click='tabItem2(item.id)'>{{ item.name }}</div>
            </div>
          </div>
          <div class="special-btn">
            <span class="btn" id="cancel-btn">重置</span>
            <span class="btn" id="confirm-btn">确定</span>
          </div>
        </div>
        <div class="pages brand" v-show='chosen === 2'>
          <div class="brand-content">
            <div class="item brand-list" :class="{ chosen: item.id === itemId1 }" @click='tabItem1(item.id)' v-for='item in brandList.subItems' :key='item.id' id='item.id' >
              <span class="brand-name">{{ item.name }}</span>
              <span class="brand-count">{{ item.count }}</span>
            </div>
          </div>
        </div>
        <div class="pages region" v-show='chosen === 1'>
          <div class="region-tab">
            <ul class="tab">
              <li class="item" :class='{ chosen: index === 0 }' @click='tab(0)'>商区</li>
              <li class="item" :class='{ chosen: index === 1 }' @click='tab(1)'>地铁站</li>
            </ul>
          </div>
          <div class="region-list">
            <div class="region-sidenav">
              <div class="district" v-show='index === 0'>
                <div class="district-li item" :class="{ chosen: item.id === itemId1 }" @click='tabItem(item.id)' v-for='item in districtList.subItems' :key='item.id' :id='item.id'>{{ item.name + '(' + item.count + ')' }}</div>
              </div>
              <div class="subway" v-show='index === 1'>
                <div class="district-li item" :class="{ chosen: item.id === itemId1 }" @click='tabItem(item.id)' v-for='item in subwayList.subItems' :key='item.id' :id='item.id'>{{ item.name + '(' + item.count + ')' }}</div>
              </div>
            </div>
            <div class="region-list-item">
              <div class="filter-list" v-show="itemId1 != -1">
                <div class="item" v-for='item in showList' :key='item.id' :id='item.id'>
                  <div class='item-name'>{{ item.name }}</div>
                  <div class='item-count'>{{ item.count }}</div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      chosen: 0,
      index: 0,
      itemId1: -1,
      itemId2: -1,
      showList: [],
      result: []
    }
  },
  computed: {
    ...mapState('detail', [
      'brandList',
      'districtList',
      'subwayList',
      'hallTypeList',
      'serviceList',
      'showTypeList',
      'isShow'
    ]),
    ...mapGetters('detail', [

    ])
  },
  methods: {
    curTab (index) {
      if (this.chosen === index) {
        this.chosen = 0
        this.$store.commit('detail/setIsShow', false)
      } else {
        this.chosen = index
        this.itemId1 = -1
        this.itemId2 = -1
        if (index === 1) {
          this.result = this.districtList.subItems
        }
        this.$store.commit('detail/setIsShow', true)
      }
    },
    tabItem1 (id) {
      this.itemId1 = id
    },
    tabItem2 (id) {
      this.itemId2 = id
    },
    tab (index) {
      this.index = index
      this.itemId1 = -1
      if (index === 1) {
        this.result = this.subwayList.subItems
      } else if (index === 0) {
        this.result = this.districtList.subItems
      }
      console.log(this.result)
    },
    tabItem (id) {
      this.itemId1 = id
      this.showList = []
      let list = this.result.filter(item => {
        return item.id === id
      })
      this.showList = list[0].subItems
    },
  },
}
</script>

<style lang="less">
  .nav-wrap.filter-nav-wrap{
    width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
    .mb-line-b{
      background: url("../images/dian.png") 0 bottom repeat-x
    }
    .tab{
      display: flex;
      .item{
        flex: 1;
        text-align: center;
        line-height: 40px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
        .drop{
          display: inline-block;
          position: absolute;
          top: 18px;
          width: 0;
          height: 0;
          margin-left: 4px;
          border: 4px solid transparent;
          border-top-color: #b0b0b0;
        }
        &.chosenTitle {
          color: #e54847;
          .drop{
            border-bottom-color: #f03d37;
            border-top-color: transparent;
            top: 14px;
          }
        }
        &+:before{
          content: "";
          display: block;
          position: absolute;
          height: 20px;
          top: 10px;
          left: 0;
          border-left: 1px solid #e8e8e8;
        }
      }
    }
    .colose-tab{
      position: relative;
      width: 100%;
      background: #fff;
      z-index: 100;
      overflow: scroll;
      .tab-content{
        font-size: 15px;
        .pages{
          position: relative;
          background-color: #fff;
          overflow: auto;
          z-index: 999;
          &.brand{
            min-height: 150px;
            max-height: 352px;
            .brand-content{
            height: 373px;
              .brand-list{
                position: relative;
                line-height: 44px;
                height: 44px;
                padding: 0 15px 0 26px;
                border-bottom: 1px solid #e5e5e5;
                color: #333;
                span{
                  display: inline-block;
                  width: 49%;
                }
                .brand-count{
                  text-align: right;
                  color: #8f9296;
                  font-size: 12px;
                }
                &.chosen{
                  color: #dd403b;
                  >span{
                    color: #dd403b;
                  }
                  &:before{
                    content: "";
                    display: block;
                    position: absolute;
                    left: 8px;
                    top: 18px;
                    width: 11.5px;
                    height: 8px;
                    background-image: url("../images/gou.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }
          &.special{
            min-height: 208px;
            overflow: hidden;
            .special-content{
              min-height: 150px;
              max-height: 270px;
              overflow: scroll;
              .item-title{
                margin-left: 12px;
                margin-top: 11px;
                font-size: 15px;
              }
              .item-list{
                margin: 0 12px 12px;
                .item{
                  float: left;
                  width: 21.3%;
                  height: 30px;
                  padding: 3px 0;
                  margin-right: 3%;
                  margin-top: 10px;
                  line-height: 30px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  text-align: center;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                  font-size: .7rem;
                  &.chosen{
                    background: #fcf0f0;
                    color: #f03d37;
                    border: 1px solid #f03d37;
                  }
                }
                &:after{
                  display: block;
                  clear: both;
                  content: "";
                }
              }
            }
            .special-btn{
              height: 60px;
              width: 100%;
              border-top: 1px solid #e5e5e5;
              margin-top: 10px;
              background: #fafafa;
              .btn{
                display: inline-block;
                height: 34px;
                width: 21.3%;
                margin: 13px 11px;
                border: 1px solid #e5e5e5;
                border-radius: 6px;
                text-align: center;
                line-height: 34px;
                font-size: 14px;
              }
              #confirm-btn{
                float: right;
                background: #f03d37;
                border: 1px solid #f03d37;
                color: #fff;
              }
            }
          }
          &.region{
            .region-tab{
              height: 44px;
              ul{
                padding: 0;
                margin: 0;
                li{
                  position: relative;
                  display: inline-block;
                  padding: 0 10px;
                  width: 50%;
                  height: 100%;
                  line-height: 44px;
                  text-align: center;
                  &.chosen{
                    color: #f03d37;
                    &:after{
                      content: "";
                      position: absolute;
                      display: block;
                      bottom: 0;
                      left: 0;
                      width: 90%;
                      border-top: 2px solid #f03d37;
                    }
                  }
                }
              }
            }
            .region-list{
              background: #f5f5f5;
              height: 380px;
              .item{
                border: 0
              }
              .region-sidenav{
                width: 35%;
                height: 100%;
                float: left;
                overflow: scroll;
                >div{
                  min-height: 100%;
                  background: #fff;
                  .chosen{
                    color: #f03d37;
                    background: #f5f5f5;
                  }
                  .district-li{
                    height: 44px;
                    padding-left: 10px;
                    line-height: 44px;
                    font-size: 14px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  }
                }
              }
              .region-list-item{
                width: 65%;
                height: 100%;
                float: right;
                overflow: scroll;
                .filter-list{
                  background: #f5f5f5;
                  .item{
                    position: relative;
                    height: 45px;
                    line-height: 45px;
                    padding: 0 0 0 25px;
                    &.chosen{
                      color: #f03d37;
                      >span{
                        color: #f03d37;
                      }
                      &:before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 8px;
                        top: 18px;
                        width: 11.5px;
                        height: 8px;
                        background-image: url("../images/gou.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                      }
                    }
                    .item-name{
                      float: left;
                      width: 80%;
                      font-size: 14px;
                      color: #333;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    }
                    .item-count{
                      float: right;
                      width: 20px;
                      margin-right: 10px;
                      color: #8f9296;
                      font-size: 12px;
                      text-align: right;
                    }
                  }
                }
              }
              .clearfix{
                clear: both;
                &:after{
                  content: " ";
                  display: table;
                  clear: both;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
