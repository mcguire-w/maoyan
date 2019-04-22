<template>
  <div>
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
          <van-field
            clearable
            size="large"
            right-icon="question-o"
            placeholder="账户名/手机号/Email"
          />

          <van-field type="password" placeholder="请输入你的密码"/>
          <van-button type="danger" size="large" @click="fn1">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="手机验证登入" id="proving_2">
        <van-cell-group>
          <van-field center clearable placeholder="请输入手机号">
            <van-button slot="button" size="small" type="danger">获取验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less">
#login-proving {
  position: relative;
}
</style>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    fn1: function () {
      console.log(window.isLongin)
      // window.isLongin = true;
      // this.$router.push(this.$route.query.redirect);
    }
  }
}
</script>
