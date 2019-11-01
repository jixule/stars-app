<template>
  <div class="box">
    <van-nav-bar id="nav_od" left-text="订单详情" left-arrow @click-left="onClickLeft">
      <van-icon name="shopping-cart-o" slot="right" />
    </van-nav-bar>
    <div class="ddfk">
      <div class="ddfk_l">
        <h3>等待付款</h3>
        <p>请在14分钟内完成付款</p>
      </div>
      <div class="ddfk_r">
        <img src="../../assets/img/order_right.png" alt />
      </div>
    </div>

    <div class="od-fk">
      <div class="fk-l">
        <van-icon name="location-o" slot="right" />
        <h4>
          <b>张三</b>
          <span>150***2142</span>
        </h4>
        <p>河南 郑州市 中原区 沟赵乡 中国农业银行24小时自助银行(郑州工业园支行)</p>
      </div>
      <div class="fk-r">
        <van-button class="od-change" plain type="info">修改</van-button>
      </div>
    </div>

    <div class="od-xq" v-for="(item, index) in arr" :key="index">
      <div class="xq-img">
        <img :src="item.product.coverImg" alt />
      </div>
      <div class="xq-mc">
        <h5>{{item.product.name}}</h5>
        <p>黑色</p>
      </div>
      <div class="xq-p">
        <b>
          ￥
          <i>{{item.product.price}}</i>
        </b>
        <span>x{{item.quantity}}</span>
      </div>
    </div>

    <div class="od-je">
      <div class="je-t">
        <span>订单金额:</span>
        <b>
          ￥
          <i>{{this.conut}}</i>
        </b>
      </div>
      <div class="je-m">
        <span>运费:</span>
        <b>
          ￥
          <i>10</i>
        </b>
      </div>
      <div class="je-b">
        <span>应付金额:</span>
        <b>
          ￥
          <i>{{this.conut}}</i>
        </b>
      </div>
    </div>

    <div class="od-rq">
      <p>
        <b>下单日期</b>
        <i>2019-10-28 20:24:09</i>
      </p>
      <p>
        <b>订单编号</b>
        <i>5191028734415833</i>
      </p>
      <p>
        <b>发票类型</b>
        <i>电子发票</i>
      </p>
      <p>
        <b>发票抬头</b>
        <i>个人</i>
      </p>
      <button>联系客服</button>
    </div>

    <div class="footer">
      <span>取消订单</span>
      <b>
        应付金额：
        <i>￥{{this.conut}}</i>
      </b>
      <button>立即付款</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      arr: this.popos,
      conut: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    ...mapState(["popos"])
  },
  mounted() {
    this.arr = this.popos;
    const ie = 0;
    /*  this.conut = this.arr.forEach(v => {
      ie = ie + v.product.price * v.quantity;
      return ie;
    }); */
    let pprice = 0;
    this.arr.forEach(v => {
      pprice = pprice + v.quantity * v.product.price;
    });
    this.conut = pprice;
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
#nav_od {
  height: 105px;
  line-height: 105px;
  width: 100%;
  position: fixed;
  top: 0;
}
#nav_od .van-nav-bar__text {
  color: black;
  font-size: 38px;
  margin-left: 20px;
  font-weight: 800;
}
#nav_od .van-nav-bar__arrow {
  color: #969696;
  font-size: 45px;
  margin-left: 10px;
}
#nav_od .van-icon-shopping-cart-o {
  font-size: 45px;
  color: #919191;
  margin-right: 40px;
}
.ddfk {
  background: #f37d0e;
  width: 100%;
  height: 253px;
  margin-top: 105px;
}
.ddfk_l {
  float: left;
  height: 100%;
  width: 530px;
  padding: 80px 100px;
  box-sizing: border-box;
}
.ddfk_l h3 {
  font-size: 35px;
  color: #fdf1fd;
}
.ddfk_l p {
  font-size: 30px;
  color: #f9c58b;
  margin-top: 17px;
}
.ddfk_r {
  width: 379px;
  float: right;
  height: 100%;
}
.ddfk_r img {
  width: 100%;
  height: 100%;
}
.od-fk {
  height: 185px;
  font-size: 30px;
  position: relative;
  background: white;
}
.fk-l {
  width: 606px;
  height: 100%;
  margin-left: 103px;
  float: left;
}
.fk-l .van-icon-location-o {
  color: red;
  position: absolute;
  left: 46px;
  top: 40px;
}
.fk-l h4 {
  margin-top: 30px;
  font-weight: 800;
}
.fk-l p {
  margin-top: 18px;
  color: #959595;
  line-height: 41px;
}
.fk-r {
  width: 200px;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.od-change {
  width: 110px;
  height: 60px;
  color: #f15b1f;
  border: 2px solid #f15b1f;
  border-radius: 10px;
}
.od-xq {
  width: 100%;
  height: 204px;
  background: white;
  margin-top: 20px;
}
.od-xq .xq-img {
  width: 225px;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xq-img img {
  max-width: 100%;
  max-height: 100%;
}
.od-xq .xq-mc {
  width: 580px;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.xq-mc h5 {
  font-size: 35px;
  color: black;
  font-weight: 800;
}
.xq-mc p {
  font-size: 29px;
  color: #8c8c8c;
  margin-top: 20px;
}
.od-xq .xq-p {
  width: 104px;
  float: left;
  height: 100%;
}
.xq-p {
  font-size: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.xq-p span {
  margin-top: 20px;
}
.od-je {
  height: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  background: white;
}
.od-je div {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  font-weight: 600;
}
.je-t,
.je-m {
  font-size: 30px;
  color: #969696;
  width: 100%;
  height: 130px;
  box-sizing: border-box;
}
.je-t {
  line-height: 80px;
}
.je-b {
  font-size: 35px;
  height: 100px;
  line-height: 100px;
  border-top: 1px solid #dddddd;
  color: #e65f05;
}
.od-rq {
  width: 100%;
  height: 380px;
  box-sizing: border-box;
  padding: 40px;
  background: white;
  margin-top: 20px;
}
.od-rq p {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #909090;
  margin-top: 20px;
}
.od-rq p:first-child {
  margin-top: 0;
}
.od-rq button {
  width: 200px;
  height: 75px;
  font-size: 30px;
  float: right;
  margin-top: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  color: #858585;
  font-weight: 600;
}
.xh-t {
  height: 74px;
  font-size: 32px;
  color: #fc7104;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.xh-t img {
  height: 30px;
}
.tj {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
}
.footer {
  height: 130px;
  position: fixed;
  bottom: 0;
  font-size: M 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px;
  border-top: 1px solid #ebebeb;
  background: white;
}
.footer span {
  color: #9f9f9f;
  font-size: 30px;
}
.footer b {
  color: #3a3a3a;
  font-size: 35px;
  position: relative;
  left: 100px;
}
.footer b i {
  color: #ee5b00;
  font-weight: 600;
}
.footer button {
  width: 203px;
  height: 80px;
  color: white;
  background: #ec5b00;
  border: 0;
  border-radius: 6px;
  font-size: 30px;
  font-weight: 600;
}
</style>