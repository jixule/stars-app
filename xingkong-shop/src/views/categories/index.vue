<template>
  <div class="app-container">
    <el-button type="primary" @click="$router.push({name:'CategoriesNew'})">新增</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
      <el-table-column label="商品分类名字" prop="name" width="220"></el-table-column>
      <el-table-column label="主图" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:80px;max-height:80px"
            :src="scope.row.coverImg?scope.row.coverImg:'http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg'"
            alt
          />
        </template>
      </el-table-column>
      <el-table-column label="简介" align="center" prop="descriptions"></el-table-column>
      <el-table-column class-name="status-col" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="small" @click="editOne(scope.row)"></el-button>
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
  </div>
</template>

<script>
// @ 表示src路径
import { proCategories, delCategoriesById } from '@/api/product'

export default {
  data() {
    return {
      list: [],
      listLoading: true,
      totalCount: 0
    }
  },
  async created() {
    this.loadData()
  },
  methods: {
    // async showPro(item, page) {
    //   this.dialogTableVisible = true

    //   console.log(item._id)
    //   const res = await axios.get(
    //     `http://47.98.226.107:3000/api/v1/admin/product_categories/${item._id}`,
    //     {
    //       params: {
    //         page: 1,
    //         per: 100
    //       },
    //       headers: {
    //         authorization: 'Bearer ' + getToken()
    //       }
    //     }
    //   )
    //   console.log(res.data)
    //   this.addresses = res.data // 只查到数组名就能遍历
    // },

    // 页码选择改变执行
    changeHandle(p) {
      // alert(p)
      this.loadData(p)
    },
    editOne(item) {
      this.$router.push({
        name: 'CategoriesEdit',
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
          const res = await delCategoriesById(item._id)
          console.log(res)
          this.loadData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // })
        })
    },
    // 从服务器加载数据
    async loadData(page = 1) {
      // this.listLoading = true
      const res = await proCategories({ page })
      this.listLoading = false
      this.list = res.categories
      this.totalCount = res.totalCount
    }
  }
}
</script>
