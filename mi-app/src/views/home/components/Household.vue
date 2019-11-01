<template>
  <div class="houseHold">
    <!-- 轮播图 -->
    <div class="houseLunBo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3149653761,3169391982&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=726024100,2233542198&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3735749947,1156228866&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2315678205,1131885116&fm=11&gp=0.jpg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 挑，你所需要 -->
    <div class="requireWrap">
      <h2>挑，你所需要</h2>
      <div class="requireItems">
        <a href="javascripts:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=2656278135,3443311888&fm=11&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
        <a href="javascripts:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=2656278135,3443311888&fm=11&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
        <a href="javascripts:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=2656278135,3443311888&fm=11&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
        <a href="javascripts:;">
          <img
            src="http://img3.imgtn.bdimg.com/it/u=2656278135,3443311888&fm=11&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
      </div>
    </div>
    <!-- 热销榜单top3 -->
    <div class="hotSales">
      <h2>热销榜单top3</h2>
      <div class="hotSales_items">
        <!-- <dl>
          <dt>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=250&h=250&f=webp&q=90"
              alt
            />
          </dt>
          <dd>
            <h3>小米笔记本15.6'</h3>

            <p>
              <i>￥</i>
              <span>2699</span>&nbsp;&nbsp;&nbsp;
              <em>￥6699</em>
            </p>
          </dd>
        </dl>-->
        <dl
          :key="item._id"
          v-for="item in list2"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
        >
          <dt>
            <img :src="item.coverImg" alt="图片加载失败" />
          </dt>
          <dd>
            <h3>{{item.name}}</h3>
            <!-- <p>{{item.descriptions}}</p> -->
            <p>
              <i>￥</i>
              <span>{{item.price}}</span>&nbsp;&nbsp;&nbsp;
              <em>￥6699</em>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 每日必逛 -->
    <div class="newProducts_wrap">
      <h2>每日必逛</h2>
      <div class="newProducts_items">
        <a href="javascripts:;">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=269709829,385268536&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
        <a href="javascripts:;">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=269709829,385268536&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
        <a href="javascripts:;">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=269709829,385268536&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </a>
      </div>
    </div>
    <!-- 尖货集结 -->
    <div class="gatherWrap">
      <h2>尖货集结</h2>
      <div class="gatherItems">
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
            <div class="goBuyBtn">立即购买</div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 米家冰箱 -->
    <div class="gatherWrap miBingxiang">
      <h2>米家冰箱</h2>
      <div class="gatherItems">
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
            <div class="goBuyBtn">立即购买</div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 洗衣好助手 -->
    <div class="gatherWrap miXiYi">
      <h2>洗衣好助手</h2>
      <div class="gatherItems">
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
            <div class="goBuyBtn">立即购买</div>
          </dd>
        </dl>
      </div>
    </div>
    <!--  自洁清新 静享好睡眠-->
    <div class="gatherWrap ziJie">
      <h2>自洁清新 静享好睡眠</h2>
      <div class="gatherItems">
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
            <div class="goBuyBtn">立即购买</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { productList } from "../../../services/HomeGetData";

export default {
  name: "houseHold",
  data() {
    return { active: 0, list1: [], list2: [] };
  },
  methods: {},
  async created() {
    const res1 = await productList({
      page: 2,
      per: 4
    });
    this.list1 = res1.data.products;
    const res2 = await productList({
      page: 3,
      per: 3
    });
    this.list2 = res2.data.products;
  }
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}

.houseLunBo {
  height: 456px;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
}
.houseLunBo img {
  height: 456px;
  width: 100%;
}
.requireWrap {
  height: 500px;
  background: #efefef;
}
.requireWrap h2 {
  font-size: 42px;
  line-height: 112px;
  font-weight: 900;
  text-align: center;
}
.requireItems {
  width: 859px;
  height: 357px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}
.requireItems img {
  width: 425px;
  height: 174px;
  display: block;
  border-radius: 10px;
}
.hotSales {
  height: 612px;
  background: #72b0df;
}
.hotSales h2 {
  font-size: 42px;
  line-height: 121px;
  font-weight: 900;
  text-align: center;
  color: white;
}
.hotSales_items {
  height: 464px;
  width: 883px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}

.hotSales_items dl {
  width: 280px;
  height: 461px;
  border-radius: 3%;
  background: white;
  text-align: center;
  margin-top: 10px;
}
.hotSales_items dl dt {
  height: 280px;
  width: 280px;
  text-align: center;
}
.hotSales_items dl dt img {
  height: 280px;
  width: 280px;
}
.hotSales_items dl dd h3 {
  font-size: 28px;
  color: black;
  padding: 0;
  font-weight: 900;
  line-height: 70px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 220px;
  margin: 0 auto;
  overflow: hidden;
}

.hotSales_items dl dd p:nth-of-type(1) {
  font-size: 24px;
  line-height: 50px;
}
.hotSales_items dl dd p:nth-of-type(1) i {
  color: #ff463b;
  font-style: normal;
}
.hotSales_items dl dd p:nth-of-type(1) span {
  color: #ff463b;
  font-size: 34px;
}
.hotSales_items dl dd p:nth-of-type(1) em {
  color: #b0b0b0;
  font-style: normal;
  text-decoration: line-through;
}
.newProducts_wrap {
  height: 342px;
  background: #efefef;
}
.newProducts_wrap h2 {
  font-size: 42px;
  line-height: 119px;
  font-weight: 900;
  text-align: center;
}
.newProducts_items {
  width: 860px;
  height: 205px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.newProducts_items img {
  width: 272px;
  height: 205px;
  border-radius: 10px;
}

/* 尖货集结 */
.gatherWrap {
  background: #6f9fdd;
}
.gatherWrap h2 {
  color: white;
  text-align: center;
  font-size: 40px;
  line-height: 126px;
}

.gatherItems {
  width: 872px;
  min-height: 762px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
.gatherItems dl {
  width: 420px;
  height: 720px;
  border-radius: 3%;
  background: white;
  text-align: center;
  margin-top: 20px;
}
.gatherItems dl dt {
  height: 420px;
  width: 420px;
  text-align: center;
}
.gatherItems dl dt img {
  height: 420px;
  width: 420px;
}
.gatherItems dl dd h3 {
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
.gatherItems dl dd p:nth-of-type(1) {
  font-size: 24px;
  padding-bottom: 40px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.gatherItems dl dd p:nth-of-type(2) {
  font-size: 24px;
  line-height: 50px;
}
.gatherItems dl dd p:nth-of-type(2) i {
  color: #ff463b;
  font-style: normal;
}
.gatherItems dl dd p:nth-of-type(2) span {
  color: #ff463b;
  font-size: 34px;
}
.gatherItems .goBuyBtn {
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
.miBingxiang {
  background: #72b0df;
}
.miXiYi {
  background: #eec462;
}
.ziJie {
  background: #f4a297;
}
</style>