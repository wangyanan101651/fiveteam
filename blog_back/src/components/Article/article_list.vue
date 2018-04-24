<template>
  <div class="aa">
      <template>
        <el-table :data="formData" style="width: 100%">
            <el-table-column label="标题">
              <template scope="scope">
                <span>{{scope.row.article}}</span>
              </template>
            </el-table-column>
            <el-table-column label="作者">
              <template scope="scope">
                <span>{{scope.row.editer}}</span>
              </template>
            </el-table-column>
            <el-table-column label="时间">
              <template scope="scope">
                <span>{{scope.row.time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button
                  size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                  <el-button
                  size="mini"
                  type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="everyrows"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.olddata.length">
        </el-pagination>
        
        </template>

  </div>
</template>
<script>
  export default {
    name:'add_article',
    methods: {
      dbclick (row) {
        this.$router.push({name:'api_list_detail',params:{data:row}})        
      },
      handleEdit(index,row){
        this.$router.push({path:'/back/amend_article',params:{id:row.id}})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.everyrows = val;
        this.formData = this.olddata.slice((this.nowPage -1 ) * this.everyrows,this.everyrows*this.nowPage)
      },
      handleCurrentChange(val) {
        this.nowPage = val
        this.formData = this.olddata.slice ((val -1) * this.everyrows,this.everyrows * val)
        console.log(`当前页: ${val}`);
      },
      handleDelete() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    data() {
      return {
        currentPage4: 4,
        formData:[],
        olddata:[],
        everyrows:5,
        nowPage:1
      };
    },
    created(){
        this.axios.get("/api/back/article/getArticleList").then((data) => {
            console.log(data)
            if(data.data.code == '3021'){
              this.olddata = data.data.data
              this.formData = this.olddata.slice(0,this.everyrows)
            }
        })
    }

  }
</script>
<style>

    .aa{
        width: 100%;
        width: calc(100% - 210px);
    }
</style>