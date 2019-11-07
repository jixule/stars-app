<template>
  <div class="app-container">
    <el-button type="primary" @click="$router.push({name:'UserNew'})">新增</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
      <el-table-column label="用户名" prop="userName" width="220"></el-table-column>
      <el-table-column label="头像" width="110" align="center">
        <template slot-scope="scope">
          <img style="width:80px;max-height:80px" :src="scope.row.avatar" alt />
        </template>
      </el-table-column>
      <el-table-column label="密码" width="110" align="center" prop="password"></el-table-column>
      <el-table-column label="昵称" align="center" prop="nickName"></el-table-column>
      <el-table-column class-name="status-col" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="small" @click="editPwd(scope.row)">密码</el-button>
          <el-button type="primary" icon="el-icon-edit" size="small" @click="editOne(scope.row)">信息</el-button>
          <el-button
            type="success"
            icon="el-icon-location"
            size="small"
            @click="getAddr(scope.row)"
          >获取地址</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="delOne(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="changeHandle"
      background
      layout="prev, pager, next"
      :total="totalCount"
    ></el-pagination>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="addresses">
        <el-table-column property="receiver" label="收货人"></el-table-column>
        <el-table-column property="mobile" label="手机号"></el-table-column>
        <el-table-column property="regions" label="省市区"></el-table-column>
        <el-table-column property="address" label="街道门牌号"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
// @ 表示src路径
import { users, delUser } from '@/api/product'
import axios from 'axios'
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      list: [],
      listLoading: true,
      totalCount: 0,
      addresses: [
        {
          receiver: '',
          mobile: '',
          regions: '',
          address: ''
        }
      ],
      dialogTableVisible: false
    }
  },
  async created() {
    this.loadData()
  },
  methods: {
    // 获取用户地址
    async getAddr(item, page) {
      this.dialogTableVisible = true

      console.log(item._id)
      const res = await axios.get(
        `http://47.98.226.107:3000/api/v1/admin/addresses/${item._id}`,
        {
          headers: {
            authorization: 'Bearer ' + getToken()
          }
        }
      )
      console.log(res.data.addresses)
      this.addresses = res.data.addresses // 只查到数组名就能遍历
    },

    // 页码选择改变执行
    changeHandle(p) {
      // alert(p)
      this.loadData(p)
    },

    // 修改用户信息
    editOne(item) {
      this.$router.push({
        name: 'UserEdit',
        query: {
          id: item._id
        }
      })
    },
    // 修改用户密码
    editPwd(item) {
      this.$router.push({
        name: 'PwdEdit',
        query: {
          id: item._id
        }
      })
    },

    delOne(item) {
      this.$confirm('是否将此数据删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await delUser(item._id)
          console.log(res)
          this.loadData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {})
    },
    // 从服务器加载数据
    async loadData(page = 1) {
      // this.listLoading = true
      const res = await users({ page })
      this.listLoading = false
      this.list = res.users
      this.totalCount = res.totalCount
    }
  }
}
</script>
