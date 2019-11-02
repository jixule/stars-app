<template>
  <el-col :span="20">
    <el-form
      :model="product"
      ref="ruleForm"
      label-width="100px"
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名字" prop="name">
        <el-input v-model="product.name"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="coverImg">
        <el-input v-model="product.coverImg"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="coverImg1">
        <el-input v-model="product.coverImg1"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="product.price"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="quantity">
        <el-input v-model="product.quantity"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="productCategory">
        <el-input v-model="product.productCategory"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="descriptions">
        <el-input type="textarea" v-model="product.descriptions"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { updateById, getProductById } from '@/api/product'

export default {
  data() {
    return {
      id: '',
      product: {
        name: '',
        coverImge: '',
        coverImge1: '',
        price: 0,
        descriptions: '',
        productCategory: '',
        quantity: ''
      },
      rules: {
        name: { required: true, message: '请输入商品名字' },
        productCategory: { required: true, message: '请输入商品分类' },
        price: { required: true, message: '请输入商品价格' }
      }
    }
  },
  async created() {
    // 展示原始数据
    console.log(this.$route)
    this.id = this.$route.query.id
    const res = await getProductById(this.id)
    this.product = res
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert('submit!')
          const res = await updateById(this.id, this.product)
          console.log(res)
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.$router.push({ name: 'ProductsList' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
