<template>
  <div class="tv">
    <div class="tvLunBo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bb7101afd301b77d8558bf43dff8b0.jpg?w=2452&h=920"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5e5eb570bd8c932c41d111ecb4838.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hotAdvice">
      <h1>热门推荐</h1>
      <div class="hotAdvice_item">
        <a
          href="javascript:;"
          :key="item._id"
          v-for="item in list5"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
          style="background:#fff;margin-top:10px;"
        >
          <img :src="item.coverImg" alt="图片加载失败" />
        </a>
      </div>
    </div>
    <div class="superItem">
      <h1>超级品类日畅销榜T0P6</h1>
      <div class="superItem_top">
        <dl
          :key="item._id"
          v-for="item in list3"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt="图片加载失败" />
          </dt>
          <dd>
            <h2>{{item.name}}</h2>
            <p>{{item.descriptions}}</p>
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>&nbsp;&nbsp;&nbsp;
              <em>￥6699</em>
            </p>
          </dd>
        </dl>
      </div>
      <h1>11.11开门红预售 交定金享8重壕礼</h1>
      <div class="superItem_middle">
        <dl
          :key="item._id"
          v-for="item in list4"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt />
          </dt>
          <dd>
            <h2>{{item.name}}</h2>
            <p>{{item.descriptions}}</p>
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="lastGroup">
      <h1>11.11提前抢最后一波&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价保11.11</h1>

      <dl
        :key="item._id"
        v-for="item in list6"
        @click="$router.push({name:'particulars',query:{id:item._id}})"
      >
        <dt>
          <img :src="item.coverImg" alt />
        </dt>
        <dd>
          <h2>{{item.name}}</h2>
          <p>{{item.descriptions}}</p>
          <p>
            <i>￥</i>
            <span>{{item.price}}</span>
          </p>
        </dd>
      </dl>
    </div>
    <div class="lastGroup newHot">
      <h1>
        <p>往期活动中奖名单公示</p>新品火爆热卖中
      </h1>
      <dl
        :key="item._id"
        v-for="item in list2"
        @click="$router.push({name:'particulars',query:{id:item._id}})"
      >
        <dt>
          <img :src="item.coverImg" alt="图片加载失败" />
        </dt>
        <dd>
          <h2>{{item.name}}</h2>
          <p>{{item.descriptions}}</p>
          <p>
            <i>￥</i>
            <span>{{item.price}}</span>
          </p>
        </dd>
      </dl>
    </div>
    <div class="lastGroup moreGoods">
      <h1>更多好物</h1>
      <dl
        :key="item._id"
        v-for="item in list1"
        @click="$router.push({name:'particulars',query:{id:item._id}})"
      >
        <dt>
          <img :src="item.coverImg" />
          <!-- <p>{{item.coverImg}}</p> -->
        </dt>
        <dd>
          <h2>{{item.name}}</h2>
          <p>{{item.descriptions}}</p>
          <p>
            <i>￥</i>
            <span>{{item.price}}</span>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { productList } from "../../../services/HomeGetData";

export default {
  data() {
    return {
      active: 0,
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: []
    };
  },
  async created() {
    const res1 = await productList({
      page: 1,
      per: 10,
      product_category: "5db96d9ab2ac6a663931571c"
    });
    this.list1 = res1.data.products;
    this.list1.pop();
    const res2 = await productList({
      page: 2,
      per: 6
    });
    this.list2 = res2.data.products;
    const res3 = await productList({
      page: 4,
      per: 6
    });
    this.list3 = res3.data.products;
    const res4 = await productList({
      page: 1,
      per: 6
    });
    this.list4 = res4.data.products;

    const res5 = await productList({
      page: 5,
      per: 6
    });
    this.list5 = res5.data.products;
    const res6 = await productList({
      page: 6,
      per: 3
    });
    this.list6 = res6.data.products;
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.tvLunBo {
  height: 457px;
}
.tvLunBo img {
  display: block;
  height: 457px;
  width: 910px;
}
.hotAdvice {
  background: #f0eeef;
  height: 553px;
  font-size: 36px;
  text-align: center;
}
.hotAdvice h1 {
  line-height: 110px;
  font-weight: normal;
  color: #00f;
}
.hotAdvice_item {
  width: 860px;
  height: 416px;
  background: wheat;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}
.hotAdvice_item img {
  width: 276px;
  height: 204px;
  border-radius: 10%;
}
.superItem {
  background: #92aef7;
}
.superItem h1 {
  text-align: center;
  color: white;
  font-size: 45px;
  line-height: 168px;
}
.superItem_top {
  width: 868px;
  min-height: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  margin: 0 auto;
}
.superItem_top dl {
  overflow: hidden;
  text-align: center;
  width: 280px;
  height: 400px;
  margin-top: 10px;
  border-radius: 3%;
  background: white;
}
.superItem_top dl dt {
  height: 333px;
  width: 280px;
}
.superItem_top dl dt img {
  height: 263px;
  width: 280px;
}
.superItem_top dl dd h2 {
  font-size: 44px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.superItem_top dl dd p:nth-of-type(1) {
  font-size: 28px;
  line-height: 50px;
}
.superItem_top dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 90px;
}
.superItem_top dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.superItem_top dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 28px;
}
.superItem_top dl dd p:nth-of-type(2) em {
  color: #b0b0b0;
  font-style: normal;
  text-decoration: line-through;
}
.superItem_middle {
  width: 868px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  margin: 0 auto;
  min-height: 550px;
}
.superItem_middle dl {
  overflow: hidden;
  text-align: center;
  width: 280px;
  height: 400px;
  margin-top: 10px;
  border-radius: 3%;
  background: white;
}
.superItem_middle dl dt {
  height: 333px;
  width: 280px;
}
.superItem_middle dl dt img {
  height: 333px;
  width: 280px;
}
.superItem_middle dl dd h2 {
  font-size: 44px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.superItem_middle dl dd p:nth-of-type(1) {
  font-size: 28px;
  line-height: 50px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
}
.superItem_middle dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 90px;
}
.superItem_middle dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.superItem_middle dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 28px;
}
.lastGroup {
  background: #f07661;
  padding: 0 25px;
  width: 868px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  /* min-height: 790px; */
  padding-bottom: 20px;
}
.lastGroup h1 {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 45px;
  line-height: 168px;
}
.newHot h1 p {
  font-size: 30px;
  line-height: 78px;
}
.newHot h1 {
  line-height: 90px;
}
.newHot h1 p {
  font-size: 30px;
  line-height: 68px;
}
.lastGroup dl {
  overflow: hidden;
  text-align: center;
  width: 280px;
  height: 500px;
  border-radius: 3%;
  background: white;
  margin: 5px 0;
}
.lastGroup dl dt {
  height: 333px;
  width: 280px;
}
.lastGroup dl dt img {
  height: 333px;
  width: 280px;
}
.lastGroup dl dd h2 {
  font-size: 44px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}

.lastGroup dl dd p:nth-of-type(1) {
  font-size: 28px;
  line-height: 50px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
}
.lastGroup dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 90px;
}
.lastGroup dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.lastGroup dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 28px;
}
.moreGoods {
  background: #92acf6;
}
</style>