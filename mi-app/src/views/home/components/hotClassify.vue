<template>
  <div class="recommend-classify">
    <div class="recommend-classify-title">
      <van-icon name="arrow-left" @click="$router.go(-1)" size="20" />
      <span>{{name}}</span>
      
    </div>
    <div class="recommend-classify-div">
      <div
        v-for="(item,i) in list"
        :key="i"
        @click="$router.push({name:'particulars',query:{id:item._id}})"
      >
        <img
          class="big"
          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/67af8c5df281feb89083c94a69ad4e23.jpg?thumb=1&amp;w=344&amp;h=280"
          :src="item.coverImg"
        />
        <h4>{{item.name}}</h4>
        <h5>全面屏手机，人工智能语音</h5>
        <p>￥{{item.price}}</p>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>
<script>
import { product, productList } from "../../../services/HomeGetData";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    // 手机
    const Res = await productList({
      product_category: this.$route.query.id
    });
    this.list = Res.data.products;
    this.name = this.$route.query.name;
    console.log(this.list);
  }
};
</script>
<style scoped>
.recommend-classify-title {
  height: 100px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.recommend-classify-title span {
  font-size: 50px;
  color: #ccc;
  width: 800px;
  line-height: 100px;
  margin-left: 250px;
}
.recommend-classify-div {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  justify-content: space-between;
  background: #e6e7fb;
}
.recommend-classify-div div {
  height: 627px;
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  margin-top: 20px;
}
.recommend-classify-div div img {
  width: 430px;
  height: 350px;
}
.recommend-classify-div div h4 {
  font-size: 34px;
  font-weight: 900;
  width: 260px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
.recommend-classify-div div h5 {
  font-size: 23px;
  text-align: center;
}
.recommend-classify-div div p {
  font-size: 27px;
  color: #eb585e;
  width: 95px;
}
.recommend-classify-div div button {
  font-size: 24px;
  background: #eb585e;
  border: 0;
  color: #fff;
  width: 222px;
  height: 61px;
}
</style>