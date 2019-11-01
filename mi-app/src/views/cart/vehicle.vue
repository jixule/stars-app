
<template>
  <div class="vehicle">
    <!--  -->
    <div class="vehicle_ti" v-show="isSohw">
      <span class="vehicle_oun">登录后享受更多优惠</span>
      <a href="javascript:;" @click="$router.push({name:'login'})">
        <span>去登录</span>
        <span class="iconfont icon-jiantou"></span>
      </a>
    </div>
    <!-- 商品 -->
    <div class="cart_Shopping">
      <div>
        <div class="cart_Shopping">
          <div class="cart_Shopping_1" v-for="(v,i) in list" :key="i">
            <!-- -->
            <van-checkbox
              @change="calculate"
              checked-color="#f46602"
              v-model="v.ischecken"
              :name="i"
            ></van-checkbox>
            <p class="img_cart_Shopping">
              <img :src="v.product?v.product.coverImg:''" />
            </p>
            <div class="cart_Shopping_jian">
              <div class="cart_Shopping_div">
                <h2>{{v.product?v.product.name:''}}</h2>
                <p class="cart_Shopping-p">{{v.product?v.product.descriptions:''}}</p>
                <p>
                  <span>￥{{v.product?v.product.price:''}}</span>
                  <span></span>
                </p>
              </div>
              <div class="cart_jia">
                <button @click="jian(v.product._id,v.quantity,i)">-</button>
                <input type="tetx" :value="v.quantity" />
                <button @click="jia(v.product._id,v.quantity,i)">+</button>
              </div>
            </div>
          </div>
          <div class="bai"></div>
        </div>
      </div>
    </div>
    <!-- 为你推荐 -->

    <footer class="cart_footer">
      <!--  -->
      <van-checkbox checked-color="#f46602" @change="calculate" v-model="all">全选</van-checkbox>
      <!-- <van-checkbox checked-color="#f46602" v-model="all">全选</van-checkbox> -->
      <p class="btn-p">
        合计:
        <span>￥{{price}}</span>
      </p>

      <button class="btn" v-show="s" @click="dele">删除</button>
      <button v-show="!s" @click="scri()">结算</button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { ShowCart, AddCart, dele } from "../../api/index";
