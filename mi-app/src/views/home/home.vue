<template>
  <div class="home">
    <header class="header" style="height:45px;">
      <div class="header-nav">
        <span class="iconfont icon-xiaoxi" ></span>
        <div class="header-search">
          <span class="iconfont icon-fangdajing" style="color:#d8d8d8;font-size:24px;line-height:35px;"></span>
          <a @click="$router.push({name:'search'})">小米9 pro 5G</a>
        </div>
        <span class="iconfont icon-erweima"></span>
      </div>
    </header>
    <section class="home-section">
      <div class="sec-bottom">
        <van-tabs sticky swipeable animated title-active-color="#f06c47" :offset-top="45">
          <van-tab title="小米专区">
            <recommend></recommend>
          </van-tab>
          <van-tab title="精选">
            <phone></phone>
          </van-tab>
          <van-tab title="智能">
            <capacity></capacity>
          </van-tab>
          <van-tab title="电视">
            <tv></tv>
          </van-tab>
          <van-tab title="笔记本">
            <notebook></notebook>
          </van-tab>
          <van-tab title="家电">
            <household></household>
          </van-tab>
          <van-tab title="生活周边">
            <lifeAround></lifeAround>
          </van-tab>
        </van-tabs>
      </div>
    </section>
    <footer class="footer" style="z-index:1000;background:#f00;" ref="footer">
      <low></low>
    </footer>
  </div>
</template>

<script>
import notebook from "./components/Notebook";
import household from "./components/Household";
import lifeAround from "./components/LifeAround";
import tv from "./components/Tv";
import low from "../footer/footer";
import recommend from "./components/home-recommend";
import phone from "./components/home-phone";
import capacity from "./components/home-capacity";
import "../../services/HomeGetData"
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    recommend,
    phone,
    low,
    capacity,
    tv,
    household,
    notebook,
    lifeAround,
  },
  methods: {},
  created() {
     
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.home .header {
  height: 107px;
  background: #ca0610;
}

.header-nav {
  display: flex;
  height: 107px;
  justify-content: space-around;
  align-items: center;
}

.header-nav .iconfont {
  font-size: 51px;
  color: #fff;
  border-radius: 5px;
}
.header-search {
  width: 689px;
  height: 78px;
  background: #fff;
  color: #e8e8e8;
  display: flex;
  justify-content: space-around;
}
.header-search a {
  display: block;
  width: 505px;
  font-size: 33px;
  color: #a0a0a0;
  line-height: 78px;
  margin-left: 0px;
}

.field-class {
  width: 690px;
  font-size: 34px;
  height: 78px;
}
.swiper-container {
  width: 100%;
  margin-top: 50px;
  border: solid #f00 1px;
  overflow: auto;
}
.van-swipe {
  position: relative;
  top: 35px;
  width: 100%;
}
.sec-bottom {
  z-index: 1000;
}

.home-section {
  flex: 1;
}
</style>