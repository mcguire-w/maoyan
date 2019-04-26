<template>
  <div class="Channe">
     <header class="navbar">
      <div class="nav-wrap-left">
        <a href="javascript:;" class="back" @click="$router.back()">
          <i class="iconfont icon-zuo3-copy"></i>
        </a>
      </div>
      <h1 class="nav-header">{{ movieData.nm }}</h1>
    </header>
    <div class="movie-page body">
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
      </div>
      <section class="section-seperate section-expander">
        <div class="link btn btn-block btn-pay">
          <span>特惠购票</span>
        </div>
        <div class="text-expander" :class="{active: isActive}">
          <div class="text-expander-content">
            <p>{{ movieData.dra }}</p>
          </div>
        </div>
      </section>
      <section class="section-seperate section-movie-celebrities">
        <ul class="movie-celebrities">
          <li v-for='item in 20' :key='item'>
            <a href="#" class="link">
              <img class="img" src="http://p1.meituan.net/moviemachine/92f533b48482a20b1dc7131363b0d888183832.jpg@130w_180h.webp" alt="">
              <span>乔.罗素</span>
              <span class="movie-celebrities-roles">导演</span>
            </a>
          </li>
        </ul>
        <div class="link link-more clearfix">
          <h4>全体演职人</h4>
          <van-icon name="arrow" class="icon-right" />
        </div>
      </section>
      <section class='storebill'>
        <a href="#" class="link link-more">
          <h4>正版周边</h4>
          <span class="content-right">
            全部
            <van-icon name="arrow" class="icon-right" />
          </span>
        </a>
        <ul class="deal-stage">
          <li>
            <a href="#">
              <img src="" alt="">
              <div class="deal-info-list">
                <h3>复联4手办摆件</h3>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    let movieId = this.$route.params.movieId
    let isActive = false
    return {
      movieId,
      isActive
    }
  },
  computed:{
    ...mapState('detail', [
      'movieData',
      'snum'
    ]),
  },
  methods: {
    ...mapActions('detail', [
      'getMovieData',
    ]),
    setBg (bg) {
      return "background-image: url(" + bg + ")"
    }
  },
  created () {
    this.getMovieData(this.movieId)
  }
}
</script>

<style lang="less">
  .section-seperate{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
  }
  .section-expander{
    position: relative;
    margin-top: 0!important;
    padding: 15px 15px 0;
    .btn{
      margin: 0 0 10px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 4px;
      line-height: 1;
      background: #e54847;
      color: #fff;
      text-align: center
    }
  }
  .text-expander{
    cursor: pointer;
    font-size: 16px;
    background-color: #fff;
  }
  .text-expander-content{
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 500px !important;
    p{
      font-size: 16px;
      margin-top: 0px;
    }
  }
  .btn-block{
    display: block;
    margin: 10px;
    padding: 10px;
  }
  section{
    background: #fff;
  }
  .section-seperate{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
    .clearfix::after{
      clear: both;
      content: ' ';
      display: block;
      font-size: 0;
      line-height: 0;
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .clearfix::before{
      content: " ";
      display: table;
    }
  }
  .link-more{
      border-top: 1px solid #e5e5e5;
      padding: 0 15px;
      display: block;
      line-height: 40px;
      cursor: pointer;
      h4{
        float: left;
        position: relative;
        margin: 0;
        color: #666;
        font-weight: lighter
      }
      .content-right{
        color: #aaa;
        float: right;
      }
      .icon-right{
        color: #aaa;
        line-height: inherit;
        vertical-align: middle;
        margin-top: 2px;
        font-size: 14px;
      }
    }
  .movie-page .movie-celebrities{
    width: 100%;
    padding: 15px 0 5px 15px;
    margin: 0;
    list-style: none;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
    img{
      width: 65px;
      height: 90px;
      margin: 2px
    }
    li:first-child{
      padding-left: 0;
      img{
        margin-left: 0;
      }
      span{
        width: 66.5px
      }
    }
    li{
      padding: 1px;
      text-align: center;
      display: inline-block;
      span{
        width: 70px;
        display: block;
        font-size: .22rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .movie-celebrities-roles{
        color: #999;
      }
    }
  }

</style>

