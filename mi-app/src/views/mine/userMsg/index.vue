<template>
  <div class="userMsg" id="jiantou">
    <van-nav-bar @click-left="onClickLeft" class="userMsg_header" left-text="个人资料" left-arrow />
    <div class="mian">
      <article>
        <div class="first">
          <p>头像</p>
          <a href="#">
            <img src="http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg" alt />
          </a>
        </div>
        <van-cell @click="userName" class="show" title="姓名" is-link value="21774645" />
        <van-cell @click="sex" class="show" title="性别" is-link />
        <van-cell class="show" id="id" title="小米ID" value="21774645" />
      </article>
      <article>
        <van-cell @click="password" class="show" title="修改密码" is-link />
        <van-cell @click="$router.push({name:'guanlidizhi'})" class="show" title="收货地址" is-link />
        <van-cell @click="phone" class="show" title="密保手机" is-link value="158****4125" />
        <van-cell @click="bind" class="show" title="绑定小米直播" is-link />
        <van-cell @click="third" class="show" title="第三方账号" is-link />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "userMsg"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "mine"
      });
    },
    userName() {},
    sex() {},
    password() {},

    phone() {},
    bind() {},
    third() {}
  }
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
.userMsg {
  background: #f6f6f6;
  height: 100%;
}
.userMsg_header {
  height: 120px;
  line-height: 120px;
}
#jiantou .van-nav-bar__arrow {
  font-size: 45px;
  color: #989898;
}
.van-nav-bar__text {
  font-size: 38px;
  color: #000;
}
.main {
  flex: 1;
}
article:nth-child(1) {
  height: 565px;
  background: #fff;
  margin-top: 40px;
}
#jiantou .van-cell__right-icon {
  font-size: 35px;
}
#jiantou .first {
  height: 140px;
  font-size: 35px;
  line-height: 140px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px 0 40px;
  color: #000;
}
.first a {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.first img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
#jiantou .show {
  height: 112px;
  font-size: 35px;
  line-height: 112px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 20px 0 40px;
  color: #000;
}
#id {
  padding: 0 60px 0 40px;
}

article:nth-child(2) {
  height: 672px;
  margin-top: 40px;
  background: #fff;
}
</style>