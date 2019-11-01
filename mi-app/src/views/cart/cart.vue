<template>
  <div class="cart">
    <header class="cart_header">
      <span class="cart_header_1">购物车</span>
      <span>购物车</span>
      <p class="cart_header_bian" @click="compile">
        <span>{{g?'取消':'编辑'}}</span>
        <span class="iconfont icon-iconfontzhizuobiaozhun023110"></span>
      </p>
    </header>
    <section class="cart_section">
      <vehicle :s="g"></vehicle>
    </section>
    <footer>
      <low></low>
    </footer>
  </div>
</template>

<script>
import low from "../footer/footer";
import vehicle from "./vehicle";
import $ from "jquery";
export default {
  data() {
    return {
      g: false
    };
  },
  created() {},
  components: {
    vehicle,
    low
  },
  computed: {},
  methods: {
    compile() {
      this.g = !this.g;
    }
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}
body {
  font-size: 100px;
}
.cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 100px;
}
.vehicle {
  overflow: auto;
}
.cart_header {
  width: 100%;
  height: 124px;
  display: flex;
  font-size: 38px;
  color: #252525;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px #e1e1e1 solid;
  background: #fafafa;
}
.cart_header_1 {
  color: #fff;
}
.cart_header_bian {
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart_header_bian span:last-child {
  display: block;
  margin: 0 20px;
}

.cart_header_bian .iconfont {
  color: #9e9e9e;
  font-size: 53px;
}
.cart_section {
  flex: 1;
  overflow: auto;
}
.cart_footer {
  height: 134px;
  overflow: hidden;
}
.cart_footer .van-submit-bar__bar {
  width: 100%;
  height: 134px;
  font-size: 34px;
  color: #1e1e1e;
}
.cart_footer .van-submit-bar__price {
  font-size: 30px;
}
.van-submit-bar {
  bottom: 141px !important;
}
.cart_footer button {
  width: 340px;
  height: 138px;
  background: #ff6a03;
  font-size: 40px;
}
.van-checkbox {
  height: 138px;
  line-height: 138px;
}
.van-checkbox__label {
  line-height: 138px;
}
.van-checkbox__icon {
  margin: 0 10px 20px 20px;
}

.van-icon {
  line-height: 35px !important;
  width: 41px !important;
  height: 41px !important;
}
</style>