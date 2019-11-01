<template>
  <div class="box">
    <van-nav-bar id="nav_dz" left-text="管理地址" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <div class="dz" v-for="(item, index) in list.addresses" :key="index">
      <div class="dz-l">
        <p class="dz-m">
          <span>{{item.receiver}}</span>
          <b>{{item.mobile}}</b>
          <!-- <i>[默认]</i> -->
        </p>
        <p class="dz-s">{{item.regions}}</p>
        <p class="dz-y">{{item.address}}</p>
      </div>
      <div class="dz-r">
        <van-icon name="arrow" slot="right" />
      </div>
    </div>
  </div>
</template>
<script>
import { CustomerAddress } from "../../../api/index";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const ios = await CustomerAddress();
    this.list = ios;
  },
  methods: {
     onClickRight() {
      this.$router.push({
        name: 'address'
      })
    },
    onClickLeft() {
       this.$router.push({
        name: 'mine'
      })
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
#nav_dz {
  height: 120px;
  line-height: 120px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fafafa;
  border-bottom: 1px solid #e3e3e3;
}
#nav_dz .van-nav-bar__text {
  color: #444444;
  font-size: 35px;
  margin-left: 20px;
}
#nav_dz .van-nav-bar__arrow {
  color: #969696;
  font-size: 45px;
  margin-left: 10px;
}
#nav_dz .van-icon-plus {
  font-size: 48px;
  color: #919191;
  margin-right: 35px;
}
.dz {
  margin-top: 120px;
  height: 220px;
  font-size: 30px;
  color: #3f3f3f;
  border-bottom: 1px solid #e3e3e3;
}
.dz-l {
  width: 759px;
  box-sizing: border-box;
  padding: 30px 45px;
  float: left;
}
.dz-m {
  font-size: 40px;
  font-weight: 400;
}
.dz-m span {
  color: #f37214;
}
.dz-m b {
  margin-left: 60px;
}
.dz-m i {
  color: #f37214;
  font-size: 30px;
}
.dz-s {
  margin-top: 13px;
  font-size: 33px;
  color: #3f3f3f;
}
.dz-y {
  margin-top: 10px;
  color: #3f3f3f;
  font-size: 32px;
}
.dz-r {
  float: right;
  width: 150px;
  height: 100%;
}
.dz-r .van-icon-arrow {
  font-size: 30px;
  color: #bcbcbc;
  line-height: 220px;
  float: right;
  margin-right: 40px;
}
</style>