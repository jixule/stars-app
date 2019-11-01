<template>
  <div class="lifeAround">
    <!-- 轮播图 -->
    <div class="lifeLunBo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3015052872,260346772&fm=26&gp=0.jpg"
          />
        </van-swipe-item >
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4100773471,2405302913&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2636833327,902615927&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3735749947,1156228866&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302f'}})">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1999115787,140953583&fm=11&gp=0.jpg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 家居生活 -->
    <div class="dotNav">
      <dl>
        <dt>
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1809113756,3097305352&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </dt>
        <dd>家居生活</dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1809113756,3097305352&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </dt>
        <dd>箱包出行</dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1809113756,3097305352&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </dt>
        <dd>服装鞋类</dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1809113756,3097305352&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </dt>
        <dd>精品眼镜</dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1809113756,3097305352&fm=26&gp=0.jpg"
            alt="图片加载失败"
          />
        </dt>
        <dd>其他配件</dd>
      </dl>
    </div>

    <!-- 新品上线 -->
    <div class="newProducts">
      <h2>新品上线</h2>
      <div class="newProducts_items">
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
              <span>{{item.price}}</span>
              <em>￥6699</em>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 热卖爆品 -->
    <div class="hotProducts">
      <h2>热卖爆品</h2>
      <div class="hotProducts_items">
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
              <span>{{item.price}}</span>
              <em>￥6699</em>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 金秋焕新轮播 -->
    <div class="jinQiu">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=107291573,2660322030&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3735749947,1156228866&fm=26&gp=0.jpg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1999115787,140953583&fm=11&gp=0.jpg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 箱包出行 -->
    <div class="hotProducts">
      <h2>箱包出行</h2>
      <div class="hotProducts_items">
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
              <span>{{item.price}}</span>
              <em>￥6699</em>
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
  name: "life",
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
      per: 6
    });
    this.list2 = res2.data.products;
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.lifeLunBo {
  height: 459px;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
}
.lifeLunBo img {
  height: 459px;
  width: 100%;
}
/* 家居生活 */
.dotNav {
  height: 194px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 19px solid #f5f5f5;
  border-bottom: 19px solid #f5f5f5;
}
.dotNav dl {
  width: 106px;
  height: 121px;
  text-align: center;
}
.dotNav img {
  width: 87px;
  height: 87px;
  border-radius: 50%;
}
.dotNav dd {
  font-size: 25px;
  color: #d0d0d0;
}
/*  新品上线 */
.newProducts {
  height: 471px;
}
.newProducts h2 {
  font-size: 39px;
  line-height: 99px;
  padding-bottom: 30px;
  width: 840px;
  margin: 0 auto;
}
.newProducts_items {
  display: flex;
  overflow: auto;
  height: 327px;
  border-bottom: 19px solid #f5f5f5;
}
.newProducts_items dl {
  width: 337px;
  height: 327px;
  flex-shrink: 0;
  text-align: center;
}
.newProducts_items dl dt {
  height: 229px;

  text-align: center;
}
.newProducts_items dl dt img {
  height: 229px;
  width: 228px;
}
.newProducts_items dl dd h3 {
  font-size: 28px;
  color: black;
  padding: 0;
  font-weight: 900;
  line-height: 60px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 220px;
  margin: 0 auto;
  overflow: hidden;
}

.newProducts_items dl dd p:nth-of-type(1) {
  font-size: 24px;
  line-height: 40px;
}
.newProducts_items dl dd p:nth-of-type(1) i {
  color: #ff463b;
  font-style: normal;
}
.newProducts_items dl dd p:nth-of-type(1) span {
  color: #ff463b;
  font-size: 34px;
}
.newProducts_items dl dd p:nth-of-type(1) em {
  color: #b0b0b0;
  font-style: normal;
  text-decoration: line-through;
}

/* 热卖爆品 */
.hotProducts h2 {
  font-size: 39px;
  line-height: 99px;
  padding-bottom: 30px;
  width: 840px;
  margin: 0 auto;
  font-weight: 900;
}

.hotProducts_items {
  display: flex;
  overflow: auto;
  min-height: 450px;
  background: #f5f5f5;
  justify-content: space-around;
  align-items: center;
}
.hotProducts_items dl {
  width: 282px;
  /* height: 460px; */

  text-align: center;
}
.hotProducts_items dl dt {
  height: 277px;

  text-align: center;
}
.hotProducts_items dl dt img {
  height: 277px;
  width: 282px;
  border-radius: 10px;
}
.hotProducts_items dl dd h3 {
  font-size: 28px;
  color: black;
  padding: 0;
  font-weight: 900;
  line-height: 60px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 220px;
  margin: 0 auto;
  overflow: hidden;
}

.hotProducts_items dl dd p:nth-of-type(1) {
  font-size: 24px;
  line-height: 40px;
}
.hotProducts_items dl dd p:nth-of-type(1) i {
  color: #ff463b;
  font-style: normal;
}
.hotProducts_items dl dd p:nth-of-type(1) span {
  color: #ff463b;
  font-size: 34px;
}
.hotProducts_items dl dd p:nth-of-type(1) em {
  color: #b0b0b0;
  font-style: normal;
  text-decoration: line-through;
}
/* 金秋轮播 */
.jinQiu {
  height: 252px;
}
.jinQiu img {
  height: 252px;
  width: 100%;
}
</style>