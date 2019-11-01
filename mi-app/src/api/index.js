import { get, post, del } from "../utils/request";
/**
 * 加入购物车
 * @param {*} data
 */
export function AddCart(data) {
  return post(`/api/v1/shop_carts`, data);
}
/**
 *
 * @param {*}
 */
export function ShowCart() {
  return get("/api/v1/shop_carts");
}

/**
 * 获取验证码
 * @param {*} data
 */
export function Login(data) {
  return post("http://47.98.226.107:3001/send_sms", data);
}
/**
 * 注册接口
 * @param {*} data
 */
export function Register(data) {
  return post("/api/v1/auth/reg", data);
}
/**
 * 用户名密码登录
 * @param {} data
 */
export function LoginM(data) {
  return post("/api/v1/auth/login", data);
}
/**
 * 商品分类 无
 * @param {*} url
 */
export function Category(page, per) {
  return get(`/api/v1/product_categories?page=${page}&per=${per}`);
}
/**
 * 根据分类id查询商品数组
 * @param {*} data
 */
export function findCategoryById(ID, data) {
  return get(`/api/v1/products?product_category=${ID}`, data);
}
/**
 * 新增收货地址
 * @param {*} data 收货人 手机 市级地址 详细地址
 */
export function addAddress(data) {
  return post(`/api/v1/addresses`, data);
}

/**
 * 根据id获取商品详情
 * @param {*} id
 */
export function commodity(id) {
  console.log(`/api/v1/products/${id}`);
  return get(`/api/v1/products/${id}`);
}

/**
 * 根据id删除购物车删除商品
 * @param {*} id
 */
export function dele(id) {
  return del(`/api/v1/shop_carts/${id}`);
}
/**
 * 获取用户信息
 */
export function user() {
  return get(`/api/v1/users/info`);
}
/**
 * 获取所有收货地址
 * @param {*} data
 */
export function CustomerAddress(data) {
  return get(`/api/v1/addresses`, data);
}
/**
 * 获取全部订单
 * @param {*} page
 * @param {*} per
 */
export function findOrder(page, per) {
  return get(`/api/v1/orders?per=${per}&page=${page}`);
}
/**
 * 根据id获取订单详情
 * @param {*} id
 */
export function findOrderShop(id) {
  return get(`/api/v1/orders/${id}`);
}
