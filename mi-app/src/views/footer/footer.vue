<template>
  <van-tabbar id="footer_nav" v-model="active" active-color="#fc6222" inactive-color="#424242">
    <van-tabbar-item class="iconfont icon-shouye2" name="/" :to="{name:'Home'}">
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item
      class="iconfont icon-fenlei1 icon_color"
      name="/classify"
      :to="{name:'classify'}"
    >
      <span>分类</span>
    </van-tabbar-item>
    <van-tabbar-item class="iconfont icon-ziyuan" name="/index" :to="{name:'discover'}">
      <span>发现</span>
    </van-tabbar-item>
    <van-tabbar-item class="iconfont icon-gouwuche" name="/cart" :to="{name:'cart'}">
      <span>购物车</span>
    </van-tabbar-item>
    <van-tabbar-item
      class="iconfont icon-tubiaolunkuo- icon_color"
      name="/mine"
      :to="{name:'mine'}"
    >
      <span>我的</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: this.$router.currentRoute.fullPath
    };
  }
};
</script>

<style>
.footer {
  height: 141px;
}
#footer_nav {
  height: 141px;
  font-size: 22px;
}
#footer_nav .iconfont {
  font-size: 52px;
}
#footer_nav span {
  height: 141px;
  font-size: 22px;
}
.icon_color {
  font-weight: 600;
}
#footer_nav .icon_color span {
  font-weight: 500;
}
</style>