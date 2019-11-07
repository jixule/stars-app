<template>
  <div class="app-container">
    <el-button type="primary" @click="$router.push({name:'ProductNew'})">新增</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
      <el-table-column label="商品名字" prop="name" width="220"></el-table-column>
      <el-table-column label="图片" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:80px;max-height:80px"
            :src="scope.row.coverImg?scope.row.coverImg:'http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg'"
            alt
          />
        </template>
      </el-table-column>
      <el-table-column label="图片" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:80px;max-height:80px"
            :src="scope.row.coverImg1?scope.row.coverImg1:'http://img.52z.com/upload/news/image/20180308/20180308033241_32243.jpg'"
            alt
          />
        </template>
      </el-table-column>
      <el-table-column label="价格" width="110" align="center" prop="price"></el-table-column>
      <el-table-column label="库存" width="110" align="center" prop="quantity"></el-table-column>
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
import { products, delById } from '@/api/product'

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
    // const res = await products()
    // console.log(res)
    // this.listLoading = false
    // this.list = res.products
    // this.totalCount = res.totalCount
  },
  methods: {
    // 页码选择改变执行
    changeHandle(p) {
      // alert(p)
      this.loadData(p)
    },
    editOne(item) {
      this.$router.push({
        name: 'ProductEdit',
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
          const res = await delById(item._id)
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
      const res = await products({ page })
      this.listLoading = false
      this.list = res.products
      this.totalCount = res.totalCount
    }
  }
}
</script>
