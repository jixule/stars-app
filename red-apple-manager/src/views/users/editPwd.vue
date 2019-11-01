<template>
  <el-col :span="20">
    <el-form :model="user" ref="ruleForm" label-width="100px" :rules="rules" class="demo-ruleForm">
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { updatePwd, getUser } from '@/api/product'

export default {
  data() {
    return {
      id: '',
      user: {
        password: ''
      },
      rules: {
        password: { required: true, message: '请输入密码' }
      }
    }
  },
  async created() {
    // 展示原始数据
    console.log(this.$route)
    this.id = this.$route.query.id // eslint-disable-line
    const res = await getUser(this.id)
    this.user = res
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert('submit!')
          const res = await updatePwd(this.id, this.user)
          console.log(res)
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.$router.push({ name: 'UsersList' })
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
