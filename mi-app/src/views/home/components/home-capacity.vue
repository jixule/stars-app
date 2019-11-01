<template>
  <div class="capacity">
    <!-- 轮播 -->
    <div class="capacity-carousel">
      <van-swipe :autoplay="2000" indicator-color="white" class="header-lunbo">
        <van-swipe-item @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7296e37091887574eb3dedb2e4cca07.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d349f5b290fa3dd4ecedd264aa01eae.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1fd6bc78eea2049ac38396123bed9d2d.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 新品上线 -->
    <div class="Hot-sell">
      <h2>新品上线</h2>
      <van-swipe :loop="false" :width="170" :height="250">
        <van-swipe-item
          v-for="(item,i) in alist"
          :key="i"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <div>
            <img :src="item.coverImg" lazy="loaded" />
            <h3>{{item.name}}</h3>
            <h4>千元4800万四摄</h4>
            <h5>￥{{item.price}}起</h5>
            <button>立即购买</button>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热卖爆品 -->
    <div class="capacity-hot">
      <h2>热卖爆品</h2>
      <div class="phone-classify-presell">
        <div
          v-for="(item,i) in list"
          :key="i"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <img class="big" :src="item.coverImg" />
          <h3>{{item.name}}</h3>
          <p>
            <a>￥{{item.price}}</a>
            <span>￥{{item.price+1000}}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 新品速递 -->
    <div class="capacity-hot">
      <h2 style="background:#84b9ff;">热卖爆品</h2>
      <div class="phone-classify-presell">
        <div
          v-for="(item,i) in seckill"
          :key="i"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <img class="big" :src="item.coverImg" />
          <h3>{{item.name}}</h3>
          <p>
            <a>￥{{item.price}}</a>
            <span>￥{{item.price+800}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { product, productList } from "../../../services/HomeGetData";
export default {
  data() {
    return {
      list: [],
      seckill: [],
      alist: []
    };
  },
  async created() {
    const res = await product({
      per: 100,
      page: 1
    });
    // 手机
    const Res = await productList({
      product_category: res.data.categories[17]._id
    });
    this.list = Res.data.products;
    this.list.pop();

    //电脑
    const rs = await productList({
      product_category: res.data.categories[18]._id
    });
    this.seckill = rs.data.products;
    this.seckill.shift();
    const r = await productList({
      product_category: res.data.categories[19]._id
    });
    this.alist=r.data.products;
  }
};
</script>
<style scoped>
.capacity-carousel {
  height: 455px;
  width: 100%;
}
.capacity-carousel img {
  height: 100%;
  width: 100%;
}

/* 新品上线 */
.Hot-sell {
  background: #e6e7fb;
}
.Hot-sell h2 {
  font-size: 46px;
  height: 115px;
  text-align: center;
  line-height: 115px;
  color: #5a38da;
}
.Hot-sell div {
  background: #fff;
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
  text-align: center;
  border-right: 5px solid #e6e7fb;
}
.Hot-sell div img {
  width: 100%;
  height: 350px;
}
.Hot-sell div h3 {
  font-size: 26px;
  text-align: center;
  line-height: 40px;
}
.Hot-sell div h4 {
  font-size: 15px;
  text-align: center;
  line-height: 40px;
}
.Hot-sell div h5 {
  font-size: 27px;
  color: #e9645a;
  text-align: center;
  line-height: 40px;
}
.Hot-sell div button {
  font-size: 26px;
  background: #e9645a;
  color: #fff;
  margin-top: 50px;
  border: 0;
  width: 222px;
  height: 60px;
}
.capacity-hot {
  min-height: 1000px;
}
.capacity-hot h2 {
  height: 140px;
  width: 100%;
  background: #feb155;
  color: #fff;
  font-size: 47px;
  text-align: center;
  line-height: 140px;
}

/* 热卖爆品 */
.phone-classify-presell {
  min-height: 450px;
  width: 100%;
  background: #e6e7fb;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.phone-classify-presell div {
  width: 284px;
  height: 460px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.phone-classify-presell div img {
  width: 284px;
  height: 250px;
}
.phone-classify-presell div h3 {
  font-size: 35px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.phone-classify-presell div p a {
  font-size: 27px;
  color: #d37b7a;
}
.phone-classify-presell div p span {
  font-size: 20px;
  color: #999999;
  text-decoration: line-through;
}
</style>