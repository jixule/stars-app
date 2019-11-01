<template>
  <div class="classify">
    <header class="classifyHeader">
      <div class="hearderNav">
        <span class="iconfont icon-fangdajing"></span>
        <p @click="$router.push({name:'search'})">小米9 Pro 5G</p>
      </div>
      <div class="huihua">
        <p class="iconfont icon-iconfontzhizuobiaozhun023110"></p>
      </div>
    </header>
    <section class="classifySection">
      <van-row class="heights">
        <!-- 侧边导航栏 -->
        <van-col span="6">
          <ul class="leftList">
            <li>
              新品
              <p></p>
            </li>
            <li>
              众筹
              <p></p>
            </li>
            <li>
              小爱呵护
              <p></p>
            </li>
            <li>
              小爱智能
              <p></p>
            </li>
            <li>
              智能耳机
              <p></p>
            </li>
            <li>
              电脑
              <p></p>
            </li>
            <li>
              小爱百货
              <p></p>
            </li>
            <li>
              电动剃须
              <p></p>
            </li>
            <li>
              小爱快充
              <p></p>
            </li>
            <li>
              路由器
              <p></p>
            </li>
            <li>
              简约出行
              <p></p>
            </li>
            <li>
              智能家居
              <p></p>
            </li>
            <li>
              智能手环
              <p></p>
            </li>
            <li>
              个护健康
              <p></p>
            </li>
            <li>
              智能杂物
              <p></p>
            </li>
            <li>
              笔记本
              <p></p>
            </li>
            <li>
              小爱平板
              <p></p>
            </li>
            <li>
              优惠专区
              <p></p>
            </li>
            <li>
              小米手机
              <p></p>
            </li>
            <li>
              红米手机
              <p></p>
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="heights2">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=1?goods[0].products:''" :key="i">
                      <div @click="$router.push({path:`particulars?id=${v._id}`})">
                      <img 
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                      </div>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2155130021,1462592497&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;众筹&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=2?goods[1].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img2.imgtn.bdimg.com/it/u=1948817248,103469182&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小爱呵护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=3?goods[2].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1324099322,2480267745&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小爱智能&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=4?goods[3].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img1.imgtn.bdimg.com/it/u=384466444,3759076773&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能耳机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=5?goods[4].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img5.imgtn.bdimg.com/it/u=1984665396,4043664147&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小爱家居&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=6?goods[5].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img2.imgtn.bdimg.com/it/u=207731195,1940867481&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小爱百货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=7?goods[6].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img5.imgtn.bdimg.com/it/u=1363509966,2478951209&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电动剃须&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=8?goods[7].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img5.imgtn.bdimg.com/it/u=1194101060,2157091197&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小爱快充&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=9?goods[8].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img2.imgtn.bdimg.com/it/u=1996680621,2129160299&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;路由器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=10?goods[9].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img4.imgtn.bdimg.com/it/u=4290422370,1407332594&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时尚出行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=11?goods[10].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img1.imgtn.bdimg.com/it/u=2191603741,4042733380&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能家居&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=12?goods[11].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img5.imgtn.bdimg.com/it/u=1041361423,3124393312&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能手环&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=13?goods[12].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img2.imgtn.bdimg.com/it/u=944660198,240285864&fm=15&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个护健康&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=14?goods[13].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img5.imgtn.bdimg.com/it/u=1895423304,2916332307&fm=15&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能杂物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=15?goods[14].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img1.imgtn.bdimg.com/it/u=3063321734,2396225373&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;笔记本&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=16?goods[15].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img3.imgtn.bdimg.com/it/u=4030069809,4004685166&fm=26&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平板&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=17?goods[16].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img4.imgtn.bdimg.com/it/u=1771416735,2218665937&fm=15&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;优惠专区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=18?goods[7].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img2.imgtn.bdimg.com/it/u=1378605800,1157685456&fm=15&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小米手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=19?goods[18].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
              <div class="swiper-slide">
                <article class="article_one">
                  <img
                    class="banner_one"
                    src="http://img4.imgtn.bdimg.com/it/u=2841943808,3842663322&fm=15&gp=0.jpg"
                    alt="bannner01"
                  />
                  <h2
                    class="one_title"
                  >—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;红米手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—</h2>
                  <aside class="liu_one">
                    <figure v-for="(v, i) in goods.length>=20?goods[19].products:''" :key="i">
                      <img
                        :src="v.length!=0?v.coverImg:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&w=500&h=200'"
                      />
                      <h6>{{v.name}}</h6>
                    </figure>
                  </aside>
                </article>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </section>
    <footer>
      <low></low>
    </footer>
  </div>
