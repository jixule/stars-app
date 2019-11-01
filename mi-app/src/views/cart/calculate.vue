<template>
  <div class="calculate">
    <header class="calculate_header">
      <div class="calculate_nav">
        <van-icon name="arrow-left" color="#fbb673" @click="ctyue" />
        <p>订单配送至</p>
        <p></p>
      </div>
      <div class="calculate_site">
        <div>
          <div class="calculate_site_name">
            <span>{{list.addresses[0].receiver}}</span>
            <span>{{list.addresses[0].mobile}}</span>
            <span>默认</span>
          </div>
          <p class="calculate_site_site">
            <span>{{ list.addresses[0].regions}}</span>
            <span>{{ list.addresses[0].address}}</span>
          </p>
        </div>
        <p class="calculate_jiantou">
          <van-icon name="arrow" color="#fbb673" />
        </p>
      </div>
    </header>
    <section class="calculate_section">
      <div class="calculate_commodity">
        <div class="calculate_commodity_out">
          <div class="calculate_outw" v-for="(item, index) in arr" :key="index">
            <p>
              <img :src="item.product.coverImg" alt />
            </p>
            <div class="calculate_ale">
              <h2>{{item.product.name}}</h2>
              <p></p>
            </div>
            <div class="calculate_qian">
              <p>
                ￥
                <span>{{item.product.price}}</span>
              </p>
              <p>
                x
                <span>{{item.quantity}}</span>
              </p>
            </div>
          </div>
          <div class="calculate_freight">
            <h6>运费</h6>
            <p>
              <span>包邮</span>
            </p>
          </div>
          <div class="calculate_freight">
            <h6>优惠券</h6>
            <p class="calculate_discounts">
              <span>无可用</span>
              <span class="iconfont icon-jiantou"></span>
            </p>
          </div>
          <div class="calculate_freight">
            <h6>礼品卡</h6>
            <p class="calculate_discounts">
              <span>无可用</span>
              <span class="iconfont icon-jiantou"></span>
            </p>
          </div>
          <div class="calculate_freight subtotal">
            <h6>小计</h6>
            <p>
              ￥
              <span>{{ppre}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="calculate_jialx">
        <div class="calculate_freight calculate_frg">
          <h6>发票</h6>
          <p class="calculate_discounts">
            <span>电子发票一个人</span>
            <span class="iconfont icon-jiantou"></span>
          </p>
        </div>
      </div>
    </section>
    <footer class="calculate_footer">
      <div>
        共
        <span>{{num}}</span>件,应付金额:
        <span class="calculate_qiana">￥{{ppre}}</span>
      </div>
      <button type="button">去付款</button>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Dialog } from "vant";
import { CustomerAddress } from "../../api/index";
export default {
  data() {
    return {
      ppre: 0,
      arr: [],
      num: 0,
      list: [],
      orderList: []
    };
  },
  async created() {
    let pprice = 0;
    let nums = 0;
    this.arr = this.popos;
    this.arr.forEach(v => {
      pprice = pprice + v.quantity * v.product.price;
      nums = nums + v.quantity;
    });
    this.ppre = pprice + ".00";
    this.num = nums;
    const ios = await CustomerAddress();
    this.list = ios;
  },
  methods: {
    ctyue() {
      Dialog.confirm({
        title: "提示",
        message: "确定放弃购买商品吗？"
      }).then(() => {
        this.$router.push({ name: "OrderForm" });
        // this.$store.commit("save", this.arr);
      });
    }
  },
  computed: {
    ...mapState(["popos"])
  }
};
</script>

<style scoped>
body,
html {
  width: 100%;
  height: 100%;
  background: #f48117;
}

.calculate {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #f48117;
}
.calculate_header {
  width: 100%;
  height: 294px;
}
.calculate_nav {
  width: 100%;
  height: 122px;
  display: flex;
  font-size: 42px;
  justify-content: space-between;
  align-items: center;

  color: #fffffb;
}
.calculate_nav i {
  margin-left: 35px;
  color: #ffaf60;
}
.calculate_site {
  height: 173px;
  display: flex;
  font-size: 46px;
}
.calculate_site_name {
  margin-top: 23px;
  display: flex;
  line-height: 52px;
  color: #fff;
}
.calculate_site_name span {
  margin-left: 10px;
}
.calculate_site_name span:nth-of-type(1) {
  margin-left: 36px;
}
.calculate_site_name span:nth-of-type(3) {
  display: block;
  font-size: 24px;
  width: 98px;
  height: 35px;
  border: 2px solid #ffd37b;
  border-radius: 20px;
  text-align: center;
  line-height: 35px;
}
.calculate_site_site {
  height: 97px;
  line-height: 97px;
  font-size: 33px;
  margin-left: 32px;
  color: #f8dfb7;
  width: 825px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.calculate_jiantou {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculate_commodity_out {
  height: auto;
  background: #fff;
  border-radius: 20px 20px 0 0;
  margin-top: 65px;
  overflow: hidden;
}
.calculate_outw {
  width: 100%;
  height: 200px;

  display: flex;
  font-size: 29px;
  justify-content: space-around;
  align-items: center;
  border-bottom: #eaeaea 2px solid;
}
.calculate_outw img {
  width: 146px;
  height: 146px;
}
.calculate_ale {
  width: 525px;
  height: 123px;
}
.calculate_ale h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 54px;
  font-size: 31px;
  font-weight: 600;
}
.calculate_ale p span {
  color: #828282;
  margin-left: 10px;
  line-height: 65px;
}
.calculate_qian {
  width: 145px;
  height: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.calculate_qian p {
  line-height: 50px;
  color: #3f3f3f;
  font-size: 30px;
}
.calculate_qian p:last-child {
  font-size: 23px;
  color: #777777;
}
.calculate_freight {
  height: 113px;
  border-bottom: #eaeaea 2px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 35px;
}
.calculate_freight h6 {
  margin-left: 42px;
}
.calculate_freight p {
  margin-right: 42px;
}
.calculate_discounts {
  line-height: 113px;
  color: #d9d9d9;
}
.calculate_discounts .iconfont {
  margin-left: 10px;
  font-size: 30px;
}
.calculate_jialx {
  height: 100%;
  background: #eeeeee;
  overflow: hidden;
}
.calculate_frg {
  background: #fff;
  margin-top: 17px;
  color: #131313;
}
.calculate_frg p {
  color: #131313;
}
/* 中 */
.calculate_section {
  flex: 1;
}

.subtotal {
  color: #f6873f;
}
/* 尾部 */
.calculate_footer {
  width: 100%;
  height: 130px;
  background: #fff;
  font-size: 40px;
  color: #1b1b1b;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.calculate_footer button {
  width: 286px;
  height: 100px;
  border: 0;
  background: #fe6d00;
  color: #fff;
  border-radius: 40px;
}
.calculate_qiana {
  color: #ff5f00;
}
</style>