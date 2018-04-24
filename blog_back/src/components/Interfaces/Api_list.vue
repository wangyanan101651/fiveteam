<template>
  <div class="aa">
      <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="backorfont"
      label="前后端分类"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
     <el-table-column
      label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini" @click='bianji(scope.row,"amend")'>编辑</el-button>
                <el-button
                size="mini"
                type="danger" @click="shanchu(scope.row)">删除</el-button>
            </template>
    </el-table-column>
  </el-table>
</template>
        <div>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="nowPage"
            :page-sizes="[2, 5, 10, 15]"
            :page-size="everyrows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.olddata.length">
        </el-pagination>
        </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
         this.everyrows = val
         this.tableData = this.olddata.slice((this.nowPage - 1) * this.everyrows, this.everyrows * this.nowPage)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.nowPage = val
        this.tableData = this.olddata.slice((val - 1) * this.everyrows, this.everyrows * val)
      },
      bianji(data,state){
          this.$router.push('/back/bianji/' + data.id)
      },
      modle(){
          return  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
      },
      shanchu(data){
             this.modle().then(()=>{
                 this.axios.post('/api/Interface/add/deletejiekou',{
                     id:data.id
                 }).then(data=>{
                     if(data.data.code=='4051'){
                         this.$message({
                            message: data.data.msg,
                            type: 'success',
                            showClose:true
                       });
                     }
                 })
             }).catch(() => {
              this.$message({
                type: 'error',
                message: '已取消删除'
              });          
          });
      }
    },
    data() {
      return {
        currentPage4: 4,
        tableData: [],
        datas:null,
        olddata:[],
        everyrows:5,
        nowPage:1
      };
    },
    mounted(){
        console.log(this.$route.query.type)
        this.axios.get('/api/Interface/add/houquJiekou').then(data=>{
            data.data.data.forEach(function(item,index) {
                if(item.backorfont==this.$route.query.type){
                   /// this.tableData.push(item)
                   this.olddata.push(item)
                }
            }, this);
           this.tableData=this.olddata.slice(0, this.everyrows)
           console.log(this.tableData,'kkk')
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