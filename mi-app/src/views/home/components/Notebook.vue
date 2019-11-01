<template>
  <div class="tv">
    <!-- 轮播图 -->
    <div class="lunBoWrap">
      <div class="noteLunBo">
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
          <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 人群购机指南 -->
    <div class="peopleWrap">
      <h2>人群购机指南</h2>
      <div class="peopleItem">
        <a
          href="javascript:;"
          :key="item._id"
          v-for="item in list4"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <img :src="item.coverImg" alt="图片加载失败" />
        </a>
      </div>
    </div>
    <!-- 米粉最爱top5 -->
    <div class="miFansWrap">
      <h2>米粉最爱top5</h2>
      <div class="miFansBanner">
        <a href="javascriot:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=1144202250,4073053825&fm=26&gp=0.jpg"
            alt="加载图片失败"
          />
        </a>
      </div>
      <div class="miFansItems">
        <dl
          :key="item._id"
          v-for="item in list3"
          @click="$router.push({name:'cart',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt="图片加载失败" />
          </dt>
          <dd>
            <h3>{{item.name}}</h3>
            <p>{{item.descriptions}}</p>
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>
              <i>起</i>
            </p>
            <div class="goBuyBtn">立即购买</div>
          </dd>
        </dl>
      </div>
      <div class="miFansBanner miFansBannerTwo">
        <a href="javascriot:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=1144202250,4073053825&fm=26&gp=0.jpg"
            alt="加载图片失败"
          />
        </a>
      </div>
    </div>
    <!-- 精品推荐 -->
    <div class="recommendWrap">
      <h2>精品推荐</h2>

      <div class="recommendItemsTop">
        <dl
          :key="item._id"
          v-for="item in list2"
          @click="$router.push({name:'cart',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt="图片加载失败" />
          </dt>
          <dd>
            <h3>{{item.name}}</h3>
            <p>{{item.descriptions}}</p>
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>&nbsp;&nbsp;&nbsp;
              <em>￥6699</em>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 笔电搭档 -->
    <div class="recommendWrap partner">
      <h2>笔电搭档</h2>
      <div class="recommendItemsTop recommendItemsBottom">
        <dl
          :key="item._id"
          v-for="item in list1"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt="图片加载失败" />
          </dt>
          <dd>
            <h3>{{item.name}}</h3>
            <p>{{item.descriptions}}</p>
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>
              <i>起</i>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { productList } from "../../../services/HomeGetData";
export default {
  name: "noteBook",
  data() {
    return { list1: [], list2: [], list3: [], list4: [] };
  },
  async created() {
    const res1 = await productList({
      page: 1,
      per: 6
      
    });
    this.list1 = res1.data.products;
    const res2 = await productList({
      page: 6,
      per: 3
    });
    this.list2 = res2.data.products;

    const res3 = await productList({
      page: 4,
      per: 4
    });
    this.list3 = res3.data.products;
    const res4 = await productList({
     product_category: "5db96d9ab2ac6a663931571c"
    });
    this.list4 = res4.data.products;
    this.list4.pop();
  }
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.lunBoWrap {
  background: url("../../../../public/img/note.png") no-repeat;
  background-size: 100% 275px;
  overflow: auto;
}
.noteLunBo {
  height: 421px;
  width: 868px;
  margin: 0 auto;
  margin-top: 33px;
  overflow: hidden;
  border-radius: 20px;
}
.noteLunBo img {
  height: 421px;
  width: 868px;
  /* border-radius: 5%; */
}
.peopleWrap {
  min-height: 719px;
  background: #f2fafd;
}
.peopleWrap h2 {
  text-align: center;
  font-size: 40px;
  line-height: 88px;
  padding-top: 60px;
  font-weight: 900;
}
.peopleItem {
  width: 858px;
  min-height: 545px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.peopleItem img {
  width: 285px;
  height: 280px;
  border-radius: 10px;
}
.miFansWrap {
  background: #6f9fdd;
  height: 2332px;
}
.miFansWrap h2 {
  color: white;
  text-align: center;
  font-size: 40px;
  line-height: 100px;
  padding-bottom: 40px;
}
.miFansBanner img {
  width: 870px;
  height: 336px;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
}
.miFansItems {
  width: 867px;
  height: 1501px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
.miFansItems dl {
  width: 420px;
  height: 720px;
  border-radius: 3%;
  background: white;
  text-align: center;
}
.miFansItems dl dt {
  height: 420px;
  width: 420px;
  text-align: center;
}
.miFansItems dl dt img {
  height: 420px;
  width: 420px;
}
.miFansItems dl dd h3 {
  font-size: 28px;
  color: black;
  padding: 0;
  font-weight: 900;
  line-height: 70px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.miFansItems dl dd p:nth-of-type(1) {
  font-size: 24px;
  padding-bottom: 40px;
}
.miFansItems dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 50px;
}
.miFansItems dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.miFansItems dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 34px;
}
.miFansItems .goBuyBtn {
  width: 308px;
  height: 64px;
  border-radius: 5px;
  background: #fe0000;
  text-align: center;
  line-height: 64px;
  font-size: 28px;
  font-weight: 800;
  color: #fff3f2;
  margin: 0 auto;
}
.miFansBannerTwo img {
  width: 100%;
}
/* 精品推荐 */

.recommendWrap {
  height: 623px;
  background: #9bbbec;
}
.recommendWrap h2 {
  text-align: center;
  font-size: 40px;
  line-height: 100px;
  padding-bottom: 40px;
  color: white;
}

.recommendItemsTop {
  width: 867px;
  min-height: 502px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  /* background: #9bbbec; */
}
.recommendItemsTop dl {
  width: 280px;
  height: 461px;
  border-radius: 3%;
  background: white;
  text-align: center;
}
.recommendItemsTop dl dt {
  height: 280px;
  width: 280px;
  text-align: center;
}
.recommendItemsTop dl dt img {
  height: 280px;
  width: 280px;
}
.recommendItemsTop dl dd h3 {
  font-size: 28px;
  color: black;
  padding: 0;
  font-weight: 900;
  line-height: 70px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.recommendItemsTop dl dd p:nth-of-type(1) {
  font-size: 24px;
  padding-bottom: 20px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.recommendItemsTop dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 50px;
}
.recommendItemsTop dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.recommendItemsTop dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 34px;
}
.recommendItemsTop dl dd p:nth-of-type(2) em {
  color: #b0b0b0;
  font-style: normal;
  text-decoration: line-through;
}
.partner {
  min-height: 1120px;
  background: #aacaf3;
}
.recommendItemsBottom {
  height: 978px;
}
</style>