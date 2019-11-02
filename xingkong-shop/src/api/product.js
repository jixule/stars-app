import { get, post, put, del } from '../utils/request'

/**
 * 根据参数获取商品列表
 * @param {*} params
 */
export function products(params) {
  return get('/api/v1/admin/products', params)
}

/**
 * 根据id获取单个商品
 * @param {*} id
 */
export function getProductById(id) {
  return get(`/api/v1/admin/products/${id}`)
}

/**
 * 商品新增
 * @param {*} model
 */
export function createOne(model) {
  return post('/api/v1/admin/products', model)
}

/**
 * 根据id修改商品信息
 * @param {*} id
 * @param {*} model
 */
export function updateById(id, model) {
  return put(`/api/v1/admin/products/${id}`, model)
}

/**
 * 根据id删除商品
 * @param {*} id
 */
export function delById(id) {
  return del(`/api/v1/admin/products/${id}`)
}

/**
 * 用户列表
 * @param {*} params
 */
export function users(params) {
  return get('/api/v1/admin/users', params)
}
/**
 *根据id获取单个用户
 * @param {*} id
 */
export function getUser(id) {
  return get(`/api/v1/admin/users/${id}`)
}

/**
 * 新增用户
 * @param {*} model
 */
export function userNew(model) {
  return post('/api/v1/admin/users', model)
}

/**
 * 修改用户
 * @param {*} id
 * @param {*} model
 */
export function updateUser(id, model) {
  return put(`/api/v1/admin/users/${id}`, model)
}

/**
 * 修改密码
 * @param {*} id
 * @param {*} model
 */
export function updatePwd(id, model) {
  return put(`/api/v1/admin/users/reset_pwd/${id}`, model)
}

/**
 * 删除用户
 * @param {*} id
 */
export function delUser(id) {
  return del(`/api/v1/admin/users/${id}`)
}

/**
 * 获取用户收货地址
 * @param {*} id
 */
export function getUserAddr(id) {
  return get(`/api/v1/admin/addresses/user_${id}`)
}

/**
 * 获取商品分类列表
 * @param {*} params
 */
export function proCategories(params) {
  return get('/api/v1/admin/product_categories', params)
}

/**
 * 根据ID获取商品分类信息
 * @param {*} id
 */
export function getCategoriesById(id) {
  return get(`/api/v1/admin/product_categories/${id}`)
}

/**
 * 新增商品分类信息
 * @param {*} model
 */
export function addCategories(model) {
  return post('/api/v1/admin/product_categories', model)
}

/**
 * 根据id修改商品分类信息
 * @param {*} id
 * @param {*} model
 */
export function updateCategories(id, model) {
  return put(`/api/v1/admin/product_categories/${id}`, model)
}

/**
 * 根据id删除商品
 * @param {*} id
 */
export function delCategoriesById(id) {
  return del(`/api/v1/admin/product_categories/${id}`)
}
