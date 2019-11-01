<template>
  <div class="stream">
    <div
      class="details"
      v-for="(v,i) in list"
      :key="i"
      @click="$router.push({path:`/particulars?id=${v._id}123213`})"
    >
      <a href="#" class="details_a">
        <p class="img">
          <img :src="v.coverImg" alt />
        </p>
        <span>￥{{v.price}}</span>
        <p class="shuoming_s">{{v.name}}</p>
      </a>
      <div class="head_portrait">
        <p>
          <img src="#" alt />
          <span></span>
        </p>
        <p>
          <span class="iconfont icon-yanjing"></span>
          <span>1120</span>
        </p>
      </div>
    </div>
    <div class="chengshi"></div>
  </div>
</template>

<script>
import { productList, product } from "../../services/HomeGetData";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const res = await product({
      per: 100,
      page: 1
    });
    // 手机
    const Res = await productList({
      page: 4,
      per: 6
    });

    this.list = Res.data.products;
    //电脑
    const rs = await productList({
      product_category: res.data.categories[18]._id
    });

    rs.data.products.forEach((v, i) => {
      if (i == rs.data.products.length - 1) {
        return;
      }
      this.list.push(v);
    });
  }
};
</script>

<style>
.shuoming_s {
  margin: 30px 0 0 30px;
  line-height: 49px;
  font-size: 33px;
  color: #4a4a4a;
}
</style>