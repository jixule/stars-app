<template>
  <div class="search">
    <div class="form">
      <div>
        <van-icon name="arrow-left" size="20" @click="$router.go(-1)" />
        <input v-model="vel" @input="iptbtn" type="text" placeholder="小米MIX Alpha" />
      </div>
      <a @click="$router.push({name:'hotClassify',query:{id:olis[0]._id,name:olis[0].name}})">搜索</a>
    </div>
    <section>
      <div v-show="showed">
        <h2>热门搜索</h2>
        <img
          class="banner"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5e5eb570bd8c932c41d111ecb4838.jpg?w=2452&h=920"
          alt="图片加载失败"
        />
        <div class="tag">
          <b v-for="(item,i) in olist" :key="i"
          @click="$router.push({name:'particulars',query:{id:item._id}})"
          >{{item.name}}</b>
        </div>
        <h2>常用分类</h2>
        <div class="type">
          <b
            v-for="(item,i) in list"
            :key="i"
            @click="$router.push({name:'hotClassify',query:{id:item._id,name:item.name}})"
          >{{item.name}}</b>
        </div>
      </div>
      <div v-show="!showed">
        <ul class="showul">
          <li v-for="(item,i) in olis" :key="i" @click="libtn(item._id,item.name)">{{item.name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
import { product, productList } from "../../../services/HomeGetData";
export default {
  data() {
    return {
      vel: "",
      list: [],
      olis: [],
      showed: true,
      name: "",
      olist: []
    };
  },
  async created() {
    const res = await product({
      per: 100,
      page: 1
    });
    this.list = res.data.categories;
    const Res = await productList({
      product_category: res.data.categories[18]._id
    });
    this.olist=Res.data.products;
    $("input").focus();
  },
  methods: {
    iptbtn() {
      var obj = this.list.filter(v => {
        return v.name.indexOf(this.vel) > -1;
      });
      if (this.vel.length) {
        this.showed = false;
      } else {
        this.showed = true;
      }

      this.olis = obj;
    },
    async libtn(id, name) {
      this.$router.push({ name: "hotClassify", query: { id: id, name: name } });
    }
  }
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.form {
  height: 121px;
  background: #fbfbfb;
  font-size: 36px;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
}
.form div {
  border: solid 2px #ccc;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
}
.form input {
  width: 769px;
  height: 81px;
  text-indent: 2em;
  font-size: 28px;
  border: 0;
  background-size: 40px 40px;
  background-color: white;
}
form a {
  width: 78px;
  display: block;
  color: #2e2e2e;
  padding-left: 10px;
}
section {
  width: 100%;
}
section h2 {
  font-size: 36px;
  line-height: 104px;
  font-weight: 400;
  text-indent: 41px;
}
section h2:nth-of-type(2) {
  margin-top: 20px;
}
section .banner {
  display: block;
  height: 253px;
  width: 100%;
}
.tag {
  width: 833px;
  min-height: 299px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
}
.tag b {
  font-size: 30px;
  height: 79px;
  padding: 0 32px;
  display: block;
  line-height: 79px;
  border: 2px solid #dcc0c7;
  font-weight: 400;
  margin-right: 22px;
  background: #f9eaea;
}
.tag b:nth-of-type(2),
.tag b:nth-of-type(3),
.tag b:nth-of-type(4),
.tag b:nth-of-type(6) {
  background: #e5f6e4;
}
.type {
  width: 833px;
  min-height: 170px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.type b {
  font-size: 29px;
  height: 72px;
  padding: 0 32px;
  display: block;
  line-height: 72px;
  background: #f5f5f7;
  color: #747476;
  margin-right: 17px;
}
.showul li {
  height: 30px;
  font-size: 30px;
  margin: 30px 0 0 50px;
}
</style>