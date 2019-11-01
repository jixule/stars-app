<template>
  <div class="index">
    <div class="nav_sousuo">
      <div class="nav_ha" @click="$router.push({name:'search'})">
        <span class="iconfont icon-fangdajing1"></span>
        <span>Redmi 8</span>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="discover_carousel">
      <van-swipe :autoplay="3000" indicator-color="white" class="discover_carousel">
        <van-swipe-item v-for="(v,i) in arr " :key="i">
          <img :src="v" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 消息 -->

    <div class="stream">
      <div
        class="details"
        v-for="(v,i) in list "
        :key="i"
        @click="$router.push({name:'particulars',query:{
          id:v._id
        }})"
      >
        <a href="#" class="details_a">
          <p class="img">
            <img :src="v.coverImg" alt />
          </p>
          <span>￥{{v.price}}</span>
          <p class="shuoming">{{v.name}}</p>
        </a>
        <div class="head_portrait">
          <p class="head_portrait_1">
            <img src="#" alt />
            <span></span>
          </p>
          <p>
            <span class="iconfont icon-yanjing"></span>
            <span>1120</span>
          </p>
        </div>
      </div>
    </div>
    <div class="chengshi"></div>
  </div>
</template>

<script>
import $ from "jquery";
import { productList, product } from "../../services/HomeGetData";
export default {
  name: "index",
  data() {
    return {
      list: [],
      arr: [
        "http://img2.imgtn.bdimg.com/it/u=2597324388,4151724402&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=808767077,3382088805&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=3640307874,847096815&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=2201404768,3801586724&fm=26&gp=0.jpg"
      ]
    };
  },
  async created() {
    const res = await product({
      per: 100,
      page: 1
    });
    // 手机
    const Res = await productList({
      product_category: res.data.categories[18]._id
    });

    this.list = Res.data.products;
    //电脑
    const rs = await productList({
      product_category: res.data.categories[17]._id
    });

    rs.data.products.forEach(v => {
      this.list.push(v);
    });
  }
};
</script>

<style>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.discover_index {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_sousuo {
  width: 100%;
  height: 133px;
  background: #fff;
}
.chengshi {
  width: 800px;
  height: 150px;
}
.nav_ha {
  margin: 20px auto;
  width: 864px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background: #f4f4f4;
  color: #b6b6b6;
  border-radius: 20px;
}
.nav_ha .iconfont {
  font-size: 32px;
  margin: 0 0 0 20px;
}
.discover_carousel {
  width: 864px;
  height: 301px;
  border-radius: 20px;
  overflow: hidden;
}
.discover_carousel img {
  width: 100%;
  height: 100%;
}
.discover_news {
  width: 100%;
  display: flex;
  height: 131px !important;
  background: #f6f6f6;
  overflow-x: auto;
  white-space: nowrap;
  font-size: 40px !important;
}
.van-icon {
  font-size: 44px !important;
}
.van-notice-bar__wrap {
  line-height: 131px;
  width: 100%;
  height: 131px !important;
}
.van-notice-bar__content {
  width: 100%;
  height: 131px;
}
.stream {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.details {
  width: 415px;
  height: 677px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  font-size: 40px;
  margin-top: 20px;
}
.details_a span {
  margin-left: 30px;
  line-height: 75px;
  font-size: 25px;
  color: #838383;
}
.shuoming {
  margin-left: 30px;
  line-height: 39px;
  font-size: 33px;
  color: #4a4a4a;
}
.head_portrait {
  margin: 24px 30px;
  width: 353px;
  height: 53px;
  display: flex;
  color: #7f7f7f;
  font-size: 23px;
  justify-content: space-between;
  line-height: 53px;
}
.head_portrait .iconfont {
  font-size: 22px;
}
.head_portrait_1 {
  display: flex;
}
.head_portrait_1 span {
  margin-left: 10px;
  line-height: 53px;
}
.head_portrait img {
  width: 51px;
  height: 51px;
  border-radius: 50%;
}
.img {
  width: 415px;
  height: 415px;
}
.img img {
  width: 100%;
  height: 100%;
}
</style>