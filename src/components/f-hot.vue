<template>
  <div class="tab-content">
    <div class="f-hot">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <div class="list-wrap">
        <div class="most-expected">
          <p class="title">近期受期待</p>
          <div class="most-expected-list">
            <div class="expected-item" v-for="item in movieBannerList" :key='item.id' :id='item.id'>
              <div class="poster img-bg">
                <img :src="item.img" alt="">
                <span class="wish-bg"></span>
                <span class="wish">
                  <span class="wish-num">{{ item.wish }}</span>
                  人想看
                </span>
                <div class="toggle-wish">
                  <span></span>
                </div>
              </div>
              <h5 class="name line-ellipsis">{{ item.nm }}</h5>
              <p class="date">{{ item.comingTitle }}</p>
            </div>
          </div>
        </div>
        <div class="coming-list">
          <div v-for='movie in newMovieList' :key='movie.date'>
            <p class="group-date">{{ movie.date }}</p>
            <div class="item" v-for='item in movie.movieList' :key='item.id' :id='item.id'>
              <div class="main-block">
                <div class="avatar">
                  <div class="img-bg">
                    <img :src="item.img" alt="">
                  </div>
                </div>
                <div class="content-wrap">
                  <div class="column content">
                    <div class="movie-title">
                      <div class="title line-ellipsis">{{ item.nm }}</div>
                      <span class="version" :class="item.version"></span>
                    </div>
                    <div class="detail">
                      <div class="wantsee line-ellipsis">
                        <span class="person">{{ item.wish }}</span>
                        <span class="p-suffix">人想看</span>
                      </div>
                      <div class="actor line-ellipsis">主演: {{ item.wish }}</div>
                      <div class="show-info line-ellipsis">{{ item.showInfo }}</div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="btn" :class="{ pre: item.showst === 4}">
                      <span class="fix">{{ isShow(item.showst) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </van-list>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      flag: true
    }
  },
  computed: {
    ...mapState('movie', [
      'movieBannerList',
      'movieList'
    ]),
    ...mapGetters('movie', [
      'finished',
      'newMovieList'
    ]),
    loading: {
      get () {
        return this.$store.state.movie.loading
      },
      set (value) {
        this.$store.commit('movie/setLoading', value)
      }
    }
  },
  methods: {
    ...mapActions('movie', [
      'getMovieBannerList',
      'getFmovieList',
      'getFpageMovieList'
    ]),

    isShow (show) {
      return show === 4 ? '预售' : '想看'
    },
    onLoad () {
      if (this.flag === true) {
        this.getFmovieList()
        this.flag = false
      } else {
        this.getFpageMovieList()
      }
    }
  },
  created () {
    this.getMovieBannerList()
  }
}
</script>

<style lang="less">
  .tab-content{
    display: block;
    padding: 95px 0 50px;
    .list-wrap{
      background-color: #f5f5f5;
      .coming-list{
        background-color: #fff;
        .group-date{
          padding: 12px 15px 0;
          margin: 0;
          font-size: 14px;
          color: #333;
        }
      }
      .line-ellipsis{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .most-expected{
        padding: 12px 0 12px 15px;
        background-color: #fff;
        margin-bottom: 10px;
        .title{
          margin: 0 0 12px;
          font-size: 14px;
          color: #333;
        }
        .most-expected-list{
          overflow: scroll;
          white-space: nowrap;
          .expected-item{
            display: inline-block;
            width: 85px;
            overflow: hidden;
            margin-right: 10px;
            .poster{
              width: 85px;
              height: 115px;
              position: relative;
              margin-bottom: 6px;
              img{
                height: 100%;
                width: 100%;
              }
              .wish-bg{
                display: inline-block;
                width: 100%;
                height: 35px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
              }
              .wish{
                position: absolute;
                left: 1px;
                bottom: 2px;
                color: #faaf00;
                font-size: 11px;
                font-weight: 600;
              }
              .toggle-wish{
                width: 28px;
                line-height: 28px;
                background: rgba(61,63,71,.6);
                text-align: center;
                border-bottom-right-radius: 10px;
                position: absolute;
                top: 0;
                left: 0;
                span{
                  display: inline-block;
                  width: 10px;
                  height: 10px;
                  background-size: 100%;
                  background-repeat: no-repeat;
                  background-image: url('../images/dian.png')
                }
              }
            }
            .img-bg{
              background-color: #e1e1e1;
              background-size: 100% 100%;
            }
            .name{
              margin: 0 0 3px;
              font-size: 13px;
              color: #222;
            }
            .date{
              margin: 0;
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
