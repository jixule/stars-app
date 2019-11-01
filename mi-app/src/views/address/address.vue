<template>
  <div class="Address">
    <h2 class="addTitle">
      <i @click="out"><</i>
      <b>新建收货地址</b>
    </h2>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Vue from "vue";
import areaList from "../../../public/vant-area/area.js";
import { AddressEdit } from "vant";
import { addAddress } from "@/api/index";
import { TipsWindown } from "../../assets/TipsWindown";

Vue.use(AddressEdit);

export default {
  data() {
    return {
      areaList,
      searchResult: [],
      Address: {}
    };
  },
  methods: {
    async onSave(e) {
      this.Address.receiver = e.name;
      this.Address.mobile = e.tel;
      this.Address.regions = e.city;
      this.Address.address = e.addressDetail;
      const res = await addAddress(this.Address);
      if (res.code == "success") {
        TipsWindown("新增成功");
        this.$router.push({
          name: "addGL"
        });
      }
    },
    out() {
      this.$router.push({
        name: "addGL"
      });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "科技教育产业园",
            address: "郑州市高新区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style>
.addTitle {
  width: 100%;
  height: 65px;
  background: rgb(250, 250, 250);
  line-height: 65px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
}
.addTitle b {
  font-weight: normal;
  line-height: 65px;
  height: 65px;
  margin: 0 0 0 10px;
  display: block;
  width: 200px;
  letter-spacing: 2px;
  font-size: 27px;
  color: black;
}
.addTitle i {
  margin: 0 20px 0 15px;
  font-size: 65px !important;
  display: block;
  color: rgba(22, 2, 2, 0.274);
}
.van-cell__title .van-field__label {
  width: 100%;
  font-size: 30px;
  height: 600px;
  margin: 50px 0;
}
.van-cell {
  margin: 30px 0 !important;
  font-size: 30px !important;
  line-height: 60px;
}
.van-cell input {
  height: 60px;
  margin: 0 5px !important;
}
.van-cell textarea {
  height: 60px;
}
.van-field__label {
  font-size: 30px;
  text-align: left;
  line-height: 40px;
  letter-spacing: 5px;
  color: black;
}
.van-area {
  width: 100%;
  height: 700px;
  font-size: 35px;
}
.van-picker__toolbar {
  height: 150px;
  line-height: 150px;
}
.van-picker__cancel,
.van-picker__confirm {
  font-size: 30px !important;
  margin: 20px 10px;
  height: 35px;
}
.van-picker-column {
  font-size: 35px !important;
}
.van-button {
  width: 100%;
  height: 75px !important;
  font-size: 32px !important;
}
.van-toast {
  text-align: center;
  color: #fff;
  position: fixed;
  top: 35% !important;
  left: 45% !important;
  font-size: 12px !important;
  font-weight: normal;
  width: 150px !important;
  height: 40px !important;
  background: rgba(0, 0, 0, 0.7);
  line-height: 40px;
}
.Address .van-hairline--top-bottom {
  height: 75px !important;
}
</style>