</template>

<script>
import low from "../footer/footer";
import "../../../public/swiper/swiper.min.css";
import "../../../public/swiper/swiper.min.js";
import $ from "jquery";
import { Category, findCategoryById } from "@/api/index";

export default {
  data() {
    return {
      activeKey: 0,
      goodsCategory: [],
      goodsCategoryID: [],
      goods: [],
      thisMounted: ""
    };
  },
  components: {
    low
  },
  async created() {
    const page = 1;
    const per = 20;
    const res = await Category(page, per);
    this.goodsCategory = res.categories;
    this.goodsCategory.forEach(v => this.goodsCategoryID.push(v._id));
    this.goodsCategoryID.forEach(async item => {
      const ty = await findCategoryById(item, {
        per: 100,
        page: 1
      });
      this.goods.push(ty);
    });
  },
  methods: {},
  async mounted() {
    var tabItem = $(".leftList li");
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: false,
      direction: "vertical",
      on: {
        //swiper从当前slide开始过渡到另一个slide时执行
        slideChangeTransitionStart: function() {
          var n = this.activeIndex; //过渡后的slide索引
          changeTab(n);
        }
      }
    });
    //tab点击切换silde
    tabItem.click(function() {
      var index = $(this).index();
      changeTab(index);
      mySwiper.slideTo(index);
    });
    //头部改变事件
    function changeTab(index) {
      tabItem
        .eq(index)
        .css({
          color: "#f36900"
        })
        .siblings()
        .stop()
        .css({
          color: "#3c3c3c"
        });
      tabItem
        .eq(index)
        .children("p")
        .css({
          display: "block"
        })
        .parent()
        .siblings()
        .children("p")
        .stop()
        .css({
          display: "none"
        });
      if (index >= 9 && index <= 17) {
        tabItem
          .eq(index)
          .animate({
            top: -60 * (index - 9) + "px"
          })
          .siblings()
          .animate({
            top: -60 * (index - 9) + "px"
          });
      }
    }
  }
};
</script>

<style scoped>
.classify {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.classifyHeader {
  height: 104px;
  background: #fafafa;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.classifySection {
  overflow-y: hidden;
  border-top: 1px solid #e4e4e4;
  flex: 1;
}
.hearderNav {
  width: 772px;
  height: 76px;
  margin-left: 31px;
  display: flex;
  font-size: 35px;
  border: 1px solid #e0e0e0;
}
.hearderNav p {
  width: 673px;
  height: 76px;
  margin: 0;
  line-height: 76px;
  text-align: left;
  color: #999;
}
.classifyHeader .iconfont {
  font-size: 31px;
}
.hearderNav span {
  display: inline-block;
  width: 104px;
  height: 76px;
  text-align: center;
  line-height: 76px;
  font-size: 31px;
}
/* 弹性布局结束 */
.huihua {
  width: 100px;
  height: 76px;
  text-align: center;
  line-height: 76px;
}
.huihua .iconfont {
  font-size: 51px;
}
/* 侧边导航栏 */
.leftList {
  overflow-y: scroll;
  height: 1370px;
  position: relative;
  border-right: 1px solid #ccc;
}
.leftList li {
  font-size: 30px;
  color: #484848;
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
  position: relative;
  margin-top: 85px;
}
.leftList li:nth-child(1) {
  margin-top: 20px;
  color: #ff6900;
}
.leftList li:nth-child(1) p {
  display: block;
}
.leftList li:nth-child(20) {
  margin-bottom: 20px;
}
.leftList li p {
  width: 8px;
  height: 42px;
  background: #ff6900;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.heights {
  height: 100%;
}
.heights2 {
  height: 100%;
}
.banner_one {
  width: 640px;
  height: 256px;
  display: block;
  margin-left: 30px;
}
.one_title {
  width: 378px;
  height: 99px;
  text-align: center;
  line-height: 99px;
  font-size: 34px;
  color: #767676;
  margin: 19px auto;
}
.article_one aside {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
}
.liu_one figure {
  width: 25%;
  height: 200px;
  margin: 25px;
}
.liu_one img {
  width: 100%;
  height: 150px;
  display: block;
}
.liu_one h6 {
  font-size: 25px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #757575;
}
.swiper-slide {
  overflow: hidden;
}
.swiper-container{
  overflow: hidden;
}
</style>