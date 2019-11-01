 <template>
  <div class="phone">
    <div class="phone-header">
      <van-swipe :autoplay="2000" indicator-color="white" class="header-lunbo">
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})">
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7296e37091887574eb3dedb2e4cca07.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})">
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d349f5b290fa3dd4ecedd264aa01eae.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
        <van-swipe-item  @click="$router.push({name:'particulars',query:{id:'5db98553fd60810446bd302e'}})">
          <img
            data-v-79a5cf42
            class="swiper-lazy swiper-lazy-loaded"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1fd6bc78eea2049ac38396123bed9d2d.jpg?thumb=1&amp;w=720&amp;h=360"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="phone-classify">
      <div class="phone-classify-top">
        <img
          class="big"
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b33a790a7e80597fee4956ab95eb60f.jpg?thumb=1&amp;w=696&amp;h=436"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b33a790a7e80597fee4956ab95eb60f.jpg?thumb=1&amp;w=696&amp;h=436"
          lazy="loaded"
        />
        <div class="phone-top-bottom">
          <div class="top-left">
            <h3>小米9 SE</h3>
            <p>索尼4800万三摄，晓龙712</p>
          </div>
          <div class="top-right">
            <div>
              <a>￥1599起</a>
              <span>￥1999</span>
            </div>
            <a class="top-left-a">立即购买</a>
          </div>
        </div>
      </div>
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
            <span>￥{{item.price+500}}</span>
          </p>
        </div>
      </div>

      <div class="Hot-sell">
        <h2>热销爆款</h2>
        <van-swipe :loop="false" :width="170" :height="250">
          <van-swipe-item
            v-for="(item,i) in alist"
            :key="i"
            @click="$router.push({name:'particulars',query:{id:item._id}})"
          >
            <div>
              <img :src="item.coverImg" lazy="loaded" />
              <h3>{{item.name}}</h3>
              <h4>高速路由新体验</h4>
              <h5>￥{{item.price}}起</h5>
              <button>立即购买</button>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="phone-character">
        <h2>品质推荐</h2>
        <div class="phone-character-img">
          <a href>
            <img
              data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/39c2b5f9cdd6c7ecb6bb4bd93b38763e.jpg?thumb=1&amp;w=720&amp;h=200"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/39c2b5f9cdd6c7ecb6bb4bd93b38763e.jpg?thumb=1&amp;w=720&amp;h=200"
              lazy="loaded"
            />
          </a>
        </div>
        <div class="phone-character-main">
          <div v-for="(item,i) in aolist" :key="i"  @click="$router.push({name:'particulars',query:{id:item._id}})">
            <img :src="item.coverImg" lazy="loaded" />
            <h3>{{item.name}}</h3>
            <h4>千元4800万四摄</h4>
            <h5>￥{{item.price}}起</h5>
            <button>立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import { product, productList } from "../../../services/HomeGetData";
import "../../../assets/resetui.css";
export default {
  data() {
    return {
      list: [],
      alist: [],
      aolist: []
    };
  },
  async created() {
    const res = await product({
      per: 100,
      page: 1
    });
    const Res = await productList({
      product_category: res.data.categories[19]._id
    });
    const Rs = await productList({
      product_category: res.data.categories[10]._id
    });
    const R = await productList({
      product_category: res.data.categories[14]._id
    });
    this.list = Res.data.products;
    this.list.pop();
    this.alist = Rs.data.products;
    this.aolist = R.data.products;
  }
  
};
</script>
<style scoped>
.phone {
  flex: 1;
  overflow: auto;
  height: 100%;
}
.header-lunbo {
  height: 455px;
  width: 100%;
}
.header-lunbo img {
  height: 100%;
  width: 100%;
}
.phone-classify {
  height: 100%;
}
/* 手机预售 */
.phone-classify-top {
  padding: 0 15px;
}
.phone-classify-top img {
  height: 555px;
  width: 100%;
  display: block;
}
.phone-top-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-left h3 {
  font-size: 43px;
  font-weight: 900;
}
.top-left p {
  font-size: 30px;
  width: 400px;
  height: 45px;
}

.top-right div a {
  font-size: 31px;
  color: #ec5a52;
}
.top-right div span {
  font-size: 20px;
  color: #a8a8a8;
  text-decoration: line-through;
}
.top-left-a {
  height: 76px;
  width: 274px;
  font-size: 31px;
  background: #eb625c;
  display: block;
  color: #fff;
  text-align: center;
  line-height: 76px;
}

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
  height: 284px;
}
.phone-classify-presell div h3 {
  font-size: 35px;
  font-weight: 900;
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
/* 热销爆款 */
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
  border-right: 5px solid #e6e7fb;
}
.Hot-sell div img {
  width: 100%;
  height: 300px;
}
.Hot-sell div h3 {
  font-size: 26px;
  text-align: center;
  line-height: 40px;
}
.Hot-sell div h4 {
  font-size: 19px;
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
  margin-left: 140px;
  margin-top: 50px;
  border: 0;
  margin-right: 10px;
  width: 222;
  height: 60px;
}
/* 品质推荐 */
.phone-character {
  min-height: 490px;
  background: #e6e7fb;
}
.phone-character h2 {
  font-size: 44px;
  color: #5a38da;
  height: 135px;
  text-align: center;
  line-height: 135px;
}
.phone-character-img {
  height: 355px;
}
.phone-character-img a img {
  height: 100%;
  width: 100%;
}
.phone-character-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.phone-character-main div {
  width: 49%;
  background: #fff;
  border-bottom: solid 20px #e6e7fb;
}

.phone-character-main div img {
  width: 100%;
}
.phone-character-main div h3 {
  font-size: 26px;
  text-align: center;
  line-height: 40px;
}
.phone-character-main div h4 {
  font-size: 19px;
  text-align: center;
  line-height: 40px;
}
.phone-character-main div h5 {
  font-size: 27px;
  color: #e9645a;
  text-align: center;
  line-height: 40px;
}
.phone-character-main div button {
  font-size: 26px;
  background: #e9645a;
  color: #fff;
  margin-left: 110px;
  margin-top: 50px;
  border: 0;
  margin-right: 10px;
  width: 222px;
  height: 60px;
}
</style>