import { getToken } from "../../utils/auth";
import { Dialog } from "vant";
import $ from "jquery";
export default {
  name: "vehicle",
  data() {
    return {
      result: [],
      price: "0.00",
      list: [],
      prop: [],
      isSohw: true,
      isnum: [],
      qwe: [{}],
      ret: []
    };
  },
  props: {
    s: {
      type: Boolean
    }
  },
  async created() {
    if (getToken()) {
      this.isSohw = false;
      this.showbox();
    }
  },
  computed: {
    // 单选和全选
    all: {
      get() {
        if (this.list.length < 1) {
          return false;
        } else {
          return this.list.filter(v => v.ischecken).length == this.list.length;
        }
      },
      set(val) {
        this.list.forEach(v => (v.ischecken = val));
      }
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    scri() {
      if (this.isnum.length) {
        this.$router.push({ name: "calculate" });
      }
    },
    running() {
      $router.push({ path: `/calculate?` });
    },
    //渲染页面

    async showbox() {
      const arr = await ShowCart();
      arr.forEach(v => {
        v.ischecken = false;
      });
      this.list = arr;
    },
    /* 跳转页面到订单页 */
    onSubmit() {},
    /* 算总价 */
    calculate() {
      const ers = this.list.filter(v => v.ischecken == true);

      this.isnum = ers;
      this.$store.commit("save", this.isnum);
      if (ers.length < 1) {
        this.price = 0.0;
      } else {
        let pprice = 0;
        ers.forEach(v => {
          pprice = pprice + v.quantity * v.product.price;
        });

        this.price = pprice + ".00";
      }
    },
    async jian(product, num, i) {
      num--;
      if (num >= 1) {
        const ui = await AddCart({ product, quantity: -1 });
        this.list[i].quantity = num;
        this.calculate();
      } else {
        return;
      }
    },
    async jia(product, num, i) {
      num++;
      const ui = await AddCart({ product });
      this.list[i].quantity = num;
      this.calculate();
    },
    /* 删除购物车商品 */
    dele() {
      Dialog.confirm({
        title: "提示",
        message: "真的要删除商品吗？"
      }).then(() => {
        const ers = this.list.filter(v => v.ischecken == true);
        let delet = null;
        ers.forEach(v => {
          dele(v._id).then(res => {
            this.showbox();
            this.price = 0;
            this.all = false;
          });
        });
      });
    }
  }
};
</script>

<style scoped>
.vehicle {
  height: 100%;
}
.vehicle_ti {
  width: 100%;
  height: 100px;
  font-size: 35px;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px #dedede solid;
  align-items: center;
  overflow: auto;
}
.cart_Shopping {
  height: 100%;
}
.vehicle_oun {
  margin: 0 0 0px 40px;
}
.vehicle_ti a {
  display: flex;
  width: 160px;
  height: 100px;
  margin: 0 20px 0 0px;
  align-items: center;
  color: #b3b3b3;
}
.vehicle_ti a span:last-child {
  margin: 0 0 0 20px;
}

/* 购物车商品 */
.cart_Shopping {
  width: 100%;
  height: auto;
  background: #b3b3b3;
}
.cart_Shopping_1 {
  width: 832px;
  padding: 0 40px;
  height: 250px;
  background: #fff;
  display: flex;
  border-bottom: 1px #eee solid;
  justify-content: space-between;
  align-items: center;
}

.cart_Shopping .van-checkbox-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart_Shopping img {
  width: 100%;
  height: 100%;
}
.img_cart_Shopping {
  width: 184px;
  height: 185px;
  border-radius: 20px;

  overflow: hidden;
}
.cart_Shopping_jian {
  width: 518px;
  height: 196px;
  display: flex;
  font-size: 36px;
  color: #545454;
}
.cart_Shopping_jian h2 {
  font-weight: 600;
  line-height: 61px;
}
.cart_Shopping_jian p {
  color: #a3a3a3;
  line-height: 56px;
}
.cart_Shopping_jian p:first-of-type {
  font-size: 26px;
}
.cart_Shopping_jian p:last-of-type {
  margin-top: 10px;
  font-size: 29px;
  color: #ff6a13;
}
.cart_Shopping_jian p:first-of-type span:last-of-type {
  margin-left: 10px;
}
.cart_Shopping_jian p:last-of-type span:last-of-type {
  margin-left: 10px;
  font-size: 20px;
  color: #777777;
}
.cart_jia {
  width: 150px;
  height: 50px;
  display: flex;
  margin: 125px 0 0 0;
}
.cart_jia button {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  border: 0;
  background: #ffffff;
  border: 2px #f3f3f3 solid;
}

.cart_jia input {
  width: 47px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  border: 0;
  border: 2px #f3f3f3 solid;
  font-size: 30px;
}
.cart_footer .van-submit-bar__bar button {
  height: 100% !important;
  font-size: 41px;
}
.bai {
  background: #fff;
  height: 340px;
}
.cart_Shopping-p {
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart_Shopping_div {
  width: 600px;
  height: 100%;
}
.cart_Shopping_div h2 {
  width: 400px;
}
.cart_footer {
  width: 100%;
  height: 130px;
  background: #fff;
  position: fixed;
  bottom: 140px;
  left: 0;
  display: flex;
  font-size: 40px;
  justify-content: space-between;
  align-items: center;
}
.cart_footer button {
  color: #fff;
  border: 0;
  background: #ff6a13;
}
.btn-p {
  margin-left: 50px;
}
.btn-p span {
  color: #f00;
}
.cart_footer .btn {
  background: #f00;
}
</style>