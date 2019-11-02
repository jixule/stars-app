<template>
  <el-col :span="20">
    <el-form :model="user" ref="ruleForm" label-width="100px" :rules="rules" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="user.userName"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-input v-model="user.avatar"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input type="textarea" v-model="user.nickName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { updateUser, getUser } from '@/api/product'

export default {
  data() {
    return {
      id: '',
      user: {
        userName: '',
        avatar: '',
        nickName: ''
      },
      rules: {
        userName: { required: true, message: '请输入用户名' },
        password: { required: true, message: '请输入用户名' }
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
          const res = await updateUser(this.id, this.user)
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
