<template>
  <div class="recommend">
    <!-- 轮播 -->
    <div class="recommend-top">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          class="swipeimg"
          @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})"
        >
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item
          class="swipeimg"
          @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})"
        >
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/24421d2557f527f6558ce6bb3049b572.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item
          class="swipeimg"
          @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})"
        >
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/24421d2557f527f6558ce6bb3049b572.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 秒杀 -->
    <div class="recomment-nav">
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
      <a href="javascript:;">
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152"
          lazy="loaded"
        />
      </a>
    </div>
    <!-- 早报 -->
    <div class="recommend-article">
      <a>商城早报</a>|
      <span>手机最新热闻汇：多项成长颇有分量</span>
    </div>
    <div class="recommend-aside">
      <a
        class="recommend-aside-left"
        @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})"
      >
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?thumb=1&amp;w=358&amp;h=508"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?thumb=1&amp;w=358&amp;h=508"
        />
      </a>
      <a
        class="recommend-aside-right"
        @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})"
      >
        <img
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4aea81c738383c9787b49c3d5e6a7ab0.jpg?thumb=1&amp;w=358&amp;h=252"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4aea81c738383c9787b49c3d5e6a7ab0.jpg?thumb=1&amp;w=358&amp;h=252"
          lazy="loaded"
        />
        <img
          @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})"
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b903c4d886ba5b9a1237ca6cefc3284.jpg?thumb=1&amp;w=358&amp;h=252"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b903c4d886ba5b9a1237ca6cefc3284.jpg?thumb=1&amp;w=358&amp;h=252"
          lazy="loaded"
        />
      </a>
    </div>
    <div class="recommend-img">
      <img
        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a534dd562cd6bba471c7c9ad49a86e7.jpg?thumb=1&amp;w=720&amp;h=280"
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a534dd562cd6bba471c7c9ad49a86e7.jpg?thumb=1&amp;w=720&amp;h=280"
        lazy="loaded"
      />
    </div>
    <!-- 商品秒杀 -->
    <div class="recomment-seckill">
      <div class="rocomment-seckill-top">
        <p>商品秒杀</p>
        <div>
          <a>14点场</a>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="item">{{ timeData.hours }}</span>
              <span>：</span>
              <span class="item">{{ timeData.minutes }}</span>
              <span>：</span>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
      <div class="rocomment-seckill-right">
        <van-swipe :loop="false" :width="112" >
          <van-swipe-item
            v-for="(item,i) in seckill"
            :key="i"
            @click="$router.push({name:'particulars',query:{id:item._id}})"
          >
            <div>
              <img style="width:112px;height:112px;" :src="item.coverImg" />
              <p class="rihgt-p">
                <span>￥{{item.price}}</span>
                <a>￥{{item.price+100}}</a>
              </p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <img
      class="seckill-img"
      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360"
    />
    <!--某类产品-->
    <div class="recommend-footer">
      <div class="recommend-footer-div">
        <div
          v-for="(item,i) in list"
          :key="i"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <img
            class="big"
            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/67af8c5df281feb89083c94a69ad4e23.jpg?thumb=1&amp;w=344&amp;h=280"
            :src="item.coverImg"
          />
          <h4>{{item.name}}</h4>
          <h5>全面屏手机，人工智能语音</h5>
          <p>￥{{item.price}}</p>
          <button>立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { product, productList } from "../../../services/HomeGetData";
export default {
  name: "djife",
  data() {
    return {
      time: 1111111111111111111,
      timeData: {
        hours: 8,
        minutes: 6,
        seconds: 55
      },
      list: [],
      seckill: []
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
    this.list.pop()
    //电脑
    const rs = await productList({
      product_category: res.data.categories[17]._id
    });
    this.seckill = rs.data.products;
    for (let i = 0; i < 20; i++) {
      var a = await productList({
        product_category: res.data.categories[i]._id
      });
    }
  }
};
</script>
<style scoped>
.recommend {
  height: 100%;
  overflow: auto;
}
.swipeimg img {
  height: 500px;
  width: 100%;
}
/* 秒杀 */
.recomment-nav {
  width: 100%;
  padding: 35px 45px 25px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.recomment-nav a {
  width: 163px;
  height: 160px;
}
.recomment-nav a img {
  width: 163px;
  height: 160px;
}
/* 商城早报 */
.recommend-article {
  width: 100%;
  height: 100px;
  color: #d0d0d0;
  font-size: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #e0e0e0;
  overflow: hidden;
}
.recommend-article a {
  font-size: 30px;
  color: #f26748;
}
.recommend-article span {
  font-size: 30px;
  color: #000;
}
/* 图片 */
.recommend-aside {
  height: 660px;
  padding: 0 30px;
  border-top: solid 20px #f5f5f5;
  border-bottom: solid 20px #f5f5f5;
  display: flex;
  justify-content: space-around;
}
.recommend-aside-left {
  width: 416px;
}

.recommend-aside-left img {
  width: 100%;
  height: 100%;
}
.recommend-aside-right {
  width: 416px;
}
.recommend-aside-right img {
  width: 100%;
  height: 322px;
}

/* 图片 */
.recommend-img {
  height: 355px;
  border-bottom: #f5f5f5 solid 20px;
}
.recommend-img img {
  width: 100%;
  height: 100%;
}

/* 商品秒杀 */
.item {
  display: inline-block;
  width: 41px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #5a5a5a;
  height: 36px;
  line-height: 36px;
}

.recomment-seckill {
  min-height: 455px;
}
.rocomment-seckill-top {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.rocomment-seckill-top p {
  height: 41px;
  font-size: 41px;
  color: #ff6200;
}
.rocomment-seckill-top div {
  display: flex;
}
.rocomment-seckill-top div a {
  font-size: 35px;
  height: 35px;
  margin-right: 20px;
}
.rocomment-seckill-right {
  height: 355px;
}
.rocomment-seckill-right span {
  font-size: 27px;
  color: #d86924;
}
.rocomment-seckill-right a {
  font-size: 19px;
  text-decoration: line-through;
}

.rihgt-p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.seckill-img {
  height: 355px;
  width: 100%;
  border-bottom: solid #f5f5f5 10px;
}
/* 某类产品 */
.recommend-footer img {
  height: 550px;
  width: 100%;
}
.recommend-footer-div {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  justify-content: space-between;
  background: #e6e7fb;
}
.recommend-footer-div div {
  height: 627px;
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  margin-top: 20px;
}
.recommend-footer-div div img {
  width: 430px;
  height: 350px;
}
.recommend-footer-div div h4 {
  font-size: 34px;
  font-weight: 900;
  width: 260px;
  text-align: center;
}
.recommend-footer-div div h5 {
  font-size: 23px;
  text-align: center;
}
.recommend-footer-div div p {
  font-size: 27px;
  color: #eb585e;
  width: 95px;
}
.recommend-footer-div div button {
  font-size: 24px;
  background: #eb585e;
  border: 0;
  color: #fff;
  width: 222px;
  height: 61px;
}
</style>