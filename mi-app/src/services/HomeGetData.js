//影片信息服务js
/*

 * 获取热映影片数据
*/
/* 获取商品信息 */
import axios from "axios";
export function productList(params) {
  return axios.get("http://47.98.226.107:3000/api/v1/products", {
    params: params
  });
}
 /* 获取商品分类信息 */
export function product(params) {
  return axios.get("http://47.98.226.107:3000/api/v1/product_categories", {
    params: params
  });
}
