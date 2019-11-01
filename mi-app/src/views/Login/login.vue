<template>
  <div class="login">
    <article class="login_article">
      <span class="out">
        <i @click="$router.push({name: 'mine'})" class="iconfont icon-cha"></i>
      </span>
      <h2 class="title" v-text="hText?'手机号登陆':'密码登录'"></h2>
      <div class="loginForm">
        <input
          type="text"
          @blur="border_b.br=false"
          @focus="border_b.br=true"
          :placeholder="placeholder1?'请输入手机号':'请输入用户名/邮箱'"
          v-model="userName"
          :style="{borderBottom:border_b.br?'1px solid #ff6a00':'1px solid #dedede'}"
        />
        <input
          :type="type?'password':'number'"
          @blur="border_b.bt=false"
          @focus="border_b.bt=true"
          :placeholder="placeholder2?'请输入验证码':'请输入密码必须包含大小写字母6-18位'"
          :style="{borderBottom:border_b.bt?'1px solid #ff6a00':'1px solid #dedede'}"
          v-model="passWored"
        />
        <p
          class="yan"
          v-show="isShow"
          @click="addM"
          :style="{color:border_b.mColor?'#ff6a00':'#101010'}"
        >获取验证码</p>
        <h4 @click="change" v-text="xText?'用账号密码登录':'短信验证登录'">></h4>
        <van-button
          @click="sub"
          class="btn"
          size="large"
          color="linear-gradient(to right, #ff6c01, #ff6b01)"
        >登录</van-button>
      </div>
      <p class="botton">已阅读并同意《星空商城用户协议》《星空商城隐私政策》《用户账号协议》《用户账号意思政策》</p>
      <div class="fooer">
        <p>
          <i class="iconfont icon-weixin"></i>
        </p>
        <p>
          <i class="iconfont icon-weibo"></i>
        </p>
      </div>
      <h6 class="hhh6">手机认证能力由中国移动提供</h6>
    </article>
  </div>
</template>

<script>
import $ from "jquery";
import { post } from "@/utils/request";
import { Login, LoginM, Register } from "@/api/index";
import { Toast } from "vant";
import { TipsWindown } from "../../assets/TipsWindown";
import { setToken } from "../../utils/auth";
export default {
  data() {
    return {
      hText: true,
      xText: true,
      userName: "",
      passWored: "",
      placeholder1: true,
      placeholder2: true,
      isShow: true,
      isRgb: true,
      type: false,
      border_b: {
        br: false,
        bt: false,
        mColor: true
      },
      userMessage: {},
      userPhone: {},
      YZM: ""
    };
  },
  methods: {
    change() {
      this.hText = !this.hText;
      this.placeholder1 = !this.placeholder1;
      this.placeholder2 = !this.placeholder2;
      this.isShow = !this.isShow;
      this.isRgb = !this.isRgb;
      this.type = !this.type;
      this.xText = !this.xText;
    },
    async addM() {
      //此处请求验证码
      this.border_b.mColor = false;
      this.userPhone.mobile = this.userName;
      const res = await Login(this.userPhone);
      this.YZM = res.vCode;
    },
    async sub() {
      if (this.userName && this.passWored) {
        const name_yz = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
        const ps_yz = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,18}$/;
        //判断当前是验证码登录 还是用户名加密码
        if (this.isRgb == true) {
          //此处验证码登录
          const yzms = $(".loginForm input")
            .eq(1)
            .val();
          if (yzms === this.YZM) {
            this.userMessage.userName = this.userName;
            this.userMessage.password = "Aa2565";
            const rul = await Register(this.userMessage);
            const res = await LoginM(this.userMessage);
            if (res.message == "用户名已存在！" || res.code == "success") {
              TipsWindown("登录成功");
              setToken(res.token);
              this.$router.push({ name: "Home" });
            }
          } else {
            TipsWindown("验证码输入错误,请检查");
            return false;
          }
        } else if (this.isRgb == false) {
          //此处用户名密码登录
          const nameYZ = name_yz.test(this.userName);
          const passwordYZ = ps_yz.test(this.passWored);
          if (nameYZ && passwordYZ) {
            //判断当前是否已经注册 没有则直接注册并登录 有则直接登录
            this.userMessage.userName = this.userName;
            this.userMessage.password = this.passWored;
            const res = await Register(this.userMessage);
            if (res.message == "用户名已存在！") {
              setTimeout(async () => {
                const res = await LoginM(this.userMessage);
                if (res.message == "用户密码错误！") {
                  TipsWindown("用户密码错误！");
                  return;
                } else {
                  TipsWindown("登录成功！");
                  this.$router.push({ name: "Home" });
                  setToken(res.token);
                }
              }, 500);
            } else if (res.code == "success") {
              TipsWindown("注册成功,将自动登录");
              const res = await LoginM(this.userMessage);
              setToken(res.token);
              this.$router.push({ name: "Home" });
            }
          } else if (nameYZ == false) {
            TipsWindown("用户名输入错误");
          } else if (passwordYZ == false) {
            TipsWindown("用户密码输入错误");
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.out {
  display: block;
  width: 100%;
  height: 90px;
  font-size: 40px;
  margin-top: 38px;
}
.out .iconfont {
  font-size: 70px;
  margin-left: 10px;
  color: #bdbdbd;
}
.title {
  font-size: 60px;
  color: black;
  font-weight: bold;
  margin: 125px 0 64px 90px;
}
.loginForm {
  width: 743px;
  height: auto;
  margin: 0 auto;
  position: relative;
}
.loginForm input {
  font-size: 30px;
  color: rgb(182, 182, 182);
  width: 743px;
  height: 70px;
  border: 0;
  border-bottom: 2px solid black;
}
.yan {
  width: 185px;
  height: 55px;
  position: absolute;
  right: 33px;
  top: 170px;
  font-size: 35px;
  color: #ff6a00;
  text-align: center;
  line-height: 55px;
}
.loginForm h4 {
  font-size: 27px;
  margin: 85px 0 0 0;
  color: rgb(12, 1, 15);
}
.loginForm .btn {
  border-radius: 10px;
  height: 85px;
}
.botton {
  width: 743px;
  font-size: 23px;
  height: auto;
  color: #bfbfbf;
  margin: 0 auto;
  margin-top: 30px;
  line-height: 30px;
}
.fooer {
  width: 235px;
  height: 92px;
  margin: 0 auto;
  margin-top: 185px;
  text-align: center;
  line-height: 92px;
  display: flex;
  justify-content: space-evenly;
}
.fooer .iconfont {
  font-size: 30px;
  color: #b6b6b6;
}
.fooer p {
  width: 65px;
  height: 65px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 65px;
  border-radius: 50%;
}
.fooer p i {
  display: block;
}
.hhh6 {
  font-size: 20px;
  margin: 20px auto;
  color: #ccc;
  margin-left: 315px;
}
.van-toast__text {
  width: 350px;
  height: 50px;
  background: skyblue;
}
</style>