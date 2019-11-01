<template>
  <div class="section">
    <div id="lee">
      <div class="top-btn">
        <van-icon
          class="top-left"
          name="arrow-left"
          color="white"
          size="23px"
          @click="$router.push({name:'discover'})"
        />

        <van-icon class="top-right" name="share" color="white" size="23px" />
      </div>
      <div class="head">
        <img src="http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg" />
        <span class="username">{{userName}}</span>
        <div class="head-btn">
          <van-icon name="bulb-o" size="16px" />消息
        </div>
      </div>
    </div>
    <div class="card">
      <div class="dainzan">
        <span>0</span>
        <p>点赞</p>
      </div>
      <div class="dainzan">
        <span>0</span>
        <p>粉丝</p>
      </div>
      <div class="dainzan">
        <span>0</span>
        <p>关注</p>
      </div>
      <div class="dainzan">
        <span>0</span>
        <p>发布</p>
      </div>
    </div>
    <div class="body">
      <img src="../../assets/img/lee.png" alt />
    </div>
  </div>
</template>
<script>
import { user } from "@/api/index";

export default {
  data() {
    return {
      active: 2,
      userName: ''
    };
  },
  async created() {
    const res = await user();
    this.userName = res.userName
  }
};
</script>
<style scoped>
.section {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
#lee {
  height: 370px;
  width: 100%;
  background: rgb(42, 3, 80);
  /* flex-shrink: 0; */
}
.top-left {
  background: rgba(24, 24, 24, 0.466);
  border-radius: 50%;
  height: 80px;
  width: 80px;
  line-height: 80px;
  text-align: center;
  position: relative;
  left: 40px;
  top: 18px;
}
.top-right {
  background: rgba(24, 24, 24, 0.466);
  border-radius: 50%;
  height: 80px;
  width: 80px;
  line-height: 80px;
  text-align: center;
  position: relative;
  left: 710px;
  top: 18px;
}
.head {
  margin-top: 20px;
}
.head img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 1px solid white;
  margin-left: 45px;
  float: left;
}
.username {
  display: block;
  float: left;
  font-size: 50px;
  line-height: 120px;
  color: white;
  margin-left: 30px;
}
.head-btn {
  display: block;
  float: right;
  height: 50px;
  width: 150px;
  border: 1px solid rgb(202, 200, 200);
  color: rgb(202, 200, 200);
  font-size: 35px;
  background: rgba(250, 246, 246, 0);
  border-radius: 25px;
  line-height: 50px;
  text-align: center;
  margin-top: 30px;
  margin-right: 40px;
}
.card {
  height: 200px;
  width: 840px;
  background: white;
  position: absolute;
  top: 285px;
  left: 35px;
  border-radius: 20px;
  display: flex;
  font-size: 50px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.card p {
  font-size: 30px;
  font-weight: 600;
}

.body {
  /* flex-grow: 1; */
  width: 100%;
  background: #f5f5f5;
  /* flex-shrink: 1; */
  flex: 1;
}
.body img {
  margin-top: 300px;
  margin-left: 300px;
  width: 330px;
  height: 400px;
}
</style>