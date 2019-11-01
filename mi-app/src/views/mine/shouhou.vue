<template>
  <div class="box">
    <nav>
      <van-icon class="icon1" name="arrow-left" @click="$router.push({name:'mine'})" />
      <span>售后服务</span>
    </nav>
    <div class="sec">
      <van-tabs swipeable title-active-color="red" sticky>
        <van-tab title="售后申请" class="tab-content">
          <div class="device">
            <h3>
              设备号申请
              <van-icon name="question-o" />
            </h3>
            <input type="text" placeholder="请输入IMEI或SN码" />
            <button class="sub">申请售后</button>
          </div>
          <div class="box2">
            <img src="../../assets/img/shouhou.png" alt class="shouhou" />
          </div>
        </van-tab>
        <van-tab title="售后进度">
          <div class="box3">
            <img src="../../assets/img/shouhou.png" alt class="shouhou" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<style scoped>
.van-tab span {
  font-size: 50px;
  height: 55px;
  line-height: 55px;
}
.van-tabs__content {
  height: 100%;
}
.van-tabs__wrap {
  height: 55px !important;
  background: snow;
}
.box {
  font-size: 55px;
  height: 100%;
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
.sec {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.tab-content {
  background: #eee;
}
.device {
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  padding: 20px 0;
}
.device h3 {
  font-size: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #e3e3e3;
  padding-left: 30px;
  margin-bottom: 20px;
  background: #fff;
}
.device input[type="text"] {
  border: 0;
  height: 100px;
  width: 78%;
  text-indent: 30px;
  border-bottom: 1px solid #e3e3e3;
}
.device .sub {
  width: 160px;
  height: 75px;
  background: #fff;
  font-size: 30px;
  border: 0;
  border: 1px solid #ca8a5c;
  border-radius: 10px;
  color: #ed7e25;
  white-space: nowrap;
}
.box2 {
  width: 100%;
  /* background: #eeeeee; */
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box3 {
  width: 100%;
  background: #eeeeee;

  display: flex;
  justify-content: center;
  align-items: center;
}
.shouhou {
  margin-top: 250px;
  width: 275px;
  height: 343px;
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
</style>