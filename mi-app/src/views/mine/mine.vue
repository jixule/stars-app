<template>
  <div class="mine" id="mine">
    <header class="header">
      <dl>
        <dt @click="userHandle">
          <img
            :src="userQW?this.user.avatar:'http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg'"
            alt
          />
        </dt>
        <dd>
          <h2>
            {{userQW?this.user.nickName:user.userName}}
            <span
              v-show="!userQW"
              @click="$router.push({name:'login'})"
            >登录/注册</span>
          </h2>
        </dd>
      </dl>
      <p class="iconfont icon-iconfontzhizuobiaozhun023110" id="message"></p>
      <div class="vip">
        <span>
          <img src="https://s2.ax1x.com/2019/10/29/K20FiR.png" alt />
        </span>
        会员积分
      </div>
    </header>
    <section id="main">
      <div class="list" @click="$router.push({name:'myorder',query:{active:0}})">
        <h2>我的订单</h2>
        <p>
          全部订单
          <span class="iconfont icon-jiantou"></span>
        </p>
      </div>
      <div class="wait">
        <figure @click="$router.push({name:'myorder',query:{active:1}})">
          <span class="iconfont icon-shinshoplipinqia"></span>
          <figcaption>待付款</figcaption>
        </figure>
        <figure @click="$router.push({name:'myorder',query:{active:2}})">
          <span class="iconfont icon-daishouhuo"></span>
          <figcaption>待收货</figcaption>
        </figure>
        <figure @click="$router.push({name:'myorder' ,query:{active:3}})">
          <span class="iconfont icon-xiaoxi1"></span>
          <figcaption>待评价</figcaption>
        </figure>
        <figure @click="$router.push({name:'shouhou'})">
          <span class="iconfont icon-icon--"></span>
          <figcaption>退换修</figcaption>
        </figure>
      </div>
      <div class="money">
        <figure @click="$router.push({name:'youhui'})">
          <p>0</p>
          <figcaption>优惠券</figcaption>
        </figure>
        <figure>
          <p>
            20
            <span>万</span>
          </p>
          <figcaption>最高额度</figcaption>
        </figure>
        <figure>
          <p>0</p>
          <figcaption>礼品卡</figcaption>
        </figure>
        <figure>
          <a class="iconfont icon-wodeqianbao1"></a>
          <figcaption>我的钱包</figcaption>
        </figure>
      </div>
      <div>
        <van-swipe :autoplay="5000" indicator-color="white" class="lunbo">
          <van-swipe-item>
            <img src="https://s2.ax1x.com/2019/10/29/KRRFZq.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://s2.ax1x.com/2019/10/29/KRRuQJ.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://s2.ax1x.com/2019/10/29/KR2kCD.png" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <article>
        <div class="box">
          <i class="iconfont icon-huiyuan"></i>
          <div>
            <h2>小米会员</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KRMx3j.png" alt />
          </i>
          <div>
            <h2>会员中心</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KRQOqx.png" alt />
          </i>
          <div>
            <h2>服务中心</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KRlWSH.png" alt />
          </i>
          <div>
            <h2>小米之家</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KR335T.png" alt />
          </i>
          <div>
            <h2>直供点</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KR3sPO.png" alt />
          </i>
          <div>
            <h2>更多功能</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
      </article>
      <div class="edit">
        <div class="box">
          <i>
            <img src="https://s2.ax1x.com/2019/10/29/KRDPSI.png" alt />
          </i>
          <div>
            <h2>设置</h2>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
      </div>
      <div class="blank"></div>
    </section>
    <footer>
      <low></low>
    </footer>
  </div>
</template>

<script>
import low from "../footer/footer";
import { getToken } from "../../utils/auth";
import { user } from "../../api/index";
import $ from "jquery";
export default {
  data() {
    return {
      activeKey: 0,
      userQW: false,
      user: {}
    };
  },
  components: {
    low
  },
  methods: {
    userHandle() {
      this.$router.push({
        name: "userMsg"
      });
    }
  },
  async created() {
    if (getToken()) {
      this.userQW = true;
      const obj = await user();
      this.user = obj;
      console.log(obj);
    } else {
      this.userQW = false;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#mine {
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}
.header {
  height: 180px;
  background-image: url(https://s2.ax1x.com/2019/10/29/K2JkT0.png);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #fff;
  overflow: hidden;
}
header dl {
  width: 300px;
  height: 100px;
  position: absolute;
  left: 34px;
  top: 30px;
  display: flex;
  align-items: center;
}
header dt {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
header dt img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
header dd {
  margin-left: 10px;
  font-size: 28px;
  color: #fff;
}
#message {
  position: absolute;
  top: 5px;
  right: 22px;
  color: #fff;
  font-size: 45px;
}
.vip {
  width: 206px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 26px 0 0 26px;
  background: #ffd43f;
  color: #b24e00;
  font-size: 28px;
  position: absolute;
  right: 0;
  top: 68px;
  font-weight: 600;
}
.vip img {
  width: 30px;
  height: 30px;
  margin-left: 20px;
}
#main {
  flex: 1;
}

.list {
  height: 90px;
  padding: 0 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background: #fff;
  margin-top: 172px;
}
.list h2 {
  font-size: 31px;
}
.list p {
  font-size: 28px;
  color: #b0b0b0;
}
.list span {
  font-size: 29px;
}
.wait {
  height: 194px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.wait figure {
  width: 90px;
  height: 108px;
  font-size: 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wait figure span {
  font-size: 70px;
}
.money {
  height: 194px;
  background: #fff;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.money figure {
  width: 115px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.money p {
  font-size: 40px;
  font-weight: 600;
}
.money span {
  font-size: 25px;
  font-weight: normal;
}
.money figcaption {
  font-size: 28px;
}
.money a {
  font-size: 70px;
}
.lunbo {
  height: 218px;
  margin-top: 20px;
}
.lunbo img {
  width: 100%;
  height: 218px;
}
article {
  height: 720px;
  background: #fff;
  margin-top: 20px;
}
.box {
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 35px;
  align-items: center;
}
.box div {
  width: 776px;
  display: flex;
  justify-content: space-between;
  padding: 0 28px 0 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
  font-size: 34px;
  height: 120px;
}
.box i {
  font-size: 46px;
  color: #f9c229;
}
.box span {
  font-size: 30px;
  color: #b0b0b0;
}
.box i img {
  width: 50px;
  height: 50px;
  margin-left: -5px;
}

.edit {
  margin-top: 20px;
  background: #fff;
  height: 120px;
}
.blank {
  height: 200px;
}
</style>