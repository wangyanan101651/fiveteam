<template>
  <el-table
    :data="lists"
    style="width: 70%">

     <el-table-column type="expand">
       <template slot-scope="props">
            <el-table
            :data="props.row.twoClass"
            style="width: 150%">
               <el-table-column
              label="中文名称"
              prop="cnname">
            </el-table-column>
            <el-table-column
              label="英文名称"
              prop="enname">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row,'two')">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row,'two')">删除</el-button>
            </template>
          </el-table-column> 
          </el-table>
      </template> 
    </el-table-column> 
  
    <el-table-column
      label="中文名称"
      prop="oneClass.cnname">
    </el-table-column>
    <el-table-column
      label="英文名称"
      prop="oneClass.enname">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,'one')">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,'one')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData5: [],
        list:[],
        lists:[],
        id:0,
        name:''
      }
    },
    methods:{
      handleEdit(index,data,state){
       // console.log(data)
          if(state=='one'){
              localStorage.setItem('oneClass',JSON.stringify(data))
              this.$router.push({path:'/back/amend_class',query:{state:state}})
          }else{
              localStorage.setItem('twoClass',JSON.stringify(data))
              this.$router.push({path:'/back/amend_class',query:{state:state}})
          }
      },
      modle(){
          return  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
      },
      handleDelete(index,data,state){
          if(state=='one'){
          this.modle().then(() => {
            this.axios.post('/api/back/class/deleteClassOne',{
                  id:data.oneClass.id,
                  enname:data.oneClass.enname
                }).then(data=>{
                    if(data.data.code=='2041'){
                        this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                    }
                })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
          });
          }else{
            this.axios.post('/api/back/class/deleteClassTwo',{
                oneId:data.parent_id,
                twoId:data.id,
                enname_one:data.enname
            }).then(data=>{
              if(data.code==2051){
                console.log("删除数据成功")
              }
            })
          }
      }
    },
    created(){
      this.axios.get('/api/back/class/Class').then(data=>{
          if(data.data.code==2031){
              this.lists = data.data.data.oneData.map((i)=>{
                let obj={
                    oneClass:i,
                    twoClass:[]
                }
                data.data.data.twoData.forEach((j)=>{
                  if(j.parent_id==i.id){
                    obj.twoClass.push(j)
                  }
                })
                return obj
            })
          }
      })
    }
  }
</script>
