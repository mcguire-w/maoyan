<template>
  <div class="detail" :class="{ fixed: this.isShow }">
    <header class="navbar">
      <div class="nav-wrap-left">
        <a href="javascript:;" class="back" @click="$router.back()">
          <i class="iconfont icon-zuo3-copy"></i>
        </a>
      </div>
      <h1 class="nav-header">{{ movieData.nm }}</h1>
    </header>
    <div class="body">
      <div class="movie-detail">
        <div class="movie-filter"></div>
        <div class="poster-bg" :style="setBg(movieData.img)"></div>
        <div class="detail box-flex">
          <div class="poster">
            <img :src="movieData.img" />
          </div>
          <div class="content flex">
            <div class="title middle line-ellipsis">{{ movieData.nm }}</div>
            <div class="title-en-name line-ellipsis">{{ movieData.enm }}</div>
            <div class="score line-ellipsis">
              {{ movieData.sc }}
              <span class="snum">({{ snum }}万人评)</span>
            </div>
            <div class="type line-ellipsis">
              <span>{{ movieData.cat }}</span>
              <div class="type-group">
                <img style="width: 42px;" class="sd-imax" src="" />
              </div>
            </div>
            <div class="src line-ellipsis">{{ movieData.src + '/' + movieData.episodeDur }}分钟</div>
            <div class="pubDesc line-ellipsis">{{ movieData.pubDesc }}</div>
          </div>
        </div>
        <router-link class="arrow-g" :to="{ name: 'channe', params: { movieId } }">
          <img src='../../images/right-bg.png'>
        </router-link>
      </div>
      <div class="showDays">
        <ul class="timeline mb-line-b">
          <li class="showDay" :class="{ chosen: index === Value }" v-for="(item, index) in newDayList" :key='index' @click="Value = index">{{ item }}</li>
        </ul>
      </div>
      <filterCinemas />
      <div class="blacker"></div>

      <section class="page">
        <div class="page-wrap">
          <div class="cinema-list">
            <div class="list-wrap">
              <div v-for="item in cinemaList" :key="item.Id" class="item mb-line-b">
                <router-link to="/shows" class="shows">
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
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import filterCinemas from '@/components/filterCinemas.vue'
export default {
  data () {
    let movieId = this.$route.params.movieId
    return {
      movieId,
      Value: 0
    }
  },
  components: {
    filterCinemas
  },
  computed: {
    ...mapState('detail', [
      'movieData',
      'snum',
      'showDayList',
      'isShow'
    ]),
    ...mapState('cinema', ['cinemaList']),
    ...mapGetters('detail', [
      'newDayList'
    ])
  },
  methods: {
    ...mapActions('detail', [
      'getMovieData',
      'getShowDay',
      'getFilterCinemas'
    ]),
    ...mapActions("cinema", ['getCinemaList']),
    setBg (bg) {
      return 'background-image: url(' + bg + ')'
    }
  },
  created () {
    this.getMovieData(this.movieId)
    this.getShowDay(this.movieId)
    this.getFilterCinemas(this.movieId)
    this.getCinemaList()
  }
}
</script>

<style lang='less'>
  .navbar {
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: flex;
    position: relative;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    .nav-wrap-left {
      height: 50.5px;
      line-height: 50.5px;
      .back {
        height: 50px;
        width: 22.5px;
        line-height: 50px;
        padding: 0 15px;
        color: #fff;
        > i {
          font-size: 24px;
        }
      }
    }
    .nav-header {
      display: block;
      flex: 1;
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
  .body{
    font-size: 14px;
    color: #777;
    .movie-detail{
      height: 188px;
      position: relative;
      cursor: pointer;
      .movie-filter{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #333;
      }
      .poster-bg{
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        position: absolute;
        filter: blur(1.2rem);
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .55;
      }
      .detail{
        height: 150px;
        padding: 19px 30px 19px 15px;
        .poster{
          >img{
            width: 110px;
            height: 150px;
            box-sizing: border-box;
          }
        }
        .content{
          overflow-x: hidden;
          margin-left: 12.5px;
          line-height: 1;
          color: #fff;
          .line-ellipsis{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .title{
            font-size: 20px;
            margin-top: 2px;
            font-weight: 700;
            overflow: hidden;
          }
          .title-en-name,.type,.src,.pubDesc,.snum{
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: .8;
          }
          .score{
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
            margin-top: 11px;
          }
          .type{
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: .8;
            >span{
              vertical-align: top;
            }
            .type-group{
              display: inline-block;
              width: 42px;
              opacity: .85;
            }
          }
        }
      }
      .box-flex{
        display: flex
      }
      .arrow-g{
        position: absolute;
        width: 10px;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        >img{
          width: 100%;
        }
      }
    }
    .showDays{
      width: 100%;
      background-color: #fff;
      .timeline{
        padding: 0;
        margin: 0;
        white-space: nowrap;
        .showDay{
          position: relative;
          display: inline-block;
          width: 115px;
          line-height: 43px;
          margin-left: 4.5px;
          font-size: 14px;
          text-align: center;
          list-style: none;
          color: #666;
          &.chosen{
            border-bottom: 2px solid #f03d37;
            color: #f03d37;
          }
        }
      }
      .mb-line-b{
        background: url('../../images/dian.png') 0 bottom repeat-x;
      }
    }
    .showDays, .showDays .timeline{
      overflow-x: scroll;
      height: 45px;
    }
  }
  .detail{
    &.fixed{
      overflow: hidden;
      height: 100%;
      .movie-detail{
        display: none;
      }
      .showDays{
        position: relative;
        z-index: 100
      }
      .nav-wrap.filter-nav-wrap{
        z-index: 100
      }
      .blacker{
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,.3);
      }
    }
  }
</style>
