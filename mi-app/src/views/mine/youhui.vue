<template>
  <div class="container">
    <van-nav-bar
      title="优惠券"
      left-text
      right-text
      left-arrow
      @click-left="$router.push({name:'mine'})"
    />
    <van-tabs swipeable v-model="active" title-active-color="#f00">
      <van-tab :title="'未使用('+num+')'">
        <div class="pic1">
          <img class="youhui1" src="../../assets/img/youhui.png" alt />
        </div>
      </van-tab>
      <van-tab title="已使用">
        <div class="pic1">
          <img class="youhui1" src="../../assets/img/youhui.png" alt />
        </div>
      </van-tab>
      <van-tab title="已失效">
        <div class="pic1">
          <img class="youhui1" src="../../assets/img/youhui.png" alt />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      active: 0
    };
  }
};
</script>
<style scoped>
.van-tab span {
  font-size: 50px;
  height: 55px;
  line-height: 55px;
}
.van-tabs__wrap {
  height: 55px !important;
  background: snow;
}
.box {
  font-size: 55px;
  height: 120px;
  background: #eeeeee;
}

.box nav {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 115px;
  background: #fafafa;
}
.box nav span {
  font-size: 40px;
}
.box section {
  overflow: hidden;
  font-size: 50px;
}
.van-ellipsis {
  font-size: 48px !important;
}
.van-tab span {
  line-height: 105px;
  height: 90px;
}
.van-tabs__wrap {
  height: 120px !important;
  background: snow;
}

.van-nav-bar {
  line-height: 100px;
  height: 100px;
  font-size: 30px !important;
}
.van-nav-bar__left,
.van-nav-bar__right {
  position: absolute;
  bottom: 0;
  font-size: 45px !important;
}
.van-nav-bar__title {
  margin: 0 650px 0 0;
  font-size: 45px;
}

.pic1 {
  height: 1300px;
  display: flex;
  align-items: center;
}
.youhui1,
.youhui2 {
  display: block;
  width: 100%;
}
.van-nav-bar i {
  font-size: 40px;
  color: black;
  bottom: 5px;
}
</style>