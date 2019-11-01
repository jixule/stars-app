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
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { createOne } from '@/api/product'

export default {
  data() {
    return {
      product: {
        name: '',
        coverImge: '',
        price: 0,
        descriptions: '',
        quantity: '',
        productCategory: ''
      },
      rules: {
        name: { required: true, message: '请输入商品名字' },
        productCategory: { required: true, message: '请输入商品分类' },
        price: { required: true, message: '请输入商品价格' }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert('submit!')
          const res = await createOne(this.product)
          console.log(res)
          this.$message({
            message: '添加成功',
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
