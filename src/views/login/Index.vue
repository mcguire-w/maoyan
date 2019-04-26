<template>
  <div>
    <van-nav-bar title="猫眼电影" color="#fff" id="Login-back">
      <van-icon name="arrow-left" slot="left" size="30px" color="#fff" @click="fn_2"/>
    </van-nav-bar>
    <van-tabs
      v-model="active"
      swipeable
      :line-width="175"
      :line-height="5"
      type="line"
      title-inactive-color="#000"
      title-active-color="#f04141"
      id="login-proving"
    >
      <van-tab title="账号密码登入" id="proving_1">
        <van-cell-group>
          <van-field clearable size="large" placeholder="账户名/手机号/Email"/>

          <van-field type="password" placeholder="请输入你的密码"/>
          <van-button type="danger" size="large" @click="fn_1" to="/account">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="手机验证登入" id="proving_2">
        <van-cell-group>
          <van-field center clearable placeholder="请输入手机号">
            <van-button
              slot="button"
              size="small"
              type="danger"
              @click="opq"
              prototype="$notify"
            >获取验证码</van-button>
          </van-field>
          <van-field clearable size="large" placeholder="请输入短信验证码"/>
          <van-button type="danger" size="large" @click="fn_1">登录</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <div class="Login-hao">
      <p class="hao-zuce">立即注册</p>
      <p class="hao-zhao">找回密码</p>
    </div>
    <div class="Login-kefu">
      <p>
        ©猫眼电影客服电话：
        <span>400-670-5335</span>
      </p>
    </div>
  </div>
</template>

<style lang="less">
#Login-back {
  background: red;
  color: #fff;

  .van-nav-bar__title {
    color:#fff !important;
    padding-left:30px;
    font-size:20px !important;
  }
}

.van-popup {
  background:#cdf1af !important;
  color:#4f5554 !important;
  height:46px !important;
  text-align:center;
  line-height:34px;
  font-size:16px !important;
  width:95% !important;
  border-radius:8px 8px;
}

#login-proving {
  position: relative;
}

.Login-hao {
  margin: 0.2rem 0.28rem;
  color: #df2d2d;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
}
.Login-kefu {
  text-align: center;
  font-size: 0.8em;
  span {
    color: #df2d2d;
  }
}
</style>

<script>
export default {
  data () {
    return {
      active: 0
    };
  },
  methods: {
    fn_1: function () {
      console.log(window.isLogin)
      window.isLogin = true
      this.$router.push(this.$route.query.redirect)
    },
    fn_2: function () {
      this.$router.back()
    },
    opq: function () {
      this.$notify('你的验证为:355987')
    }
  }
}
</script>
