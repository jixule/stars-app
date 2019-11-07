<template>
  <el-col :span="20">
    <el-form
      :model="product"
      ref="ruleForm"
      label-width="120px"
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item label="商品分类名字" prop="name">
        <el-input v-model="product.name"></el-input>
      </el-form-item>
      <el-form-item label="主图" prop="coverImg">
        <el-input v-model="product.coverImg"></el-input>
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
import { addCategories } from '@/api/product'

export default {
  data() {
    return {
      product: {
        name: '',
        coverImg: '',
        descriptions: ''
      },
      rules: {
        name: { required: true, message: '请输入商品分类名字' }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert('submit!')
          const res = await addCategories(this.product)
          console.log(res)
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.$router.push({ name: 'CategoriesList' })
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
