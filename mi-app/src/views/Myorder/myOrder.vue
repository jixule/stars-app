<template>
  <div class="myorder">
    <nav class="myNav">
      <div>
        <i @click="$router.go(-1)">
          <img src="https://s2.ax1x.com/2019/11/01/KTvSJI.png" alt />
        </i>
        <b>我的订单</b>
      </div>
      <div>
        <strong @click="sou" class="iconfont icon-fangdajing1"></strong>
        <em @click="shop" class="iconfont icon-gouwuche"></em>
      </div>
    </nav>
    <van-tabs v-model="active" :color="'#FF6900'" :title-active-color="'#FF6900'" swipeable>
      <van-tab title="全部">
        <div
          class="box"
          v-for="(v, i) in orders.length>0?orders:kList"
          :key="i"
          @click="money(v._id)"
        >
          <b class="iconfont icon-dingwei"></b>
          <div class="rightBox">
            <div class="userOrder">
              <h3 v-text="v.receiver"></h3>
              <p v-text="'订单号: '+v.no"></p>
            </div>
            <div class="userAddress">
              <p v-text="v.regions+' '+v.address"></p>
              <strong
                v-text="v.isPayed?'已支付':'待支付'"
                :style="{color:v.isPayed?'rgb(25, 137, 250)':'rgb(238, 10, 36)'}"
              ></strong>
            </div>
            <div class="userTime">
              <p v-text="'订单创建时间:'+v.createdAt"></p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="代付款" dot info="2">
        <div class="box" v-for="(v, i) in orders.length>0?orders:kList" :key="i">
          <b class="iconfont icon-dingwei"></b>
          <div class="rightBox">
            <div class="userOrder">
              <h3 v-text="v.receiver"></h3>
              <p v-text="'订单号: '+v.no"></p>
            </div>
            <div class="userAddress">
              <p v-text="v.regions+' '+v.address"></p>
              <strong
                v-text="v.isPayed?'已支付':'待支付'"
                :style="{color:v.isPayed?'rgb(25, 137, 250)':'rgb(238, 10, 36)'}"
              ></strong>
            </div>
            <div class="userTime">
              <p v-text="'订单创建时间:'+v.createdAt"></p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="待评价"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
import "../../assets/resetui.css";
import { findOrder, findOrderShop } from "@/api/index";

export default {
  name: "myorder",
  data() {
    return {
      active: 0,
      orders: [],
      shops: [],
      shopID: "",
      kList: [
        {
          title: "空空如也啊"
        }
      ],
      ordersID: [],
      orderShop: []
    };
  },
  async created() {
    const page = 1;
    const per = 10;
    const res = await findOrder(page, per);
    this.orders = res.orders;
    if (this.orders != 0) {
      this.orders.forEach(item => this.ordersID.push(item._id));
      this.ordersID.forEach(async item => {
        const ty = await findOrderShop(item);
        this.orderShop.push(ty);
      });
    }
    this.active = this.$route.query.active;
  },
  methods: {
    shop() {
      this.$router.push({
        name: "cart"
      });
    },
    sou() {},
    async money(id) {
      this.shopID = id;
      const res = await findOrderShop(this.shopID);
      this.shops = res.details;
      this.$store.commit("save", this.shops);
      this.$router.push({ name: "calculate" });
    }
  }
};
</script>

<style scoped>
.myNav {
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  height: 120px;
  line-height: 120px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.myNav div:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.myNav div:nth-child(1) i {
  margin: -35px 10px 0 10px;
  width: 55px;
  height: 55px;
  display: block;
}
.myNav div:nth-child(1) img {
  width: 55px;
  height: 55px;
}
.myNav div:nth-child(1) b {
  display: inline-block;
  line-height: 100%;
  width: 180px;
  letter-spacing: 2px;
  margin-left: 10px;
  color: #010101;
}
.myNav div:nth-child(2) {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.myNav div:nth-child(2) .iconfont {
  font-size: 55px;
  color: #ccc;
}
.van-tab__pane {
  text-align: center;
}
.box1 {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  margin: 30px 0 0 0;
}
.box1 h2 {
  font-size: 45px;
  color: #ccc;
}
.box {
  width: 85%;
  margin: 30px auto;
  height: 180px;
  border: 2px solid #ccc;
  font-size: 45px;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box b {
  width: 90px;
  height: 90px;
  display: block;
  line-height: 90px;
  text-align: center;
  border-radius: 50%;
  background: rgb(255, 81, 2);
  margin-left: 15px;
  margin-right: 20px;
}
.box .iconfont {
  font-size: 60px;
  color: #fff;
}
.userOrder {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
}
.userOrder h3 {
  font-size: 50px;
  color: black;
  margin-right: 15px;
}
.userOrder p {
  font-size: 30px;
  line-height: 50px;
  color: rgb(94, 89, 89);
}
.rightBox {
  width: 800px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.userAddress {
  width: 100%;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  color: black;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.userAddress strong {
  margin-right: 10px;
}
.userTime {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: left;
  color: black;
}
.userBtn {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>