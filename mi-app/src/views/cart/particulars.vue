<template>
  <div class="goods">
    <header class="goods_fixed">
      <van-nav-bar title="商品详情" fixed left-arrow @click-left="back"></van-nav-bar>
    </header>
    <section class="goods_sction">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="(thumb,i) in arr" :key="i">
          <img :src="thumb" />
        </van-swipe-item>
      </van-swipe>
      <div class="goods_sert">
        <div class="goods_cont">
          <h2>{{formatPrice()}}</h2>
          <p>{{goods.name}}</p>
          <p class="goods_p">
            <span>{{goods.descriptions}}</span>
            <span>剩余：{{goods.quantity}}件</span>
          </p>
        </div>
        <div class="goods_yixuan">
          <div class="goods_yixuan_to">
            <span>已选</span>
            <p class="goods_yixuan_to_qwe">
              <span></span>
              <span>星空商品</span>x1
            </p>
            <span class="iconfont icon-jiantou"></span>
          </div>
          <div class="goods_yixuan_to goods_yixuan_to_rt">
            <span>送至</span>
            <p class="goods_yixuan_to_qwe">
              <span></span>
              <span></span> 有货
            </p>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
      </div>
      <div class="goods_yixuan_ouh">
        <div class="goods_yixuan_yut" v-for="(thumb,i) in arr" :key="i">
          <img :src="thumb" />
        </div>
      </div>
    </section>
    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
        <van-goods-action-button type="warning" @click="addcart()">加入购物车</van-goods-action-button>
        <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import { getToken } from "../../utils/auth";
import { mapState } from "vuex";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import { commodity, AddCart } from "../../api/index";

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      goods: {},
      arr: [],
      id: this.$route.query.id
    };
  },
  async created() {
    const obj = await commodity(this.id);
    this.arr.push(obj.coverImg);
    this.arr.push(
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png"
    );
    this.arr.push(
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png"
    );
    this.arr.push(
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
    );
    this.goods = obj;
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    formatPrice() {
      if (this.goods.price) {
        return "¥" + this.goods.price.toFixed(2);
      }
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {},
    async addcart() {
      if (getToken()) {
        const res = await AddCart({ product: this.id });
        Toast.success("加入购物车成功");
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.goods_cont {
  height: 300px;
  font-size: 50px;
  background: #fff;
}
.goods_cont h2 {
  line-height: 70px;
  margin-left: 20px;
  color: #f00;
}
.goods_cont p:first-of-type {
  font-size: 40px;
  margin-left: 25px;
  line-height: 60px;
  color: #4d4343;
}
.goods_cont p:last-of-type {
  display: flex;
  font-size: 46px;
  justify-content: space-between;
}
.goods_cont p:last-of-type span:last-of-type {
  font-size: 30px;
  margin-right: 40px;
  line-height: 60px;
}
.goods_cont p:last-of-type span:first-of-type {
  font-size: 36px;
  margin-left: 40px;
  line-height: 60px;
}

.goods_yixuan {
  margin: 30px 0;
  height: 202px;
  overflow: hidden;
  background: #f5f5f5;
}
.goods_yixuan_to {
  height: 100px;
  display: flex;
  font-size: 40px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  background: #fff;
}
.goods_sert {
  background: #f5f5f5;
}
.goods_yixuan_to_qwe {
  width: 600px;
  color: #252525;
}
.goods_yixuan_yut {
  height: 750px;
}
.goods_yixuan_yut img {
  height: 750px;
  width: 100%;
}
.goods_yixuan_ouh {
  height: auto;
  margin-top: 40px;
}
.goods_fixed {
  height: 100px;
}

.goods-swipe {
  height: 911px !important;
}
.goods-swipe img {
  width: 100%;
  height: 100%;
}
.goods_p {
  width: 900px;
  height: 130px;
  flex-direction: column;
}
.goods_p span:first-of-type {
  display: block;
  width: 810px;
  height: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods_p span:last-of-type {
  float: left;
  text-align: right;
}
</style>