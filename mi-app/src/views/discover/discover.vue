<template>
  <div class="discover">
    <header class="header_discover">
      <p class="iconfont icon-yiliaohangyedeICON-" @click="$router.push({name:'limine'})"></p>
      <div class="discover_link discover_links">
        推荐
        <p class="discover_nav discover_navs"></p>
      </div>
      <div class="discover_link">
        好物
        <p class="discover_nav"></p>
      </div>
      <span></span>
    </header>
    <section class="section_discover">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide discover_index">
            <index></index>
          </div>
          <div class="swiper-slide">
            <Video></Video>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <footer>
      <low></low>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
import Video from "./Video";
import index from "./index";
import low from "../footer/footer";

export default {
  name: "discover",
  data() {
    return {
      Tbox: 0
    };
  },
  created() {},
  methods: {},
  components: {
    Video,
    index,
    low
  },
  mounted() {
    var tabItem = $(".discover_link");
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: false,
      on: {
        //swiper从当前slide开始过渡到另一个slide时执行
        slideChangeTransitionStart: function() {
          var n = this.activeIndex; //过渡后的slide索引
          changeTab(n);
        }
      }
    });
    //tab点击切换silde
    $(".header_discover").on("click", ".discover_link", function() {
      var ind = $(this).index();
      mySwiper.slideTo(ind - 1);
      changeTab(ind - 1);
    });

    ///特效
    function changeTab(index) {
      tabItem
        .eq(index)
        .css({
          color: "#fd7052"
        })
        .siblings()
        .css({
          color: "#313131"
        });
      tabItem
        .eq(index)
        .children()
        .css({
          display: "block"
        });
      tabItem
        .eq(index)
        .siblings()
        .children()
        .css({
          display: "none"
        });
    }
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}
body {
  font-size: 100px;
}
.discover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 100px;
}
.header_discover {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 44px;
  height: 104px;
  color: #353535;
}

.discover_link {
  position: relative;
  color: #313131;
}
.discover_links {
  color: #fd7052;
}
.discover_nav {
  border-radius: 10px;
  width: 60px;
  height: 6px;
  background: #ff4900;
  position: absolute;
  bottom: -29px;
  left: -28px;
  z-index: 2000;
  display: none;
}
.discover_navs {
  display: block;
}
.header_discover span {
  margin: 0 39px 0 0;
}
.header_discover p {
  margin: 0 0 0 39px;
}
.header_discover .iconfont {
  font-size: 49px;
}

.section_discover {
  flex: 1;
  overflow: auto;
  background: #f5f5f5;
}
</style>