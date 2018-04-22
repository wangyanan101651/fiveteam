<template>
  <div class="aa">
      <template>
        <el-table
            :data="tableData5"
            style="width: 100%">
            
            <el-table-column
            label="标题"
            prop="title">
            </el-table-column>
            <el-table-column
            label="作者"
            prop="name">
            </el-table-column>
            <el-table-column
            label="时间"
            prop="time">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini">编辑</el-button>
                <el-button
                size="mini"
                type="danger">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </template>

        <div>
            <span class="demonstration">完整功能</span>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5, 10, 15, 20,25]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1">
            </el-pagination>
        </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage4: 4,
        tableData5:[
            {
                title:'担惊受恐',
                name:'王亚楠',
                time:'2018-12-8'
            }
        ]
      };
    }
  }
</script>
<style>

    .aa{
        width: 100%;
        width: calc(100% - 210px);
    }
</style>