<template>
  <el-table
    :data="tableData5"
    style="width: 50%">
    <el-table-column type="expand">
      <template slot-scope="props">

            <el-table
            :data="tableData5"
            style="width: 100%">
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
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
          </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="中文名称"
      prop="id">
    </el-table-column>
    <el-table-column
      label="英文名称"
      prop="name">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        list:[]
      }
    },
    methods:{
        initData(data){
          return data.oneData.map((i)=>{
            let obj={
              oneClass:i,
              twoClass:[]
            }
            data.twoData.forEach((j)=>{
              if(j.parent_id==i.id){
                obj.twoClass.push(j)
              }
            })
            return obj
          })
        }
    },
    created(){
      this.axios.get('/api/back/class/Class').then(data=>{
          if(data.data.code==2031){
              this.$message({
                      message: data.data.msg,
                      type: 'success',
                      showClose: true
              });
              this.tableData5=this.initData(data.data.data)
          }
      })
    }
  }
</script>
