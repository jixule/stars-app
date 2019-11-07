<template>
  <div class="userMsg" id="jiantou">
    <van-nav-bar @click-left="onClickLeft" class="userMsg_header" left-text="个人资料" left-arrow />
    <div class="mian">
      <article>
        <div class="first">
          <p>头像</p>
          <a href="#">
            <img
              @click="msgChange"
              :src="!avatarMy?'http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg':avatarMy"
              alt
            />
          </a>
        </div>
        <van-cell @click="userName" class="show" title="姓名" is-link :value="value2?value2:'游客呀'" />
        <van-cell @click="sex" class="show" title="性别" is-link />
        <van-cell class="show" id="id" title="星空ID" value="21774645" />
      </article>
      <article>
        <van-cell @click="password" class="show" title="修改密码" is-link />
        <van-cell @click="$router.push({name:'guanlidizhi'})" class="show" title="收货地址" is-link />
        <van-cell @click="phone" class="show" title="密保手机" is-link value="158****4125" />
        <van-cell @click="bind" class="show" title="绑定小米直播" is-link />
        <van-cell @click="third" class="show" title="第三方账号" is-link />
      </article>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-uploader class="file">
        <van-button icon="photo" type="primary">上传本地图片</van-button>
      </van-uploader>
      <van-button icon="photo" type="info" @click="imsShow" v-show="wlimg">上传网络图片</van-button>
      <van-cell-group v-show="imgs">
        <van-field v-model="value" placeholder="请输入图片链接" />
      </van-cell-group>
      <van-button @click="imgSave" type="danger">确认修改</van-button>
      <van-button @click="isHidden" type="warning">取消修改</van-button>
    </van-popup>
    <van-popup v-model="show2" position="bottom" :style="{ height: '25%' }">
      <van-button icon="manager-o" type="info" v-show="nameShow" @click="nickNames">修改昵称</van-button>
      <van-cell-group v-show="nickShow">
        <van-field v-model="value2" placeholder="请输入想要修改的昵称" />
      </van-cell-group>
      <van-button @click="nickNameSave" type="danger">确认修改</van-button>
      <van-button @click="nameHidden" type="warning">取消修改</van-button>
    </van-popup>
    <van-button @click="logOut" type="warning">退出当前账号</van-button>
  </div>
</template>

<script>
import { desUser, user } from "@/api/index";
import { TipsWindown } from "../../../assets/TipsWindown";
import { removeToken } from "../../../utils/auth";
import { Dialog } from "vant";

export default {
  data() {
    return {
      name: "userMsg",
      userMsg: {},
      show: false,
      value: "",
      isTrue: false,
      imgs: false,
      wlimg: true,
      userArr: [],
      avatarMy: "",
      show2: false,
      value2: "",
      nameShow: true,
      nickShow: false
    };
  },
  created() {
    this.userAdd();
  },
  methods: {
    async userAdd() {
      const res = await user();
      this.userArr = res;
      this.avatarMy = res.avatar;
      this.value2 = res.nickName;
    },
    onClickLeft() {
      this.$router.push({
        name: "mine"
      });
    },
    imsShow() {
      this.wlimg = false;
      this.imgs = true;
    },
    nickNames() {
      this.nameShow = false;
      this.nickShow = true;
    },
    async imgSave() {
      const res = await user();
      if (this.value.startsWith("https://")) {
        this.userMsg.userName = res.userName;
        this.userMsg.password = res.password;
        this.userMsg.id = res._id;
        this.userMsg.avatar = this.value;
        const rul = await desUser(this.userMsg);
        this.userAdd();
        TipsWindown("头像修改成功");
        this.isTrue = true;
        this.wlimg = true;
        this.imgs = false;
        this.show = false;
      } else {
        TipsWindown("格式错误,需以https://开头");
      }
    },
    async nickNameSave() {
      const res = await user();
      const reg = /^[\u4e00-\u9fa5]{2,6}$/;
      if (reg.test(this.value2)) {
        this.userMsg.userName = res.userName;
        this.userMsg.password = res.password;
        this.userMsg.id = res._id;
        this.userMsg.nickName = this.value2;
        const rul = await desUser(this.userMsg);
        this.userAdd();
        TipsWindown("昵称修改成功");
        this.nameShow = true;
        this.nickShow = false;
      } else {
        TipsWindown("昵称须使用2-6位中英文");
      }
    },
    nameHidden() {
      this.show2 = false;
    },
    afterRead() {},
    msgChange() {
      this.show = true;
    },
    isHidden() {
      this.show = false;
      this.wlimg = true;
      this.imgs = false;
    },
    userName() {
      this.show2 = true;
    },
    sex() {},
    password() {},

    phone() {},
    bind() {},
    third() {},
    logOut() {
      Dialog.confirm({
        title: "提示",
        message: "确定退出吗"
      })
        .then(() => {
          removeToken();
          this.$router.push({
            name: "Home"
          });
        })
        .catch(() => {
          // on cancel
        });
    }
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
.zheZhao {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 350px;
  background: skyblue;
}
.van-button {
  width: 909px;
}
.ipt {
  position: fixed;
  width: 200px;
  height: 200px;
  background: purple;
}
.van-popup {
  background: rgb(250, 250, 250) !important;
}
</style>